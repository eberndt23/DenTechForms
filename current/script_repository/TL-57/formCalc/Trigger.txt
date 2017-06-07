 topmostSubform.Page1.LineTable.Output.Trigger::calculate - (FormCalc, client)
var Check = RenderChart.value
if (Check eq "true") then	
	;Calculate the factor by which the charts is calculated 
	var Factor
	var MaxInput = Max(Input.Table.ChartValues[*].Col[*].Amount)
	var Fmin
	var Fmax
	;Range for the chart = 10.000 (-50 = 9950)
	for f = 0 upto 9950 step 50 do
		Fmin = f
		Fmax = Fmin + 50
		if (Within(MaxInput, Fmin, Fmax) eq 1) then
			Factor = 1 / (Fmax / 100)
		endif
	endfor

	;Count the number of rows
	var nRows = Input.Table.ChartValues.instanceManager.count 
	;Count the number colums and set same number of charts + one as placeholder
	var nColumns = Input.Table.ChartValues[nRows -1].Col.instanceManager.count 
	_Chart.setInstances(nColumns + 1)

	;Set of variables we need in the loops
	var GraphValue			;Value for the line
	var GraphLabel			;Value for the label
	var PrevGraphValue		;Value of the previous line
	var GraphDiff			;Difference between the current an the previous line
	var LineStart			;Start position of the current line
	var ContainerHeight 	;Reference height of a subform > we use the subform "hLines"
	var Offset 				;Offset of the line from the start position

	;Initiate for loop to calculate every single line
	;Loop through each row of the input table
	for r=0 upto nRows -1 step 1 do
		;Loop through each column of the current row
		for c=0 upto nColumns -1 step 1 do
	
			;Make subform "Chart" flowing top to bottom 
			;This is neccessary to allow add instances of the wrapped subforms
			Chart[c].layout = "tb"
			;Now set the new number of instances for the subforms "Line" and "Labels"
			Chart[c]._Line.setInstances(nRows)
			Chart[c]._Label.setInstances(nRows)
			;Reset the subform "Chart" to positioned, so the line charts can overlap each other
			Chart[c].layout = "position"
			;Get the reference height from the subform "hLines"
			ContainerHeight = UnitValue(Chart[c].hLines.h, "in")
			;Reposition the line to the bottom of the surrounding subform
			Chart[c].Line[r].y = ContainerHeight 	
	
			GraphValue = Input.Table.ChartValues[r].Col[c].Amount
			Chart[c].Line[r].presence = "visible"
			Chart[c].Label[r].presence = "visible"

			Chart[0].Line[r].presence = "invisible"		;first line is only a placeholder
		
			if(c eq 0) then
				PrevGraphValue = 0
				LineStart = ContainerHeight 
			else
				PrevGraphValue = Input.Table.ChartValues[r].Col[c-1].Amount
				LineStart = UnitValue(Chart[c-1].Line.LineGraph.y, "mm") 
			endif
		
			;Calculate Y-Axis	
			for y = 10 downto 0 step 1 do
				Output.yAxis.Mark[y].Mark.value.text.value = Round((10 - y) * 10 / Factor)
			endfor 

			;Select a color for the lines
			var nColor = Choose(r+1, 			;Instance (+1) = position in this list	
								"238,0,0", 		;Red
								"255,99,71", 	;Tomato
								"255,127,80", 	;Coral
								"255,140,0", 	;DarkOrange
								"255,165,0", 	;Orange
								"255,215,0", 	;Gold
								"255,255,0", 	;Yellow
								"238,238,0", 	;Yellow2
								"154,205,50", 	;YellowGreen
								"69,139,0",		;Chartreuse
								"0,139,0",		;Green
								"0,139,69",		;SpringGreen
								"69,139,116",	;Aquamarine
								"82,139,139",	;DarkSlateGray
								"0,139,139",	;Cyan
								"0,134,139")	;Turquoise

			;Assign a color to the currrent line and label
			Chart[c].Line[r].LineGraph.value.line.edge.color.value = nColor
			Input.Table.ChartValues[r].Color.Color.value.rectangle.fill.color.value = nColor

			;Calculate the difference between the current and previous line
			GraphDiff = GraphValue - PrevGraphValue 

			;Assign the new height to the current line
			Chart[c].Line[r].LineGraph.h = UnitValue(Abs(GraphDiff), "in") / 25.4 * Factor 
			Chart[c].Label[r].LineValue.value.text.value = GraphValue
		
			;Assign the caption of the current row as toolTip
			GraphLabel = Input.Table.ChartValues[r].Label
			Chart[c].Label[r].LineValue.assist.toolTip.value = GraphLabel

			;Set the slope of the line 
			if(GraphDiff >= 0) then
				Chart[c].Line[r].LineGraph.value.#line.slope = "/"
			else
				Chart[c].Line[r].LineGraph.value.#line.slope = "\"
			endif
		
			if(c eq 0) then
				Offset = ContainerHeight - UnitValue(Abs(GraphDiff), "in") / 25.4 * Factor
				Chart[c].Line[r].y =  Offset
				Chart[c].Label[r].y = Offset
			else
				if(GraphDiff >= 0) then
					Offset = ContainerHeight - GraphValue / 25.4 * Factor
					Chart[c].Line[r].y = Offset
					Chart[c].Label[r].y = Offset
				else
					Offset = ContainerHeight - (GraphValue + Abs(GraphDiff)) / 25.4 * Factor 
					Chart[c].Line[r].y = Offset
					Chart[c].Label[r].y = ContainerHeight - (GraphValue / 25.4) * Factor
				endif
			endif	
		endfor
	endfor
endif




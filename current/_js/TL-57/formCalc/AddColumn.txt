 topmostSubform.Page1.LineTable.Input.Table.Headline.AddColumn::click - (FormCalc, client)

if (Headline.Col.instanceManager.count < Headline.Col.occur.max) then
	Headline._Col.addInstance(1)
	ChartValues[*]._Col.addInstance(1)
	RenderChart.value = "true"
	Output.Trigger.execCalculate()
endif

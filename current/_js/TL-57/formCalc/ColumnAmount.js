 topmostSubform.Page1.LineTable.Input.Table.ChartValues.Col.Amount::enter - (FormCalc, client)

OldValue.value = $

 topmostSubform.Page1.LineTable.Input.Table.ChartValues.Col.Amount::exit - (FormCalc, client)

if ($ > 10000) then
	$ = 10000
endif

if ($ < 0) then
	$ = 0
endif

if ($ ne OldValue.value) then
	RenderChart.value = "true"
	Output.Trigger.execCalculate()
endif

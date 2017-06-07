REM -- We need the path of the two program we use in this example
SET PDFCONFIG=C:\Program Files\Bullzip\PDF Printer\API\EXE\config.exe
REM -- Clear settings.ini
"%PDFCONFIG%" /C

REM -- SET PDF SETTINGS

REM -- Set PDF file name. The %CD% variable is the current folder of the batch file.
"%PDFCONFIG%" /S "Output" "%CD%\<smarttitle><date>.pdf"

REM -- Hide settings dialog
"%PDFCONFIG%" /S "ShowSettings" "never"

REM -- Disable overwrite confirmation
"%PDFCONFIG%" /S "ConfirmOverwrite" "no"

REM -- Show PDF after conversion
"%PDFCONFIG%" /S "ShowPDF" "no"

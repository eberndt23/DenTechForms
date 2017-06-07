@echo off
"C:\Program Files\gs\gs9.21\bin\gswin64c.exe" ^
    -sDEVICE=pdfwrite ^
    -o "%CD%\TL-57.pdf" ^
    "%CD%\TL-57.ps"

del %cd%\*.ps
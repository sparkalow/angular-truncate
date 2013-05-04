:: Created by npm, please don't edit manually.
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\LiveScript\bin\livescript" %*
) ELSE (
  node  "%~dp0\..\LiveScript\bin\livescript" %*
)
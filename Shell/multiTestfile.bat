@echo off

echo Da ist ein Mutlitestfile

echo 1. lesen des Verzeichnisses

dir

echo 2. Was steht in der Datei Templates\File1.txt

Setlocal EnableDelayedExpansion

FOR /F "tokens=*" %%i IN (Templates\File1.txt) DO (

  set v=%%i

  echo "!v!"

  echo "%%i"

)

echo 3. starte ein 2. Script

call Programme\Testprogramm.bat 

exit 0

@echo off
echo Running the application...

REM You can customize the paths based on your project structure
start cmd /k "npm run start"

REM Open Chrome window
start chrome http://localhost:3000
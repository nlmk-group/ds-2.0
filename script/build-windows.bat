@echo off

call yarn convert:dark-theme-tokens

:: Очистка директорий
if exist lib rmdir /s /q lib
if exist cache rmdir /s /q cache

:: Сборка Vite (только JS)
set BUILD_MODE=lib
call yarn vite build

:: Копирование CSS файлов
mkdir lib\css
xcopy /e /i /y public\css lib\css

:: Генерация типов
echo Generating TypeScript declarations...
call yarn build:types

:: Копирование index файлов в корень
copy lib\dist\components\index.d.ts lib\

:: Выполнение скрипта для изменения путей
node script\changePath.js
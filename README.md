# Do not do the maths

## Pre-requisitos
- Python 3.10.x+
- Node 16.x+

## Levantar proyecto
1. Clonar el repositorio, posicionarse con la terminal dentro de la carpeta.
    - Serán necesarias 2 terminales, una para back y otra para front

### Levantar backend
2. En una de las terminales, entrar a la carpeta back.
3. Crear un entorno virtual y activarlo
    - `python -m venv env`
    - Activarlo en Linux:
        - `source ./env/bin/activate`
    - Activarlo en Windows:
        - `env\Scripts\activate.bat` (cmd)
        - `env\Scripts\Activate.ps1` (PowerShell)
4. Instalar dependencias
    - `pip install -r requirements.txt`
5. Crear un archivo .env dentro de back con la siguiente variable:
    - DOLARITO_API_KEY (valor obtenido de la web de dolarito.ar)
6. Levantar el servidor de back
    - `python main.py`

### Levantar el front
7. En la otra terminal, entrar a la carpeta front.
8. Instalar dependencias:
    - `npm install`
9. Levantar servidor de front
    - `npm start`
10. Abrir la url indicada en la terminal en un browser
    - ej: http://localhost:5173/
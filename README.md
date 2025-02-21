# Django React Task App

Esta es una aplicación de tareas construida con Django para el backend y React para el frontend. La aplicación permite a los usuarios crear, actualizar y eliminar tareas.

## Características

- Crear tareas
- Actualizar tareas
- Eliminar tareas
- Listar tareas

## Tecnologías Utilizadas

- Django
- Django REST Framework
- React
- React Router
- Tailwind CSS
- Axios
- React Hook Form
- React Hot Toast

## Requisitos Previos

- Python 3.12.8
- Node.js y npm

## Instalación

### Backend (Django)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/django-react-task-app.git
   cd django-react-task-app

2. Crea y activa un entorno virtual:
   ```bash
   python -m venv env
   source env/bin/activate  # En Windows usa `env\Scripts\activate`
   ```

3. Instala las dependencias del backend:
   ```bash
   pip install -r requirements.txt
   ```

4. Realiza las migraciones de la base de datos:
   ```bash
   python manage.py migrate
   ```

5. Inicia el servidor de desarrollo de Django:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Navega al directorio del frontend:
   ```bash
   cd client
   ```

2. Instala las dependencias del frontend:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo de React:
   ```bash
   npm run dev
   ```

## Uso

1. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación React.
2. La API de Django estará disponible en `http://localhost:8000`.
```

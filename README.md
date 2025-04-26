# ToDo Cipas List

ToDo Cipas List es una aplicación desarrollada en React para gestionar tareas de manera eficiente. Permite a los usuarios listar tareas pendientes, asignar responsables, proporcionar enlaces relacionados con las tareas y marcar su estado de completado.

## Características

- **Listado de Tareas**: Visualiza todas las tareas pendientes y completadas en una interfaz amigable.
- **Asignación de Responsables**: Asigna tareas a miembros específicos del equipo.
- **Enlaces Relacionados**: Proporciona enlaces directos para cada tarea (opcional).
- **Estado de Completado**: Marca y desmarca tareas como completadas.
- **Gestión de Tareas**: Agrega, edita y elimina tareas fácilmente.
- **Integración con Firebase**: Las tareas se almacenan y gestionan en tiempo real utilizando Firebase Firestore.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)
- Una cuenta de Firebase con un proyecto configurado.

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/yourusername/todo-cipas-list.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd todo-cipas-list
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Configura Firebase:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las credenciales de tu proyecto de Firebase:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

## Ejecución de la Aplicación

Para iniciar el servidor de desarrollo, ejecuta:
```
npm run dev
```
Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:3000`. u otro puerto dependiendo de tus puertos disponibles.

## Construcción para Producción

Para crear una versión optimizada de la aplicación, ejecuta:
```
npm run build
```
Esto generará una carpeta `build` con la aplicación lista para desplegar.

## Estructura de Carpetas

```
todo-cipas-list
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SocialCircle.jsx
│   │   ├── Tarea.jsx
│   │   └── TaskList.jsx
│   ├── styles
│   │   ├── app.css
│   │   ├── footer.css
│   │   └── tarea.css
│   ├── utils
│   │   └── firebaseConfig.js
│   ├── App.jsx
│   ├── index.js
│   └── data
│       └── tasks.json
├── package.json
├── .gitignore
└── README.md
```

## Contribución

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
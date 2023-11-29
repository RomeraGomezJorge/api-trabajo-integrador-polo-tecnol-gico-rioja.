#  API Proyecto Integrador - Puntos de interés universitarios

<p> 
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" style="max-width: 100%;"/>  

<img src="https://img.shields.io/badge/Node.js-323330?style=for-the-badge&logo=node.js&logoColor=43853D"  style="max-width: 100%;"/>

<img src="https://img.shields.io/badge/Express.js-323330?style=for-the-badge&logo=express&logoColor=404D5"  style="max-width: 100%;"/>
<img src="https://img.shields.io/badge/MongoDB-323330?style=for-the-badge&logo=mongodb&logoColor=4EA94B"  style="max-width: 100%;">

</p>
Este repositorio contiene un servidor Express diseñado para gestionar puntos de interés destinados a estudiantes universitarios. Proporciona endpoints que permiten la recuperación, creación, actualización y eliminación de estos puntos, facilitando la organización y acceso a información relevante para la comunidad universitaria.


## Requisitos Previos
- [Node.js](https://nodejs.org/): v16.20.1 o superior
- [npm](https://www.npmjs.com/): v8.19.4 o superior
- [Git](https://git-scm.com/): Asegúrate de tener Git instalado en tu sistema.

## Configuración de la Base de Datos
Este proyecto utiliza MongoDB Atlas para la base de datos. Asegúrate de tener las credenciales de conexión configuradas adecuadamente.

1. Renombra el archivo `.env.example` a `.env` en el directorio raíz del proyecto.

2. Agrega la siguiente variable de entorno al archivo `.env`:

    ```env
    MONGO_CONNECTION=Tu_URI_de_MongoDB_Atlas
    ```

   Reemplaza `Tu_URI_de_MongoDB_Atlas` con la URI de conexión proporcionada por MongoDB Atlas.

   **Nota:** Puedes encontrar la URI de conexión en el panel de MongoDB Atlas después de crear un clúster y configurar las credenciales.

3. Guarda el archivo `.env`.

Asegúrate de que el archivo `.env` no se comparta en repositorios públicos y se mantenga seguro, ya que contiene información sensible como las credenciales de conexión a la base de datos.

## Configuración

Sigue estos pasos para configurar y ejecutar el servidor:

1. Clona este repositorio en tu máquina local:

   ```bash
    git clone https://github.com/RomeraGomezJorge/api-trabajo-integrador-polo-tecnologico-rioja.git
   ```
2. Navega al directorio del proyecto:

    ```bash
    cd api-trabajo-integrador-polo-tecnologico-rioja
    ```
3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```
### Uso

 Una vez que hayas configurado el servidor y hayas instalado las dependencias, puedes ejecutarlo usando el siguiente comando:

   ```
   npm run dev
   ```
El servidor Express estará en funcionamiento y escuchando en el puerto 3000 por defecto. Puedes acceder a los endpoints mencionados anteriormente utilizando una herramienta como Postman o haciendo solicitudes HTTP desde tu aplicación cliente.

## Documentación de API

| Método | Ruta             | Descripción                                          |
|--------|------------------|------------------------------------------------------|
| GET    | `/api/location`  | Recupera todos los puntos de interés.                |
| POST   | `/api/location`  | Crea un nuevo punto de interés.                      |
| PATCH  | `/api/location`  | Actualiza un punto de interés.                       |
| GET    | `/api/location/:id` | Recupera un punto de interés por su ID.             |
| DELETE | `/api/location/:id` | Elimina un punto de interés por su ID.              |

## Ejemplo de Cuerpo de Solicitud

   ```json
    {
      // Nombre (debe ser una cadena no vacía y requerida)
      "name": "Ejemplo Location",
   
      // Descripción (opcional, puede ser una cadena)
      "description": "Descripción de ejemplo",
   
      // Imagen (opcional, debe ser una cadena con un valor predeterminado si no se proporciona)
      "image": "example.png",
   
      // Dirección (debe ser un objeto con las siguientes propiedades)
      "address": {
         
         // Calle (debe ser una cadena no vacía y requerida)
         "street": "Calle Ejemplo",
   
         // Ciudad (debe ser una cadena no vacía y requerida)
         "city": "Ciudad Ejemplo",
   
         // Estado (debe ser una cadena no vacía y requerida)
         "state": "Estado Ejemplo",
   
         // Código postal (debe ser una cadena no vacía y requerida)
         "postal_code": "12345",
   
         // País (debe ser una cadena no vacía y requerida)
         "country": "País Ejemplo"
      },
   
      // Información de contacto (opcional)
      "contact": {
         
         // Teléfono (puede ser una cadena)
         "phone": "123-456-7890",
   
         // Correo electrónico (debe ser una cadena válida de correo electrónico)
         "email": "ejemplo@example.com"
      },
   
      // Información adicional (opcional)
      "additional_info": {
         
         // Sitio web (opcional, debe ser una cadena válida de URI)
         "website": "http://www.ejemplo.com",
   
         // Días de operación (debe ser un arreglo de días válidos y requerido)
         "days_of_operation": ["Monday", "Wednesday", "Friday"],
   
         // Horario comercial (debe ser un objeto con las siguientes propiedades y requerido)
         "business_hours": {
            
            // Hora de apertura (debe estar en formato HH:MM y requerida)
            "opening": "09:00",
   
            // Hora de cierre (debe estar en formato HH:MM y requerida)
            "closing": "18:00"
         },
   
         // Coordenadas (debe ser un objeto con latitud y longitud numéricas requeridas)
         "coordinates": {
            "latitude": 40.7128,
            "longitude": -74.0060
         },
   
         // Redes sociales (opcional, cada una debe ser una cadena válida de URI)
         "social_media": {
            "facebook": "https://www.facebook.com/ejemplo",
            "twitter": "https://twitter.com/ejemplo",
            "linkedin": "https://www.linkedin.com/company/ejemplo"
         }
      }
   }

   ```



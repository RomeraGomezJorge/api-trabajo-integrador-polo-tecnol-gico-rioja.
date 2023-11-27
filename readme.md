#  API Proyecto Integrador - Puntos de interés universitarios

<p> 
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" style="max-width: 100%;"/>  

<img src="https://img.shields.io/badge/Node.js-323330?style=for-the-badge&logo=node.js&logoColor=43853D"  style="max-width: 100%;"/>

<img src="https://img.shields.io/badge/Express.js-323330?style=for-the-badge&logo=express&logoColor=404D5"  style="max-width: 100%;"/>
<img src="https://img.shields.io/badge/MongoDB-323330?style=for-the-badge&logo=mongodb&logoColor=4EA94B"  style="max-width: 100%;">

</p>
Este repositorio contiene un servidor Express diseñado para gestionar puntos de interés destinados a estudiantes universitarios. Proporciona endpoints que permiten la recuperación, creación, actualización y eliminación de estos puntos, facilitando la organización y acceso a información relevante para la comunidad universitaria.


## Requisitos Previos
Antes de ejecutar este servidor, asegúrate de tener Node.js (v16.20.0 o superior) y npm (v16.20.0    o superior) instalados en tu sistema. Puedes descargarlos desde [Node.js official website](https://nodejs.org/) y Git desde [Git official website](https://git-scm.com/).

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

    npm run dev

El servidor Express estará en funcionamiento y escuchando en el puerto 3000 por defecto. Puedes acceder a los endpoints mencionados anteriormente utilizando una herramienta como Postman o haciendo solicitudes HTTP desde tu aplicación cliente.

## Documentación de API

| Método | Ruta             | Descripción                                          |
|--------|------------------|------------------------------------------------------|
| GET    | `/api/location`  | Recupera todos los puntos de interés.                |
| POST   | `/api/location`  | Crea un nuevo punto de interés.                      |
| PATCH  | `/api/location`  | Actualiza un punto de interés.                       |
| GET    | `/api/location/:id` | Recupera un punto de interés por su ID.             |
| DELETE | `/api/location/:id` | Elimina un punto de interés por su ID.              |


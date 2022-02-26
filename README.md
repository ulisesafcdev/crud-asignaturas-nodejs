# Proyecto *Asignaturas* desarrollado en NODE JS *#3*

**_CRUD en NODE JS, EXPRESS, MONGODB_**

- CREATE
- READ
- UPDATE
- DELETE

**Este es otro proyectos en donde implemente las operaciones basicas de un CRUD.**

Proyectos anteriores de como he ido desarrollando poco a poco estos proyectos, puedes leer el README para que te enteres de las impementaciones de cada proyecto.
- **#1**: [Proyecto Usuarios](https://github.com/ulisesafcdev/prUsuarios-node-express-mongodb).
- **#2**: [Proyecto Contactos](https://github.com/ulisesafcdev/crud-contactos-nodejs-express-mongodb)

En este nuevo proyecto implemente: 

- Implementé la conexion a **MONGODB**
- Implementé el **Schema** de la coleccion de la base de datos en un _modelo_
- En un controlador mande a renderizar una vista _(index)_ y una constante en donde va un objeto con los datos de la coleccion.
- Estos datos se muestran en la vista, la cual se utilizó **PUG** para mostrar esos datos.
- Se implementó metodos en los cuales se retornan las operaciones *CREATE, READ UPDATE and DELETE*. Por lo tanto se puede mandar a invocar estos métodos si quieres crear un nuevo registro, actualizar o eliminar.

**Lo nuevo de este proyecto es en la vista. Se creo una tabla en donde se recorre el objeto con los datos de la coleccion en la base de datos.
Asi podemos ver mejor los datos, y ver como se agregan nuevos datos a la tabla, ver como se actualizan los datos, ver los datos que se han eliminado de la tabla.
Todo esto cuando invocamos los métodos que retornan las operaciones basicas de un *CRUD*.**

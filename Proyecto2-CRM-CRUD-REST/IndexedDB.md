## IndexedDB

Es una base de datos de objetos que permite almacenar y recuperar objetos indexados.

- Permite almacenar objetos que contienen claves y valores.
- Almacena casi todo tipo de valores y datos.
- Soporta transacciones de seguridad a la hora de almacenar y recuperar datos.
- Permite consultas tanto por clave como por valor
- Permite almacenar una mayor cantidad de datos que localStorage y sessionStorage.

### Crear una base de datos

````javascript

    // Crear una variable global donde guardar la base de datos
    let baseDatosGlobal

    // Crear una base de datos
    function webInitonLoad(){
        // Syntax: indexedDB.open(nombre, version)
        let solicitud = indexedDB.open('Datos', 1)
    }
    // Evento que se ejecuta cuando se carga la página junto con todos los recursos
    window.addEventListener('load', webInitonLoad)

````

### Eventos de la base de datos

````javascript
    
    // Crear una base de datos
    function webInitonLoad(){
        // Syntax: indexedDB.open(nombre, version)
        let solicitud = indexedDB.open('Datos', 1)

        // Eventos de la base de datos
        
        // Evento que se ejecuta cuando se produce un error
        solicitud.addEventListener('error', mostrarError)
        
        // Evento que se ejecuta cuando se produce un éxito
        solicitud.addEventListener('success', iniciarBaseDatos)
        
        // Evento que se ejecuta cuando se produce un cambio en la versión
        solicitud.addEventListener('upgradeneeded', crearAlmacen)
        
    }
    // Evento que se ejecuta cuando se carga la página junto con todos los recursos
    window.addEventListener('load', webInitonLoad)

````
### Error

Este evento se ejecuta cuando se produce un error, por ejemplo, cuando no se puede abrir la base de datos.

````javascript
    
    // Mostrar un error
    function mostrarError(evento){
        console.log('Error: ' + evento.target.error)
    }

````

### Iniciar la base de datos

Este evento se ejecuta cuando se produce un éxito, por ejemplo, cuando se abre la base de datos, asumiendo que la base de datos ya existe en el sistema.

````javascript
    
    // Iniciar la base de datos
    function iniciarBaseDatos(evento){
        // Asignar la base de datos a una variable global
        baseDatosGlobal = evento.target.result
        console.log('Base de datos: ' + baseDatos)
    }

````

### Crear un almacén

En caso de que la base de datos no exista, se ejecuta el evento upgradeneeded, el cual se encarga de crear los almacenes y los índices de datos.

````javascript
    
    // Crear un almacén
    function crearAlmacen(evento){
        // Obtener la base de datos
        let baseDatos = evento.target.result
        
        // Crear un almacén
        // Syntax: createObjectStore(nombre, opciones)
        // keyPath: clave primaria
        // autoIncrement: incremento automático
        let almacen = baseDatos.createObjectStore('Usuarios', {keyPath: 'id', autoIncrement: true})

        // Crear un índice
        // Syntax: createIndex(nombre, clave, opciones)
        // unique: valores únicos
        almacen.createIndex('buscarNombre', 'nombre', {unique: false})
        
    }

````

> Tambien si queremos agregar datos de prueba a la hora de crear el almacen lo ideal seria hacerlo en esa funcion, cuando se ejecute el evento.
> 
> ```javascript
>     // Crear un array de objetos que contenga los datos de prueba
>     const usuarios = [
>         {nombre: 'Rafael'},
>         {nombre: 'Natasha'},
>         {nombre: 'Marta'},
>         {nombre: 'Serafin'},
>         {nombre: 'Gustavo'},
>     ]
>
>    usuarios.forEach(usuario => {
>        // Usar el almacen creado en la función crearAlmacen
>        almacen.add(usuario)
>    })
> ```

### Agregar datos 

A la hora de agregar datos a la base de datos, necesitamos usar la variable Global en la que guardamos la base de datos en el paso anterior, cargar el almacen usando el mismo nombre (Usuarios) y agregar un objeto.

````javascript
    
    function agregarUsuario(){
        // Obtener la base de datos de la variable global
        let baseDatos = baseDatosGlobal
        
        // Obtener el almacén
        // Syntax: transaction(almacenes, modo)
        // Modos: readonly / readwrite
        let almacen = baseDatos.transaction(['Usuarios'], 'readwrite').objectStore('Usuarios')
        
        // Crear un objeto
        // Este objeto se puede obtener de un formulario o de cualquier otro lugar
        let usuario = {
            nombre: 'Rafael'
        }
        
        // Agregar un objeto
        // Syntax: add(objeto)
        let solicitud = almacen.add(usuario)
        
        // Este evento es el que se ejecuta si la operacion es ha realizado con éxito
        // solicitud.addEventListener('success', mostrarMensaje)
        
        // Este evento es el que se ejecuta si la operacion no se a realizado.
        // solicitud.addEventListener('error', mostrarError)
        
    }

````

### Actualizar datos

Para actualizar datos, necesitamos usar la variable Global como en el paso anterior donde guardamos la base de datos, cargar el almacen usando el mismo nombre (Usuarios), obtener un objeto por su clave primaria y modificarlo.

````javascript
    
    function actualizarUsuario(){
        // Obtener la base de datos de la variable global
        let baseDatos = baseDatosGlobal
        
        // Obtener el almacén
        // Syntax: transaction(almacenes, modo)
        // Modos: readonly / readwrite
        let almacen = baseDatos.transaction(['Usuarios'], 'readwrite').objectStore('Usuarios')
        
        // Obtener un objeto por su clave primaria
        // Syntax: get(clave)
        let solicitud = almacen.get(1)
        
        // Este evento es el que se ejecuta si la operacion es ha realizado con éxito
        solicitud.addEventListener('success', evento => {
            // Modificar el objeto
            let usuario = evento.target.result
            usuario.nombre = 'Rafael'
            
            // Actualizar el objeto
            // Syntax: put(objeto)
            let solicitud = almacen.put(usuario)
        })
        
    }

````

### Eliminar datos

Para eliminar datos, necesitamos usar tambien la variable Global donde guardamos la base de datos, cargar el almacen usando el mismo nombre (Usuarios) y eliminar un objeto por su clave primaria.

````javascript
    
    function eliminarUsuario(){
        // Obtener la base de datos de la variable global
        let baseDatos = baseDatosGlobal
        
        // Obtener el almacén
        // Syntax: transaction(almacenes, modo)
        // Modos: readonly / readwrite
        let almacen = baseDatos.transaction(['Usuarios'], 'readwrite').objectStore('Usuarios')
        
        // Eliminar un objeto por su clave primaria
        // Syntax: delete(clave)
        let solicitud = almacen.delete(1)
        
        // Este evento es el que se ejecuta si la operacion es ha realizado con éxito
        // solicitud.addEventListener('success', mostrarMensaje)
        
        // Este evento es el que se ejecuta si la operacion no se a realizado.
        // solicitud.addEventListener('error', mostrarError)
        
    }

````

### Consultar datos

Para consultar datos, necesitamos usar la variable Global donde guardamos la base de datos, cargar el almacen usando el mismo nombre (Usuarios) y obtener un objeto por su clave primaria.

````javascript
    
    function consultarUsuario(){
        // Obtener la base de datos de la variable global
        let baseDatos = baseDatosGlobal
        
        // Obtener el almacén
        // Syntax: transaction(almacenes, modo)
        // Modos: readonly / readwrite
        let almacen = baseDatos.transaction(['Usuarios'], 'readonly').objectStore('Usuarios')
        
        // Obtener un objeto por su clave primaria
        // Syntax: get(clave)
        let solicitud = almacen.get(1)
        
        // Este evento es el que se ejecuta si la operacion es ha realizado con éxito
        solicitud.addEventListener('success', evento => {
            // Mostrar el objeto
            let usuario = evento.target.result
            console.log(usuario)
        })
        
    }

````

### Consultar todos los datos

Para la consulta de todos los datos tendremos que hacer algo diferente como crear un cursor que nos permita recorrer todos los objetos almacenados en el almacen.

````javascript
    
    function consultarUsuarios(){
        // Obtener la base de datos de la variable global
        let baseDatos = baseDatosGlobal
        
        // Obtener el almacén
        // Syntax: transaction(almacenes, modo)
        // Modos: readonly / readwrite
        let almacen = baseDatos.transaction(['Usuarios'], 'readonly').objectStore('Usuarios')
        
        // Obtener todos los objetos
        // Syntax: openCursor()
        let solicitud = almacen.openCursor()
        
        // Este evento es el que se ejecuta si la operacion es ha realizado con éxito
        solicitud.addEventListener('success', evento => {
            // Mostrar los objetos
            let cursor = evento.target.result
            if(cursor){
                console.log(cursor.value)
                cursor.continue()
            }
        })
        
    }

````

# Bibliografia

He tomado como referencias la siguientes enlaces, pero no al pie de la letra, sino que he adaptado a mi manera de entenderlo y a mi forma de programar.

- [IndexedDB](https://es.javascript.info/indexeddb)

### Videos

Tambien e visto algunos videos de youtube que me han ayudado a entender mucho mas facil que leyendo puro texto.

- [Crear DB](https://www.youtube.com/watch?v=-ojbAy8zbEY)
- [Almacenar Datos](https://www.youtube.com/watch?v=hT1ipzWniX4)
- [Lectura de Objetos](https://www.youtube.com/watch?v=Qyb-JsSruPU&t=557s)
- [Edicion de Objetos](https://www.youtube.com/watch?v=Fa1eo6y7Xxg)
- [Buscar Objetos](https://www.youtube.com/watch?v=mmJrOSpfgRE)
- [Elminar Objetos](https://www.youtube.com/watch?v=Xr13kcES7oE)
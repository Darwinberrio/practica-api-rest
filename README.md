# PASOS


1. Crear estructura del proyecto
2. instalaciones necesarias
3. crear el servidor con express
4. crear rutas
5. crear controladores
6. crear modelo
7. crear la BBDD
8. crear configuración -> conectar con mongo



## controladores

### get servicios

```javascript

const getAllServices=()=>{

    try{
        // Acceder a la base de datos con el metodo correspondiente del model
            //en caso de que este todo bien tendre que retormar la respuesta
            /* 
                respuesta.status(xxx).json({})
            */
    }catch(error){
        //Gestionar si hay error
        /* 
              respuesta.status(500).json({})
        */
    }

}

```
### get servicio por id

```javascript
const getAServiceById=()=>{
    
    //buscar el id el los params del endPoint

    try{

       

        // Acceder a la base de datos con el metodo correspondiente del model
            //en caso de que este todo bien tendre que retormar la respuesta
          

            //comprobar si existe

            /* 
                si existe responder

                respuesta.status(xxx).json({
                })
            
            */

        /* si no existe 
                respuesta.status().json()
        */

        
    }catch(error){
        //Gestionar si hay error
        /* 
              respuesta.status(500).json({})
        */
    }

}


```

### post crear un servicios

```javascript

const createAService=()=>{

    //capturar el body


    try{
        // Acceder a la base de datos con el metodo correspondiente del model pasandole el body
            //en caso de que este todo bien tendre que retormar la respuesta
            /* 
                respuesta.status(xxx).json({})
            */
    }catch(error){
        //Gestionar si hay error
        /* 
              respuesta.status(500).json({})
        */
    }

}

```
### put modificar un servicios por id

```javascript
const getAServiceById=()=>{
    
    //buscar el id el los params del endPoint

    try{

       

        // Acceder a la base de datos con el metodo correspondiente del modelpara buscar el servicio por su id
          

            //comprobar si existe

            /* 
            // Acceder a la base de datos con el metodo correspondiente del model para editar su id

                si existe responder

                respuesta.status(xxx).json({
                })
            
            */

        /* si no existe 
                respuesta.status().json()
        */

        
    }catch(error){
        //Gestionar si hay error
        /* 
              respuesta.status(500).json({})
        */
    }

}


```
### delete eliminar un servicios por id

```javascript
const getAServiceById=()=>{
    
    //buscar el id el los params del endPoint

    try{

       

        // Acceder a la base de datos con el metodo correspondiente del modelpara buscar el servicio por su id
          

            //comprobar si existe

            /* 
            // Acceder a la base de datos con el metodo correspondiente del model para eliminar su id

                si existe responder

                respuesta.status(xxx).json({
                })
            
            */

        /* si no existe 
                respuesta.status().json()
        */

        
    }catch(error){
        //Gestionar si hay error
        /* 
              respuesta.status(500).json({})
        */
    }

}


```
//herramientas
const API = "https://api.github.com/users/";
//import {createApp} from 'vue';  //importamos el createApp para poder crear nuestra aplicación

const app = Vue.createApp({ //creamos una instancia vue
    data() {                //propiedad reactiva 
        return {
          search:null,
          result:null,
          error:null,
          favorites: new Map()
        }
      },
    methods:{ //es necesario esta propiedad para añadir funciones
      async doSearch(){
        this.result = this.error = null //limpiamos los valores cada vez que llamamos a la función

        try{ //creamos un try and catch para cuando no encontremos al usuario que buscamos
          const response = await fetch(API + this.search) //accedemos a la propiedad con el this
          
          if(!response.ok) throw new Error("User not found") //si no encontramos al usuario mostramos un error
          const data = await response.json() //lo transformamos porque se muestra en formato json
          console.log(data)
          this.result = data
        }catch(error){
          this.error = error
        } finally{
          this.search=null
        }

    },
    addFavorite(){
      this.favorites.set(this.result.id, this.result)
    }
    }
});



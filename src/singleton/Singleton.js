// Singleton.js
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        this._data = [];
        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }
  
    addData(item) {
        //agrega una variable al singleton
      this._data.push(item);
    }
  
    getData() {
        // retorna todos los datos dentro de la instancia 
      return this._data;
    }
    add(key, obj) {
      localStorage.setItem(key,JSON.stringify(obj))
      // this.data[key] = obj;
    }
  
    get(key) {
      const data = JSON.parse(localStorage.getItem(key))
     if (data !== null) {
      return data
     } else {
      return null;
     }
    }

    getJson(key) {
      const data = (localStorage.getItem(key))
     if (JSON.parse(data) !== null) {
      return data
     } else {
      return null;
     }
    }
   
  }
  
  const instance = new Singleton();
  Object.freeze(instance);
  
  module.exports = instance;
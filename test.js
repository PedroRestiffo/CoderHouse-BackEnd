/* PAGINA DE EJEMPLOS PRACTICOS SOBRE LAS DIAPOSITIVAS */            

/*                    Crear una Clase llamada PERSONA.                  (FINALIZADO)
--La cual debe crearse con un NOMBRE que identifique la instancia.
--Además, habrá una VARIABLE ESTATICA utilizable para todos.
--Se comprobará la individualidad entre las dos instancias. 
*/

/*
class Persona {

    constructor (nombre){
        this.nombre = nombre
    }

    static especie = "Humano"
    saludar = () => {
        console.log (`!Hola Soy ${this.nombre}, mucho gusto!`)
    }

    getEspecie = () => {
        console.log (`Yo soy un ${Persona.especie}`)
    }

}

let persona1 = new Persona("Jorge")
let persona2 = new Persona("Pedro")

persona1.saludar()
persona1.getEspecie()
persona2.saludar()
persona2.getEspecie()

*/


/*                                 Creación de una clase contador       (FINALIZADO)

--Definir clase Contador ----------
-- La clase se creará con un NOMBRE, representando al responsable del contador. ---------
-- El contador debe inicializarse en 0  ---------
-- Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.---------
-- Definir el método getResponsable, el cual debe devolver el responsable de dicho contador. -------
-- Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.==============
-- Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador ============
-- Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global. ------------
-- Realizar prueba de individualidad entre las instancias.
*/

/*
class Contador {

    constructor (nombre){
        this.nombre = nombre
        this.contadorInicial = 0
        Contador.contadorGlobal
    }

    getResponsable() {
        return `Yo soy ${this.nombre}, el responsable de contador`
    }
    
    getContar() {
        this.contadorInicial++
        Contador.contadorGlobal++
    }

    getCuentaIndividual() {
        return this.contadorInicial
    }

    static getCuentaGlobal() {
        return Contador.contadorGlobal
    }
}

Contador.contadorGlobal = 0


const contador1 = new Contador ("Pedro")
const contador2 = new Contador ("Franco")

contador1.getContar()
contador2.getContar()
contador1.getContar()

// Comprobamos que cada contador tiene su propia cuenta individual
console.log(contador1.getCuentaIndividual()); // Output: 1
console.log(contador2.getCuentaIndividual()); // Output: 1

// Comprobamos que la cuenta global es la suma de las cuentas individuales de todos los contadores
console.log(Contador.getCuentaGlobal()); // Output: 2

*/




var precio_base = 2000

 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
var hijos_recargo = 0.2 // 20%
//Nuevos recargos solicitados
var propiedad_recargo = 0.35 // 35%
var salario_recargo = 0.05 // 5%

//Variable de control para el ciclo principal
var salir = ""

// Ciclo para cotizar hasta que el usuario escriba salir
while ("SALIR" != salir.toUpperCase()) {

  
  var recargo = 0
  var recargo_total = 0
 
  var precio_final = 0

  
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números")

  var edad_numero = parseInt(edad)

  if (edad_numero < 18) {
    alert("Lo sentimos, " + nombre + ". El asegurado debe ser mayor de edad para realizar la cotización.")
  } else {
    
    var casado = prompt("¿Está casado actualmente? si/no")
    while (casado.toUpperCase() != "SI" && casado.toUpperCase() != "NO") {
      alert("Error: Ingrese únicamente 'si' o 'no'")
      casado = prompt("¿Está casado actualmente? si/no")
    }
    
    var edad_conyuge_numero = 0
    if ("SI" == casado.toUpperCase()) {
      var edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

    
    var hijos = prompt("¿Tiene hijos o hijas? si/no")
    while (hijos.toUpperCase() != "SI" && hijos.toUpperCase() != "NO") {
      alert("Error: Ingrese únicamente 'si' o 'no'")
      hijos = prompt("¿Tiene hijos o hijas? si/no")
    }
    
    var cantidad_hijos_numero = 0
    if ("SI" == hijos.toUpperCase()) {
      var cantidad_hijos = prompt("¿Cuántos hijos tiene?")
      cantidad_hijos_numero = parseInt(cantidad_hijos)
    }

    // Propiedades 
    var propiedades = prompt("¿Tiene propiedades? si/no")
    while (propiedades.toUpperCase() != "SI" && propiedades.toUpperCase() != "NO") {
      alert("Error: Ingrese únicamente 'si' o 'no'")
      propiedades = prompt("¿Tiene propiedades? si/no")
    }

    var cantidad_propiedades_numero = 0
    if ("SI" == propiedades.toUpperCase()) {
      var cantidad_propiedades = prompt("¿Cuántas propiedades tiene?")
      cantidad_propiedades_numero = parseInt(cantidad_propiedades)
    }
    // salario 
    var salario = prompt("Ingrese su salario mensual")
    var salario_numero = parseFloat(salario)

    if (edad_numero >= 18 && edad_numero <= 24) {
      recargo = precio_base * edad_18
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 25 && edad_numero <= 49) {
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 50) {
      recargo = precio_base * edad_50
      recargo_total = recargo_total + recargo
    }

    
    if ("SI" == casado.toUpperCase()) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24) {
        recargo = precio_base * edad_18
        recargo_total = recargo_total + recargo
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
        recargo = precio_base * edad_25
        recargo_total = recargo_total + recargo
      } else if (edad_conyuge_numero >= 50) {
        recargo = precio_base * edad_50
        recargo_total = recargo_total + recargo
      }
    }

    
    if (cantidad_hijos_numero > 0) {
      recargo = (precio_base * hijos_recargo) * cantidad_hijos_numero
      recargo_total = recargo_total + recargo
    }

    // Recargo por propiedades (35% sobre precio base)
    if (cantidad_propiedades_numero > 0) {
      recargo = (precio_base * propiedad_recargo) * cantidad_propiedades_numero
      recargo_total = recargo_total + recargo
    }

    // Recargo sobre el salario (5% sobre salario)
    recargo = salario_numero * salario_recargo
    recargo_total = recargo_total + recargo

    
    precio_final = precio_base + recargo_total

  
    alert("Resumen de cotización para: " + nombre)
    alert("El recargo total aplicado es de: Q." + recargo_total)
    alert("El precio final de su seguro es de: Q." + precio_final)
  }

  // Pregunta final para controlar el ciclo principal
  salir = prompt("¿Desea otra cotización? Escriba 'SALIR' para terminar o presione aceptar para continuar")
}

alert("Gracias por utilizar el sistema.")
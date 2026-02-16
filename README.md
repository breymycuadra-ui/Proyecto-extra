<h1 align="center"> Proyecto Extra, Tecnico en desarollo de Software</a></h1>
<h3 align="center">Cotización de seguros con Javascript </h3>
<p>
  El programa funciona como un sistema de cotización. Es capaz de procesar a múltiples cotizaciónes en una misma sesión y aplicar un modelo de riesgo más detallado mediante recargos económicos. El programa opera bajo una acumulación de recargos, toma un precio inicial de Q2,000.00 y a través de preguntas al usuario, evalúa diferentes factores de riesgo (edad, familia, patrimonio y salario). Cada uno genera un "recargo" que se va sumando al (recargo_total) para finalmente entregar el precio de la póliza.
</p>

<p>
  Se puede considerar que es una herramienta de lógica estructurada, ideal para procesos de toma de decisiones lineales donde se considera cada variable donde muestra un precio final exacto con cada incremento de recargo.
</p>


<h3><b>Posibles mejoras</b></h3>

- El almacenamiento de datos: Actualmente los resultados se pierden cada vez que el programa se cierra. con un historial que guarde las cotizaciones realizadas durante la sesión, que permita al usuario comparar precios entre diferentes escenarios antes de decidir el que más le convenga.

- Especificación del tipo de seguro: Esto para conocer que seguro se está cotizando. Sobre esto realizar diferentes valores de recargos para los usuarios y que sea a cuerdo al seguro que desea.

- Desglose detallado del total de la cotización: El programa actual, solamente muestra el valor total de los recargos más la suma de los Q2,000.00 del valor inicial, al usuario hay que explicarle de manera transparente cuanto paga por cada factor de riesgo que ingresa.

   - Recargo por edad: Q.
   - Recargo por edad del conyugue: Q.
   - Recargo por cantidad de hijos: Q. 
   - Recargo por propiedades: Q.
   - Recargo por el monto de su salario: Q.
- Se mejoraron las eleciones de "SI" o "NO": Se coloco un while para que las respuestas sean unicamente "si o no" para evitar el error de un valor no deseado, esto junto con: Alert que muestra "Error: Ingrese únicamente 'si' o 'no'." 

---

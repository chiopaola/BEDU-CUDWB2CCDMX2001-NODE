#Laboratorio de Introducción a Node.js y MVC

###Responde las siguientes preguntas con tus propias palabras:
A¿Qué es Node.js?
Es un entorno JavaScript de lado de servidor que utiliza un modelo asíncrono y dirigido por eventos.

B. ¿Cómo funciona internamente Node.js? ¿Qué lo hace tan eficiente?
Node.js se ejecutan en el motor de tiempo de ejecución JavaScript V8. Este motor coge el código JavaScript y lo convierte en un código de máquina más rápido. 
Opera en un solo subproceso, utilizando el modelo entrada y entrada sin bloqueo de la salida, lo que le permite soportar decenas de miles de conexiones al mismo tiempo mantenidas en el bucle de eventos.
El nodo está completamente controlado por eventos.

###Investiga y responde las siguientes preguntas:

A. Modelo de concurrencia
El Modelo Concurrente conocido además como Ingeniería Concurrente, utiliza a menudo como el paradigma de desarrollo de aplicaciones cliente/servidor. Tiene la capacidad de describir las múltiples actividades del software ocurriendo simultáneamente.
El modelo de proceso concurrente define una serie de acontecimientos que dispararán transiciones de estado a estado para cada una de las actividades de la ingeniería del software

B.Modelo Multithreading
Multithreading permite la ejecución de múltiples partes de un programa al mismo tiempo. Estas partes se conocen como hilos y son "lightweight processes" disponibles dentro del proceso. Por lo tanto, el subprocesamiento múltiple conduce a la máxima utilización de la CPU por la multitarea. Los modelos principales para multihilo son modelos uno a uno, muchos a un modelo y muchos a muchos.

C.Modelo Reactivo/Eventos
Un sistema reactivo tiene las siguientes características:
Responsivo: proporciona tiempos de respuesta rápidos y consistentes. Además, define límites en dichos tiempos de respuesta, de forma que los problemas pueden ser detectados rápidamente y tratados de forma efectiva.
Resiliente: permanece responsivo incluso en situaciones de error.
Elástico: se mantiene responsivo ante incrementos de la carga de trabajo.
Orientado a mensajes: se basa en el intercambio de mensajes asíncronos, lo que asegura el bajo acoplamiento, aislamiento, transparencia de ubicación y proporciona los medios para delegar errores como mensajes

D.Modelo de Actores
El modelo de actores fue descrito por primera vez en 1973 por Carl Hewitt, como un modelo de concurrencia computacional que, al igual que los hilos, trata de solucionar el problema de la concurrencia.
Se definen objetos, llamados actores, que disponen de dos elementos: una cola o buzón de mensajería, en el que almacenar los mensajes o tareas que se le asignan; y un comportamiento, que incluye la lista de operaciones a realizar en función del mensaje recibido.
En cuanto a la comunicación entre actores, y la razón por la que este modelo se aplica en la resolución de problemas de concurrencia, es la asincronía. Es decir, el remitente del mensaje no espera recibir respuesta tras realizar el envío, y sigue con su ejecución.

Este modelo de mensajería asíncrona sirve de base para sistemas reactivos con especialización de elementos, lo que se potencia por el hecho de no existir un estado compartido entre los actores. Si se desea conocer el estado interno de algún actor, se deberá solicitar la información enviándole un mensaje.

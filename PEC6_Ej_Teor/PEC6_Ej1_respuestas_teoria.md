1.  ¿Cuál es la función de los ``componentes`` y ``servicios``?
    - ``componentes``: La función de los mismos se basa en la presentación de datos y en la forma en que se hará, para ello, enlazan los eventos a los métodos, permitiendo la interacción.
    - ``servicios``: Se encarga de la lógica de negocio, así como de la interacción con el servidor, como puede ser para recuperar/enviar datos, o incluso compartirlos entre componentes, entre otras cosas.

2. ¿Qué es la ``inyección de dependencias``? ¿Para qué sirve el decorador ``@Injectable``?
   1. La inyección de dependencias es un patrón de diseño, que proporciona a un componente todas las dependecias que necesita para funcionar.
   2. El decorador ``@Injectable`` nos permite transformar cualquier clase a un servicio, permitíendonos inyectarlo a cualquier componente o clase. 
3. Conceptos de RxJS:
   1. Observable: Representan una colección de eventos asíncronos, cada evento de la colección llega en un momento indeterminado, el cual no podemos predecir. (En el libro hacen referéncia a los eventos click de un botón)
   2. Subscription: Representa una conexión entre un Observable y un subscriptor, tienen un tiempo de vida asociado, por lo que puede autocancelarse, o nos podemos des-suscribir usando ``unsubscribe()``
   3. Operators: Són funciones que permiten modificar los valores emitidos por los observables
   4. Subject: Se puede usar tanto para emitir valores como para suscribirse, y puede emitir varios valores a varios suscriptores a la vez.
   5. Schedulers: Controlan la concurrencia y el tiempo de los Observables, y se pueden programar para ejecutar operaciones en distintos hilos.

3. ¿Cuál es la diferencia entre promesas y observables?

Las promesas manejan operaciones asíncronas en JS, y representan un valor que puede estar disponible en un futuro, mientras que los observables son una secuencia de valores que se emiten en el tiempo, y pueden tener uno, cero o múltiples valores

4.  ¿Cuál es la función de la tubería (pipe) async?

Se utiliza para componer y transformar secuencias de datos emitidos por un Observable, las cuales pueden ser asíncronas.
Nos permite realziar operaciones al Observable de manera sequencial, transformando el resultado que obtendremos.
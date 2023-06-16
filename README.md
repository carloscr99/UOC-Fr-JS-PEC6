# PEC6

## ccolomerrev

## Carlos Colomer Revert

En esta PEC hemos aprendido a hacer uso de los servicios, así como de los Observables y subscriptores, así como realizar llamadas a API para obtener información, así como enviarla al servidor.


En cuando a qué inconvenientes me he encontrado en el desarrollo de esta práctica, se encuentran los siguientes:

- Transformar un formGroup a una clase para enviar al método 'create' del servicio
- Mostrar el mensaje de artículo creado, dado que en el libro se usa ``ObservableThrow``, y ya está deprecado, por lo que he usado ``throwError``
- En el momento de llamar al API para hacer el ``patch``, con la nueva cantidad, si simplemente enviaba el objeto artículo como en el ejemplo, si hacía ``this.article.quantityInCart++`` (en caso de que incrementara), visualmente funcionaba correctamente, pero al enviarle la cantidad original +1 al API, el stock crecía exponencialmente, mientras que si ponía ``this.article.quantityInCart = 1``, aparecía mal en el front, dado que siempre era 1, pero en la API sí que se sumaba correctamente, por lo que finalmente me decanté por enviarle si era 1 en caso de suma, y -1 en caso de resta, y para el front seguir haciendo ``this.article.quantityInCart++`` como podrás comprobar en el código.




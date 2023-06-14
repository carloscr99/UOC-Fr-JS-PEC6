# PEC6

## ccolomerrev

## Carlos Colomer Revert

### En esta PEC hemos aprendido...


En cuando a que inconvenientes me he encontrado en el desarrollo de esta práctica, se encuentran los siguientes:

- .
- .
- En el momento de llamar al API para hacer el ``patch``, con la nueva cantidad, si simplemente enviaba el objeto artículo como en el ejemplo, si hacía ``this.article.quantityInCart++`` (en caso de que incrementara), visualmente funcionaba correctamente, pero al enviarle la cantidad original +1 al API, el stock crecía exponiencialmente, mientras que si ponía ``this.article.quantityInCart = 1``, aparecía mal en el front, dado que siempre era 1, però en el API si que se sumaba correctamente, por lo que finalmente de decanté por enviarle si era 1 en caso de suma, y -1 en caso de resta, y para el front seguir haciendo ``this.article.quantityInCart++`` como podrás comprobar en el código.




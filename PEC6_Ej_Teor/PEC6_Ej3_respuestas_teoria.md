1. ¿Qué son los ``interceptores``?
Los interceptores son clases que implementan la interfaz ``HttpInterceptor ``, la cual nos permite manipular las solicutudes HTTP entrantes y salientes, por lo que nos permite modificar o añadir lógica en dichas solicitudes.

2. Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:

```ts
this.wines$ = this.searchSubject
 .startWith(this.searchTerm) // 1
 .debounceTime(300) // 2
 .distinctUntilChanged() // 3 
 .merge(this.reloadProductsList) // 4
 .switchMap((query) => 
this.wineService.getWine(this.searchTerm)); // 5
```

En el código que se muestra en la parte de arriba, lo que se realiza es una búsqueda de vinos, y realiza los siguientes pasos:
1. Indica el término por el cual se desea buscar 
2. Indica un tiempo de espera
3. Asegura que se hayan modificado los valores antes de volver a emitir
4. Combina los resultado de ``reloadProductsList`` con los de ``searchSubject`` 
5. Cancela cualquier llamana anterior y vuelve a realziar la búsqeuda con los nuevos valores.
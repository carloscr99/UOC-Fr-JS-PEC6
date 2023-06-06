1. ¿Cuál es la diferencia entre definir un servicio usando el decorador ``@Injectable`` o ``@NgModule``?

Con el @Injectable, haces que el servicio se pueda ver por toda la aplicación angular y son accesibles por todas las clases en la aplicación, mientras que si lo hacemos con @NgModule, solo será accesible si importamos un @NgModule específico.

2. ¿Qué otras opciones admiten el decorador @Injectable para la
propiedad ``ProvidedIn``? ¿Para qué sirven las otras configuraciones?

Para la propiedad ``ProvidedIn``, a parte de ``root``, también acepta las siguientes:
   - ``any``: Solo sirve para inyectores NgModule y crea servicios aislados para cada injección
   - ``platform``: Hace que el servicio pueda ser compartido por múltiples aplicaciones o elementos de Angular    
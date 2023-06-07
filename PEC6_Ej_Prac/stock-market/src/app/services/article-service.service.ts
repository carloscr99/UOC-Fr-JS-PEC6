import { Injectable } from '@angular/core';
import { Article } from '../article/article-item/Article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private articulos: Article[];

  constructor() {

    this.articulos = []

    let articulo: Article = new Article();

    articulo.id = 1;
    articulo.name = 'Pizza';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1343&q=80';
    articulo.price = 23;
    articulo.isOnSale = true;
    articulo.quantityInCart = 0;

    this.articulos.push(articulo);

    articulo = new Article();

    articulo.id = 2;
    articulo.name = 'Pan';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
    articulo.price = 1.5;
    articulo.isOnSale = false;
    articulo.quantityInCart = 0;

    this.articulos.push(articulo);


    articulo = new Article();

    articulo.id = 3;
    articulo.name = 'Galletas';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80';
    articulo.price = 3.20;
    articulo.isOnSale = true;
    articulo.quantityInCart = 0;

    this.articulos.push(articulo);
    

   }

   getArticles() : Observable<Article[]> {
    return of(this.articulos);
  }

  changeQuantity(articleID: number, changeInQuantity: number):Observable<Article> {
    let art = new Article();
    
    art = this.articulos.find(art => art.id === articleID) || new Article();

    art.quantityInCart = changeInQuantity;

    console.log('artículo modificado por observable: ', art);


    return of(art);
  }

  create(article: Article): Observable<any> {

    this.articulos.push(article);

    console.log("artículo creado por article service",this.articulos);

    return of(true)

  }


}

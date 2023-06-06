import { Component, OnInit } from '@angular/core';
import { Article } from '../article-item/Article';
import { ArticleQuantityChange } from '../article-item/ArticleQuantityChange';
import { ArticleService } from 'src/app/services/article-service.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  articles: Article[] = new Array<Article>();
  articleService: ArticleService = new ArticleService();
  public articleQuantity: ArticleQuantityChange;

  constructor() {

    this.articleQuantity = new ArticleQuantityChange();

  }

  onArticleChanged(art: ArticleQuantityChange) {
    console.log("onArticleChanged ->", art);
    this.articleQuantity = art;
  }

  ngOnInit() {


    this.articleService.getArticles().subscribe((articles: Article[]) => this.articles = articles);
    

  }

  // increaseCart(id: number) {

  //   console.log('increaseCart');

  //   this.articleService.changeQuantity(id, 1);

  
  // }

  // decreaseCart(id: number) {

  //   let art = this.articles.find(item => item.id = id);

  //   if (art !== undefined)
  //     art.quantityInCart--;

  // }



}

import { Component, OnInit } from '@angular/core';
import { Article } from '../article-item/Article';
import { ArticleQuantityChange } from '../article-item/ArticleQuantityChange';
import { ArticleService } from 'src/app/services/article-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  public articles$: Observable<Article[]> = new Observable<Article[]>;
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

    this.articles$ = this.articleService.getArticles();
    
  }


}

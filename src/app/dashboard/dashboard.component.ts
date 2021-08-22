import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public newsList: Array<News> = [];
 public errorMessage = '';
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getTrendingNews()
    .subscribe(response => {
      if(response['articles'] !== undefined && response['articles'].length > 0) {
        this.newsList = Object.assign(this.newsList,response['articles']);
      }
    },
    error => {
      if(error.status === 404){
        this.errorMessage = 'Unable to access news server to fetch news';
      }
    });
  }

}

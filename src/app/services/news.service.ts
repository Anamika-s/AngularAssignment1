import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()//decorate class to make it injectable
export class NewsService {
    api_key:string = "0819eaed65a043a481d5354c8782b578";
    trending_news_api_url: string="https://newsapi.org/v2/top-headlines?country=in&apikey="+this.api_key+"&page=1";
 
  public bmurl='http://localhost:3000/api/v1/news';

  // inject the HttpClient dependency that will be used to make http request
 constructor(private httpClient: HttpClient) { }


  public getTrendingNews(){
    return this.httpClient.get<News[]>(this.trending_news_api_url);//this function should make a get request to fetch trending news provided by newsapi.org
  }

  public addNews(newsItem:News): Observable<News> {
   return this.httpClient.post<News>(this.bmurl,newsItem);//this function should make a post request to save news item to db.json in server
  }


}

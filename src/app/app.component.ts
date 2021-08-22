import { Component, OnInit } from '@angular/core';
import { News } from './models/news';
import { NewsService } from '../app/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note: News = new News();
  noteList: Array<News>;

  constructor(private notesService: NewsService) { }

  ngOnInit() {
    debugger;
    this.notesService.getTrendingNews().subscribe(response => {
      console.log("Calling");
      if (response) {
        console.log(response);
      //  this.noteList = response;
      } else {
        this.errMessage = 'We are unable to retreive notes list.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }
}

  // addNote() {
  //   if (!this.note.text || !this.note.title) {
  //     this.errMessage = 'Title and Text both are required fields';
  //     return;
  //   }

  //   this.notesService.addNote(this.note).subscribe(response => {
  //     if (response) {
  //       this.noteList.push(this.note);
  //       this.note = new Note();
  //     } else {
  //       this.errMessage = 'We are unable to add the selected note.';
  //     }
  //   }, error => {
  //     this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
  //   });
  // }
//}
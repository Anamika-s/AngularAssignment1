import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() public title;
 @Input() public favouriteCount;
  constructor() { }

  ngOnInit() {
  }
 togCollapse() {
   const nToggle = document.getElementById('nToggle');
   if (nToggle.classList.contains('collapse')) {
     nToggle.classList.remove('collapse');
   } else {
   nToggle.classList.add('collapse');
   }
 }
}

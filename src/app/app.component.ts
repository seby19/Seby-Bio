import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  menuNum = 0;
  ngOnInit() {
    this.menuNum = 0;
  }
  setMenuNum(number) {
    this.menuNum = number;
  }
}

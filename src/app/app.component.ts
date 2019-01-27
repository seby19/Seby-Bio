import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition, animation} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('changeMenuNum1',
      [
        state('1',
          style({
            transform: 'matrix(1.03,0,0,1.03,0,0)',
            opacity: 1
          })
        ),
        transition('*=>1',animate('900ms')),
        transition('1=>*',animate('900ms'))
      ]
    ),
    trigger('changeMenuNum2',
      [
        state('2',
          style({
            transform: 'matrix(1.01,0,0,1.01,0,0)',
            opacity: 1
          })
        ),
        transition('*=>2',animate('900ms')),
        transition('2=>*',animate('900ms'))
      ]
    ),
    trigger('changeMenuNum3',
      [
        state('3',
          style({
            transform: 'matrix(1.01,0,0,1.01,0,0)',
            opacity: 1
          })
        ),
        transition('*=>3',animate('900ms')),
        transition('3=>*',animate('900ms'))
      ]
    ),
    trigger('changeMenuNum4',
      [
        state('4',
          style({
            transform: 'matrix(1.01,0,0,1.01,0,0)',
            opacity: 1
          })
        ),
        transition('*=>4',animate('900ms')),
        transition('4=>*',animate('900ms'))
      ]
    ),
    trigger('changeMenuNum5',
      [
        state('5',
          style({
            transform: 'matrix(1.01,0,0,1.01,0,0)',
            opacity: 1
          })
        ),
        transition('*=>5',animate('900ms')),
        transition('5=>*',animate('900ms'))
      ]
    )
  ]
})
export class AppComponent implements OnInit{
  menuNum = 1;
  Professional;
  ngOnInit() {
    this.menuNum = 1;
  }
  setMenuNum(number) {
    this.menuNum = number;
    if(this.menuNum == 1) {
      window.scrollTo(0,0);
    }
    else if(this.menuNum == 2) {
      document.getElementById('scrollToProjects').scrollIntoView(true);
    }
    else if(this.menuNum == 3) {
      document.getElementById('scrollToEducation').scrollIntoView(true);
    }
    else if(this.menuNum == 4) {
      document.getElementById('scrollToAbout').scrollIntoView(true);
    }
    else if(this.menuNum == 5) {
      document.getElementById('scrollToContact').scrollIntoView(true);
    }
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { trigger,state,style,animate,transition, animation} from '@angular/animations';
import { Browser } from '../../node_modules/protractor';

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
  menuNumOld = 1;
  menuNumNew = 1;
  totalSeconds: number;
  Professional;
  pagey = 0;
  pageEventDone = false;
  timer = null
  // smallerScreen : boolean = false;
  ngOnInit() {
    // if(window.innerWidth < 700) {
    //   this.smallerScreen = true;
    // }
    // else if(window.innerWidth >= 700) {
    //   this.smallerScreen = false
    // }
    this.totalSeconds = 1;
    this.menuNumOld = 1;
    this.menuNumNew = 1;
    this.pagey = 0;
    this.pageEventDone = false;
    this.timer = setInterval(this.setTime, 60);
    // window.onresize = this.resizedWindow;
  }
  // resizedWindow(){
  //   if(window.innerWidth < 700) {
  //     this.smallerScreen = true;
  //     console.log(this.smallerScreen)
  //   }
  //   else if(window.innerWidth >= 700) {
  //     console.log("In else")
  //     this.smallerScreen = false;
  //   }
  // }

  hidingFunc(){
    if(window.innerWidth < 600) {
      return false;
    }
    else if(window.innerWidth >= 600) {
      return true;
    }
  } 

  hidingFunc2(){
    if(window.innerWidth < 1000) {
      return false;
    }
    else if(window.innerWidth >= 1001) {
      return true;
    }
  } 

  setTime =  () => {
    ++this.totalSeconds;
    //console.log(this.totalSeconds);
    if(this.totalSeconds == 1) {
      this.pageEventDone = false
      console.log("set to false");
    }
  }
  setMenuNum(number) {
    //clearInterval(this.timer);
    this.menuNumNew = number;
    if(this.menuNumNew == 1) {
      window.scrollTo(0,0);
    }
    else if(this.menuNumNew == 2) {
      document.getElementById('scrollToProjects').scrollIntoView(true);
    }
    else if(this.menuNumNew == 3) {
      document.getElementById('scrollToEducation').scrollIntoView(true);
    }
    else if(this.menuNumNew == 4) {
      document.getElementById('scrollToAbout').scrollIntoView(true);
    }
    else if(this.menuNumNew == 5) {
      document.getElementById('scrollToContact').scrollIntoView(true);
    }
  }
  
	@HostListener('window:scroll', ['$event']) onScrollEvent(event){
    // let a = document.getElementById('Prof');
    // let b = document.getElementById('Projects');
    // let c = document.getElementById('Education');
    // let d = document.getElementById('About');
    // let e = document.getElementById('Contact');
    // this.inViewPort(a , 1 , event);
    // this.inViewPort(b , 2 , event);
    // this.inViewPort(c , 3 , event);
    // this.inViewPort(d , 4 , event);
    // this.inViewPort(e , 5 , event);
    //console.log(Browser.CHROME)
    this.totalSeconds = 0;
    clearInterval(this.timer);
    // console.log("this.menuNumOld " + this.menuNumOld)
    // console.log("this.menuNumNew " + this.menuNumNew)
    if(this.menuNumOld == this.menuNumNew)
    {
      // console.log("event.pageY " + event.pageY)
      // console.log("this.pagey " + this.pagey)
      // console.log("document.body.scrollTop " + window.scrollY)
      // console.log("this.pageEventDone " + this.pageEventDone)
      if( window.scrollY > this.pagey && this.menuNumOld < 5 && !this.pageEventDone )
      {
        // console.log("scroll down")
        this.setMenuNum(this.menuNumOld + 1);
      }
      else if (window.scrollY < this.pagey && this.menuNumOld > 1 && !this.pageEventDone)
      {
        // console.log("scroll up")
        this.setMenuNum(this.menuNumOld - 1);
      }
      this.pagey = window.scrollY;
    } else {
      // console.log("tabbed")
      this.menuNumOld = this.menuNumNew;
    }
    this.pageEventDone = true;
    this.timer = setInterval(this.setTime, 60);

  } 
  inViewPort(elem , menuNum , event) {
    //var bounding = elem.getBoundingClientRect();
    //console.log(event);
    //console.log(event.pageY);
    this.totalSeconds = 0;
    clearInterval(this.timer);
    if(this.menuNumOld == this.menuNumNew)
    {
      if( event.pageY > this.pagey && this.menuNumOld < 5 && !this.pageEventDone )
      {
        this.setMenuNum(this.menuNumOld + 1);
      }
      else if (event.pageY < this.pagey && this.menuNumOld > 1 && !this.pageEventDone)
      {
        this.setMenuNum(this.menuNumOld - 1);
      }
      this.pagey = event.pageY;
    } else {
      this.menuNumOld = this.menuNumNew;
    }
    this.pageEventDone = true;
    this.timer = setInterval(this.setTime, 90);
    // console.log( " bounding.top " + bounding.top);
    // console.log( " bounding.left " + bounding.left);
    // console.log( " bounding.bottom " + bounding.bottom);
    // console.log( " bounding.right " + bounding.right);
    // console.log( " window.innerHeight " + window.innerHeight);
    // console.log( " window.innerWidth " + window.innerWidth);
    // console.log( " document.documentElement.clientHeight " + document.documentElement.clientHeight);
    // console.log( " document.documentElement.clientWidth " + document.documentElement.clientWidth);
    // if (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
    //   ) {
    //     elem.style.opacity = "1"
    // }
    // else {
    //   elem.style.opacity = "0"
    // }
  }
	
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'RxJSSubjects';
  timerID: any;
  result: any;

  stream = new BehaviorSubject(0);

  constructor() { };

  ngOnInit() {

    this.stream.pipe(filter((el:any) => (el >= 300) && (el <= 700))).subscribe((value: any) => this.result = value);
    this.timerID = setInterval(() => {
      const newValue = Math.floor(Math.random() * 1000);
      this.stream.next(newValue)
    }, 500);
    
  };

  stop() {
    clearInterval(this.timerID)
  }

}

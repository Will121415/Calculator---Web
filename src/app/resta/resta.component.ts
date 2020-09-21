import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  subtraction()
  {
    this.result = this.firstNumber - this.secondNumber;
  }

}

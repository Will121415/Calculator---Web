import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addition() {
    this.result = this.firstNumber + this.secondNumber;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

class Counter {
  name: string;
  value: number =  0;
  constructor(name: string) {
    this.name = name;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  favoriteColorControl = new FormControl('');

  counter: number = 0;

  public counters: Counter[] = [
    new Counter('Counter 1'),
    new Counter('Counter 2'),
    new Counter('Counter 3'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public sortByValue(): void {
    this.counters = this.counters.sort((a, b) => b.value-a.value);
  };

  public counterAdd(index: number): void {
    this.counters[index].value++;
    this.sortByValue();
  }

  public counterMinus(index: number): void {
    this.counters[index].value--;
    this.sortByValue();
  }

}

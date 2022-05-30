import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Input() cuenta: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decrementar() {
    this.cuenta--;
  }

  incrementar() {
    this.cuenta++;
  }

}

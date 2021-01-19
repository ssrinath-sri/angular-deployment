import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.css']
})
export class NestComponent implements OnInit {

  name =  "Hello World"
  constructor() { }

  ngOnInit(): void {
  }

}

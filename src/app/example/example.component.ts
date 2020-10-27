import { Component, OnInit } from '@angular/core';


Intl.DateTimeFormat().resolvedOptions().timeZone;
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  //Letter
  /* Filter data */
  Example1Pipe = '';
  example0101 = "What is Lorem Ipsum?";
  example0102 = "Implemente un pipe que permita poner";

  //Letter
  Example4Pipe = '';
  example0401 = new Date(Date.now());
  example0402 = new Date(this.example0401).setDate(this.example0401.getDate() + 1);
  example0403 = new Date(this.example0401).setDate(this.example0401.getDate() + 3);
  example0404 = new Date(this.example0401).setDate(this.example0401.getDate() + 5);
  example0405 = new Date(this.example0401).setHours(this.example0401.getHours() + 14.5);

  //Letter
  Example3Pipe = 0;
  example0301 = 5;
  example0302 = 10;
  
  //Letter
  Example2Pipe = '';
  example0201 = "What is Lorem Ipsum?";
  example0202 = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..";

  constructor() { }

  ngOnInit(): void {

  }

}

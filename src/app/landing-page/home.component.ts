import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList = [{
    productId: "gin01",
    batchId: "B12",
    distillerName: "eenoolooapik",
    bottlingTime: "1642516201094"
  }]
  

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}

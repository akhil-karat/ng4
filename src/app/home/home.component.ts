import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:{ icon: string; desc: string; price: number; }[] = [];
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.products = this.homeService.getProducts();
  }

}

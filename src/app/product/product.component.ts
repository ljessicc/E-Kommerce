import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'product'
  constructor(private titleService: Title) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title)
  }

}

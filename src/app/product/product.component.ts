import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from '../header/header-title.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'Products'
  constructor(private titleService: Title, private HeaderTitleService: HeaderTitleService) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.HeaderTitleService.setTitle(this.title);

  }

}

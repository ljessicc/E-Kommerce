import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from '../header/header-title.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'Admin'
  constructor(private titleService: Title, private HeaderTitleService:HeaderTitleService) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.HeaderTitleService.setTitle(this.title);
  }


}

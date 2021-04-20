import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderTitleService } from '../header/header-title.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
title = 'Users'
  constructor(private titleService: Title, private HeaderTitleService:HeaderTitleService) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.HeaderTitleService.setTitle(this.title);

  }

}

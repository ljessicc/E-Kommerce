import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
title = 'users'
  constructor(private titleService: Title) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title)
  }

}

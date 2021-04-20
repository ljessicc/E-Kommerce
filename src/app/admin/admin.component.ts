import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'Admin'
  constructor(private titleService: Title) { }

 
  ngOnInit(){
    this.titleService.setTitle(this.title)
  }


}

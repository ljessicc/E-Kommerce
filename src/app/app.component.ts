import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { HeaderTitleService } from './header/header-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-kommerce';

  constructor(private titleService:Title, private HeaderTitleService: HeaderTitleService){
  }

  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.HeaderTitleService.setTitle(this.title)
  }
}

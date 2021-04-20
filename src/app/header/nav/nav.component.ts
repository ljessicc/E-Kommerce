import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  title: string = '';

  constructor(private breakpointObserver: BreakpointObserver, private HeaderTitleService:HeaderTitleService) {}

  ngOnInit() :void {
    this.HeaderTitleService.title.subscribe(updatedTitle=>{
      this.title = updatedTitle
    });

  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}

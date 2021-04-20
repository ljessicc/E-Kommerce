import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class HeaderTitleService {
  title = new BehaviorSubject('');

  setTitle(title: string) {
    this.title.next(title);
  }

  getgTitle(){
   return this.title.asObservable()
  }
}
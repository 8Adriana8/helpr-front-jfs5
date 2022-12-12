import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private dataObs = new Subject<boolean>();

  constructor() { }

  getData(){
    return this.dataObs;
  }

  updateData(data: boolean){
    this.dataObs.next(data);
    localStorage.setItem("theme", data.toString())
  }

}

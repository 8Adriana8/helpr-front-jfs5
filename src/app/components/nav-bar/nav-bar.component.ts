
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public checked!: boolean;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    // LOGOUT
  }

  public onDarkModeSwitched(){
    if(this.checked == true){
      this.checked = false
    } else {
      this.checked = true
    };
    
    this.themeService.updateData(this.checked);
  }

}

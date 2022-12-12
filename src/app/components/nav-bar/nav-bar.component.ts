
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public checked: boolean = localStorage.getItem("theme") === "true";

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logOut();
    this.router.navigate(["/login"]);
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

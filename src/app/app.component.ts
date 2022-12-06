
import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helpr-front';

  private isDark!:boolean;

  @HostBinding('class')
  get theme(){
    return this.isDark ? 'theme-dark' : 'theme-light'
  }

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.initDarkMode()
  }

  private initDarkMode(){
    this.themeService.getData().subscribe(data => {
      this.isDark = data;
    })
  }
    

}

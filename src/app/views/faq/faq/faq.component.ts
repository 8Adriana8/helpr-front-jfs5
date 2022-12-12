import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  public switch!: boolean;

  public class = document.getElementsByTagName('app-root')[0].className;

  private unlistener!: () => void;

  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.unlistener = this.renderer2.listen('document', 'click', (event) => {
      this.themeService.getData().subscribe((response) => {
        this.switch = response;
      });
    });
  }
}

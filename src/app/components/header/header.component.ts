import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    // Define o idioma inicial
    this.translateService.setDefaultLang('en');
    // Use o idioma do navegador, se disponível
    this.translateService.use(this.translateService.getBrowserLang() || 'en');
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang); // Altera o idioma usando o serviço de tradução
  }

}

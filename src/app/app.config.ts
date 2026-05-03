import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";

const getInitialLang = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('lang') || 'pt';
  }
  return 'pt';
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: getInitialLang(),
      loader: provideTranslateHttpLoader({
        prefix: '/assets/languages/',
        suffix: '.json'
      })
    })
  ]
};


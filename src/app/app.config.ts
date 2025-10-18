import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const APPCONFIG: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(ROUTES),
    provideHttpClient(),
  ],
};

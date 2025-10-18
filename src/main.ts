import { bootstrapApplication } from '@angular/platform-browser';
import { APPCONFIG } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, APPCONFIG).catch((err) => console.error(err));

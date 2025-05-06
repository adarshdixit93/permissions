import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatListModule } from '@angular/material/list';

bootstrapApplication(AppComponent,{providers:[...appConfig.providers,importProvidersFrom(MatListModule)]})
  .catch((err) => console.error(err));

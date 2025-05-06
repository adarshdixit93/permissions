import { ApplicationConfig,  importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

// const routes: Routes = [
//     { path: '', redirectTo: '/reports', pathMatch: 'full' },
//     { path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
//     { path: 'files', loadChildren: () => import('./modules/files/files.module').then(m => m.FilesModule) },
//     { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
//     { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
//     { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
//     {
//         path: 'forbidden',
//         loadComponent: () => import('./forbidden/forbidden.component').then(c => c.ForbiddenComponent),
//
//     },
//     { path: '**', redirectTo: '/reports' },
// ];

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), importProvidersFrom([BrowserAnimationsModule]), provideAnimations(), provideHttpClient()]
};

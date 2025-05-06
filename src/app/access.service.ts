import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface ModuleAccess {
  moduleName: string;
  allowedActions: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  private accessibleModulesCache: string[] | null = null;
  private accessibleComponentsCache: { [moduleName: string]: string[] } = {};
  private moduleAccessSubject = new BehaviorSubject<string[]>([]);
  moduleAccess$ = this.moduleAccessSubject.asObservable();
  
  private mockModules: string[] = ['Reports', 'Files', 'Users', 'Projects', 'Settings'];

  private mockAccessData: ModuleAccess[] = [
    { moduleName: 'Reports', allowedActions: ['Reports.GetReports', 'Reports.CreateReport', 'Reports.DeleteReport'] },
    { moduleName: 'Files', allowedActions: ['Files.GetFiles', 'Files.UploadFile', 'Files.DeleteFile'] },
    { moduleName: 'Users', allowedActions: ['Users.GetUsers', 'Users.CreateUser'] },
    { moduleName: 'Projects', allowedActions: ['Projects.GetProjects'] },
    { moduleName: 'Settings', allowedActions: ['Settings.ViewSettings'] },
  ];

  getAccessibleModules(): Observable<string[]> {
    if (this.accessibleModulesCache) {
      return of(this.accessibleModulesCache);
    }
    return of(this.mockModules).pipe(
      tap((modules) => {
        this.accessibleModulesCache = modules;
        this.moduleAccessSubject.next(modules);
      })
    );
  }

  getAccessibleComponents(modules: string[]): Observable<ModuleAccess[]> {
    const uncachedModules = modules.filter(module => !this.accessibleComponentsCache[module]);

    if (uncachedModules.length === 0) {
        return of(modules.map(moduleName => ({
          moduleName: moduleName,
          allowedActions: this.accessibleComponentsCache[moduleName]
        })));
      }
    
    return of(this.mockAccessData).pipe(
      map(data => data.filter(item => uncachedModules.includes(item.moduleName))),
      tap(data => {
        data.forEach(item => {
          this.accessibleComponentsCache[item.moduleName] = item.allowedActions;
        });
      }),
      switchMap(() => {
        return of(modules.map(moduleName => ({
            moduleName: moduleName,
            allowedActions: this.accessibleComponentsCache[moduleName]
          })))
      })
    );
  }

  hasAccess(moduleName: string, action: string): Observable<boolean> {
    return this.getAccessibleComponents([moduleName]).pipe(
        map(accessList => {
            const moduleAccess = accessList.find(item => item.moduleName === moduleName);
            if (moduleAccess) {
                return moduleAccess.allowedActions.includes(action);
            }
            return false;
        })
    );
}

}
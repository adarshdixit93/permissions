import { Route, Routes } from "@angular/router";
import { AccessGuard } from "./access.guard";
import { inject } from "@angular/core";

const accessGuardFn = (route: Route, segments: import("@angular/router").UrlSegment[]) => {
    return inject(AccessGuard).canActivate(route as any, { url: '/' });
}

export const routes: Routes = [
    {
        path: "reports",
        loadChildren: () =>
            import("./modules/reports/reports").then((m) => m.routes),
        canMatch: [accessGuardFn],
        data: { moduleName: "Reports" }
    },
    {
        path: "files",
        loadChildren: () =>
            import("./modules/files/files").then((m) => m.routes),
        canMatch: [accessGuardFn],
        data: { moduleName: "Files" }
    },
    {
        path: "users",
        loadChildren: () =>
            import("./modules/users/users").then((m) => m.routes),
        canMatch: [accessGuardFn],
        data: { moduleName: "Users" }
    },
    {
        path: "projects",
        loadChildren: () =>
            import("./modules/projects/projects").then((m) => m.routes),
        canMatch: [accessGuardFn],
        data: { moduleName: "Projects" }
    },
    {
        path: "settings",
        loadChildren: () => import("./modules/settings/settings").then((m) => m.routes),
        canMatch: [accessGuardFn],
        data: { moduleName: "Settings" }
    },
    {
        path: "forbidden",
        loadComponent: () => import("./forbidden/forbidden.component").then((m) => m.ForbiddenComponent),
    },

];

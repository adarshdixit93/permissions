import { Routes } from "@angular/router";
import { AccessGuard } from "./access.guard";
import { AccessService } from "./access.service";
import { inject } from "@angular/core";

export const routes: Routes = [
  {
    path: "reports",
    loadChildren: () =>
      import("./modules/reports/reports.routes").then((m) => m.routes),
    canMatch: [AccessGuard],
    data: { moduleName: "Reports" }
  },
  {
    path: "files",
    loadChildren: () =>
      import("./modules/files/files.routes").then((m) => m.routes),
    canMatch: [AccessGuard],
    data: { moduleName: "Files" }
  },
  {
    path: "users",
    loadChildren: () =>
      import("./modules/users/users.routes").then((m) => m.routes),
    canMatch: [AccessGuard],
    data: { moduleName: "Users" }
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./modules/projects/projects.routes").then((m) => m.routes),
    canMatch: [AccessGuard],
    data: { moduleName: "Projects" }
  },
    {
    path: "settings",
    loadChildren: () =>
      import("./modules/settings/settings.routes").then((m) => m.routes),
    canMatch: [AccessGuard],
    data: { moduleName: "Settings" }
  },
  {
    path: "forbidden",
    loadComponent: () =>
      import("./forbidden/forbidden.component").then((m) => m.ForbiddenComponent),
  },

];

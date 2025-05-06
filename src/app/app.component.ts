import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessService } from './access.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    title = 'myapp';
     menuItems: { label: string; route: string; visible: boolean; }[] = [
      { label: 'Reports', route: 'reports', visible: false },
      { label: 'Files', route: 'files', visible: false },
      { label: 'Users', route: 'users', visible: false },
      { label: 'Projects', route: 'projects', visible: false },
      { label: 'Settings', route: 'settings', visible: false },
    
    ];

    constructor(private accessService: AccessService, private router: Router) {}

    ngOnInit(): void {
        this.getAccessibleModules();
    }

    getAccessibleModules() {
        this.accessService.getAccessibleModules().subscribe((modules) => {
             this.menuItems.forEach((item) => {
              item.visible = modules.includes(item.label);
            });
        });
    }

}

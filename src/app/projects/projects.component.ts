// src/app/projects/projects.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
  ];
}
```

```html
<!-- src/app/projects/projects.component.html -->
<h2>Projects</h2>
<ul>
  <li *ngFor="let project of projects">
    {{ project.name }}
  </li>
</ul>
```

```css
/* src/app/projects/projects.component.css */
h2 {
  color: blue;
}
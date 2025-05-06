import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  files = [
    { id: 1, name: 'File 1', type: 'document' },
    { id: 2, name: 'File 2', type: 'image' },
    { id: 3, name: 'File 3', type: 'pdf' },
  ];
}
```
```html
<h2>Files</h2>
<ul>
  <li *ngFor="let file of files">
    {{ file.name }} ({{ file.type }})
  </li>
</ul>
```
```css
h2 {
    color: #333;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}
// reports.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any[] = []; // Replace 'any' with your report interface

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching reports data
    this.reports = [
      { id: 1, name: 'Report 1', date: '2023-01-15' },
      { id: 2, name: 'Report 2', date: '2023-02-20' },
      { id: 3, name: 'Report 3', date: '2023-03-10' },
    ];
  }
}
```

```typescript
// reports.component.html
<h2>Reports</h2>

<ul *ngIf="reports.length > 0">
  <li *ngFor="let report of reports">
    {{ report.name }} - {{ report.date }}
  </li>
</ul>
<p *ngIf="reports.length === 0">No reports available.</p>
```

```css
/* reports.component.css */
h2 {
    color: #333;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #eee;
  }
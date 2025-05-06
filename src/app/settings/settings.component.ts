// settings.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settings = [
    { name: 'Profile', description: 'Manage your profile information' },
    { name: 'Notifications', description: 'Configure your notification preferences' },
    { name: 'Security', description: 'Manage your security settings' },
    { name: 'Appearance', description: 'Customize the look and feel' },
    { name: 'About', description: 'About application' },
  ];
}
```

```html
<!-- settings.component.html -->
<div class="settings-container">
  <h1>Settings</h1>
  <ul>
    <li *ngFor="let setting of settings">
      <strong>{{ setting.name }}</strong>: {{ setting.description }}
    </li>
  </ul>
</div>
```

```css
/* settings.component.css */
.settings-container {
  padding: 20px;
}

.settings-container ul {
  list-style: none;
  padding: 0;
}

.settings-container li {
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
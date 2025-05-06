import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <div class="users-container">
      <h2>Users</h2>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  `,
  styles: [`
    .users-container {
      padding: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
  `]
})
export class UsersComponent {
}
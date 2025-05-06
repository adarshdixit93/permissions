import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <div class="forbidden-container">
      <h1>403 Forbidden</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  `,
  styles: [`
    .forbidden-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }
  `]
})
export class ForbiddenComponent {

}
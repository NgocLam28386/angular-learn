import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css',
})
export class SiderbarComponent {}

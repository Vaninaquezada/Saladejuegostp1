import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../clases/usuario';
import { ChatComponent } from '../chat/chat.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ChatComponent, CommonModule, RouterOutlet, RouterLink],
})
export class HomeComponent {
  user$!: Observable<Usuario>;
  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authSvc.user$;
  }
}

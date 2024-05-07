import { Component } from '@angular/core';
import { GitServiceService } from '../../services/git-service.service';

@Component({
  selector: 'app-quiensoy',
  standalone: true,
  imports: [],
  templateUrl: './quiensoy.component.html',
  styleUrl: './quiensoy.component.css',
})
export class QuiensoyComponent {
  datos: any;
  constructor(private gitSvc: GitServiceService) {
    this.datos = {
      name: '',
      avatar_url: '',
      login: '',
    };
  }
  ngOnInit(): void {
    this.gitSvc.getGitHubInfo().subscribe((resultado: any) => {
      setTimeout(() => {
        next: this.datos = resultado;
        console.log(this.datos);
      }, 1000);
    });
  }
}

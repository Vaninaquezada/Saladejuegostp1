import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { MijuegoComponent } from './components/mijuego/mijuego.component';
import { MayoromenorComponent } from './components/mayoromenor/mayoromenor.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quiensoy', component: QuiensoyComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayormenor', component: MayoromenorComponent },
  { path: 'mijuego', component: MijuegoComponent },
  { path: '**', component: HomeComponent },
];

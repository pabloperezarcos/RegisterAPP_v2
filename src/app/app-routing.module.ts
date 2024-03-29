import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./pages/home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./pages/home-docente/home-docente.module').then( m => m.HomeDocentePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-pass-modal',
    loadChildren: () => import('./pages/modals/recuperar-pass-modal/recuperar-pass-modal.module').then( m => m.RecuperarPassModalPageModule)
  },
  {
    path: 'register-user-modal',
    loadChildren: () => import('./pages/modals/register-user-modal/register-user-modal.module').then( m => m.RegisterUserModalPageModule)
  },
  {
    path: 'registro-clase-modal',
    loadChildren: () => import('./pages/modals/registro-clase-modal/registro-clase-modal.module').then( m => m.RegistroClaseModalPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/tabs/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/tabs/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/tabs/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/tabs/feriados/feriados.module').then( m => m.FeriadosPageModule)
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./pages/agregar-alumno/agregar-alumno.module').then( m => m.AgregarAlumnoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

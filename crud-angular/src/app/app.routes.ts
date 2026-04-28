import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses', // Redirect to the 'courses' path when the root path is accessed
    pathMatch: 'full', // Ensure that the entire URL matches the empty path for redirection
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses-module').then(mod => mod.CoursesModule),
  }
];

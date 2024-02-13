import { Route } from '@angular/router';

export const appRoutes: Route[] = [

{
    path: '',
    loadComponent: () =>
        import('./homepage.component').then((m) => m.HomePageComponent),
},
{
    path: 'settings',
    loadComponent: () =>
        import('./settingspage.component').then((m) => m.SettingsPageComponent),
},
{
    path: '**',
    redirectTo: ''
}
];

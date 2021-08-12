import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentYearComponent } from './current-year/current-year.component';
import { MyVacationComponent } from './my-vacation/my-vacation.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NextYearComponent } from './next-year/next-year.component';

export const routes: Routes = [
    {
    path: '',
    component: NavigationBarComponent,
    children: [
        {
            path: 'CurrentYear',
            component: CurrentYearComponent
        },
        {
            path: 'NextYear',
            component: NextYearComponent
        },
        {
            path: 'MyVacations',
            component: MyVacationComponent
        }
    ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '', // localhost:4200 /
        component: HomeComponent
    },
    {
        path: ':room',
        component: RoomComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
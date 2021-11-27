import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from './Pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './Pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './Pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './Pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'Region',
        component: PorRegionComponent
    },
    {
        path: 'Capital',
        component: PorCapitalComponent
    },
    {
        path: 'Pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
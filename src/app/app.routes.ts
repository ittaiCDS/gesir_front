import { Routes } from '@angular/router';
import { IndexComponent } from './proveedores/index/index.component';
import { CreateComponent } from './proveedores/create/create.component';
import { EditComponent } from './proveedores/edit/edit.component';
import { ViewComponent } from './proveedores/view/view.component';
import { MapsComponent } from './proveedores/maps/maps.component';
import { MapsGenerateComponent } from './proveedores/maps-generate/maps-generate.component';

export const routes: Routes = [
    {path: 'proveedor', redirectTo: 'proveedor/index', pathMatch: 'full'},
    {path: 'proveedor/index', component: IndexComponent},
    {path: 'proveedor/create', component: CreateComponent},
    {path: 'proveedor/:postId/edit', component: EditComponent},
    {path: 'proveedor/:postId/view', component: ViewComponent},
    {path: 'proveedor/maps', component: MapsComponent},
    {path: 'proveedor/mapsDraw', component: MapsGenerateComponent}

];

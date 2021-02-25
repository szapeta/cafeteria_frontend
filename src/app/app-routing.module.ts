import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
{path: 'productos', component: ProductosComponent},
{path: 'producto/:id', component: ProductoComponent},
{path: '**', pathMatch:'full', redirectTo: 'productos'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

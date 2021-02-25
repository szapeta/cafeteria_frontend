import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

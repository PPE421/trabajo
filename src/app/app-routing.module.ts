import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { CiudadComponent } from './pages/departamento/ciudad/ciudad.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { AgregarvehiculoComponent } from './pages/vehiculo/agregarvehiculo/agregarvehiculo.component';

const routes: Routes = [
  {path: 'buscar', component: BuscarComponent},
  {path: 'ingresar', component: RegistroComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'departamento', component: DepartamentoComponent, children :[
  {path:  'ciudad/:idDep', component: CiudadComponent}
    ]
  },
  {path: 'departamento', component: DepartamentoComponent, children :[
    {path:  'ciudad/:idDep', component: CiudadComponent}
      ]
    },
  {path: 'vehiculo', component: VehiculoComponent, children :[ 
    {path: 'agregarvehiculo', component: AgregarvehiculoComponent},
    {path: 'edicion/:idVehiculo', component: AgregarvehiculoComponent},
   ]
  },
  {path: '**', component: VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }

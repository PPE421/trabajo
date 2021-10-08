import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/_model/Vehiculo';
import { VehiculoService } from 'src/app/_service/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  displayedColumns: string[] = ['idVehiculo', 'placa', 'modelo', 'marca', 'tipoVehiuclo', 'capacidad' ];
  dataSource = new MatTableDataSource<Vehiculo>();

  @ViewChild("CarPaginator") paginator: MatPaginator;

  constructor(private vehiculoService: VehiculoService, public route: ActivatedRoute) { }
        

    ngOnInit(): void {

   // let vehiculo: Vehiculo = new Vehiculo();
    /*vehiculo.placa = "abc-789";
    vehiculo.modelo = "2021";
    vehiculo.marca = "Renault";
    vehiculo.tipoVehiuclo = "Carga";
    vehiculo.capacidad = "120Kg"; 

    this.vehiculoService.guardar(vehiculo).subscribe(data =>{
        console.log("Se registro vehiculo");
    });*/
    this.vehiculoService.Carlistar().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

  }

}

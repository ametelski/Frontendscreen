import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../../interfaces/ivehicle';
import { VehicleService } from '../../services/vehicle.service'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css'],
  providers: [VehicleService]
})
export class VehicleSearchComponent implements OnInit {
  title = 'Vehicle Search';
  vehicles: IVehicle[];
  urlFinal: string; 
  constructor(private vehicleService: VehicleService ) { }

  ngOnInit() { 

   var x = this.vehicleService.getVehicles().subscribe(e => {
     this.vehicles = e;
   }); 
    
  }

}

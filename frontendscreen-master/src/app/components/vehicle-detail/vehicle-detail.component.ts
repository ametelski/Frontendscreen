import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { IVehicle } from '../../interfaces/ivehicle';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css'],
  providers: [VehicleService]
})

export class VehicleDetailComponent implements OnInit {

  @Input() id: number;

  vehicle: IVehicle;
  stockNumber: number;
  mainImageUrl: string;
  thumbImageUrl: string;
  constructor( private route: ActivatedRoute, private vehicleService: VehicleService ) { }

  ngOnInit() {
    this.stockNumber = this.route.snapshot.params['id'];
    if (this.stockNumber > 0) {
      this.vehicleService.getVehicle(this.stockNumber)
        .subscribe(vehicle => this.vehicle = vehicle[0]);
      this.mainImageUrl = 'https://az30404.vo.msecnd.net/publicstockimages/' + this.stockNumber + '/' +
        this.stockNumber + '_FULL_LF-E.jpg';
      this.thumbImageUrl = 'https://az30404.vo.msecnd.net/publicstockimages/' + this.stockNumber + '/' +
        this.stockNumber + '_THUMB_LS-E.jpg';
    }
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../../components/home/home.component';
import { VehicleSearchComponent } from '../../components/vehicle-search/vehicle-search.component';
import { VehicleDetailComponent } from '../../components/vehicle-detail/vehicle-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehicle-search', component: VehicleSearchComponent },
  { path: 'vehicle-detail/:id', component: VehicleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

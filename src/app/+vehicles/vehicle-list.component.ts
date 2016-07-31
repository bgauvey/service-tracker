import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';

import { VehicleService, IVehicle } from '../core/vehicles';

@Component({
  moduleId: module.id,
  selector: 'vehicle-list',
  templateUrl: 'vehicle-list.component.html',
  styleUrls: ['vehicle-list.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES]
})
export class VehicleListComponent implements OnInit {
  vehicles: Observable<IVehicle[]>;

  constructor(private router: Router, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getAll();
  }

  addNew(): void {
    this.router.navigate(['/vehicle'], { queryParams: { id: 'new' } });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/vehicle'], { queryParams: { id: id } });
  }

  getDate(value: number): string {
    return new Date(value).toLocaleDateString(`en-US`);
  }
}

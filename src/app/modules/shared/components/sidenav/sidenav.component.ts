import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  username: any;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorías", route: "category", icon: "category"},
    {name: "Productos", route: "producto", icon: "production_quantity_limits"},
    {name: "Almacén", route: "almacen", icon: "store"},
    {name: "Encargado", route: "encargado", icon: "assignment_ind"}
  ]

  constructor(media: MediaMatcher, private keyCloakService: KeycloakService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {
    this.username = this.keyCloakService.getUsername();
  }

  logout(){
      this.keyCloakService.logout();
  }

}

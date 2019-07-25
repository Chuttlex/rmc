import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  upAffichage: boolean = true;
  upCreation: boolean = true;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  onDropDownMenuAffichage(){
    this.upAffichage = !this.upAffichage;
  }

  onDropDownMenuCreation(){
    this.upCreation = !this.upCreation;
  }

  navigate(route: string){
    this.router.navigate([route]);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';

@Component({
 
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  @Input() navData;
  isLoggedIn :boolean=false;
  ngOnInit(){
  
  }
  login()
  {
      this.isLoggedIn =true;
      this.router.navigate(['/login']);
  
  }
  logout(){
      this.isLoggedIn=false;
      this.router.navigate(['/home']);
  }
  
  constructor(private router: Router){
  }
}

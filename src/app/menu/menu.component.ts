import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
login: boolean
  constructor() { }

  ngOnInit(): void {
    if ('currentuser' in localStorage){
      this.login = true;
    }
    else{
      this.login = false;
    }
  }

}

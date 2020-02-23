import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokerplan';

  constructor() { }
  
  list = ['0', '1','2','3','5','8','13','21','34','55','89','144','endless','?','cup'];
  cardSelected = '';
  cardIsOpen: boolean;

  ngOnInit(): void {    
  }  
  open(cardSelected) {
    this.cardIsOpen = true;
    this.cardSelected = cardSelected;
  }
  close(){
    this.cardIsOpen = false;
  }

}

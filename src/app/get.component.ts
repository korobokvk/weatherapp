import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  template: `
    <p>
      
    </p>
  `,
  styles: []
})
export class GetComponent implements OnInit {
  location = { };

  setPosition(position){
    this.location = position.coords;
    console.log(position.coords);
  }
  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };
  }

}

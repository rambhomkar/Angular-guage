import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  guagePerCentage:number = 0;
  showAlert:boolean = false;
  title = 'angular-guage';

  perCal(inputVal){

    if(inputVal >= 0 && inputVal < 101){
      this.showAlert= false;
    return 262 - (262*inputVal) / 100;
    }
    else{      
     this.showAlert= true;
   //  this.guagePerCentage = 100;
     return 0;
    }
  }
}

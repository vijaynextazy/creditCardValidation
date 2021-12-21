import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent implements OnInit {

  cardDigit: any

  formDetialArray: any[] = [];

  showFormDetial: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(event: any) {

    this.formDetialArray.push(event.value);

    this.showFormDetial = true;

  }

  checkLength(event: any) {

    console.log(event.value);
  }

  expiryValidation(event:any){

   //console.log(event.target.value)
   if(event.target.value ==""){
     alert("Please enter Expiry Date");
   }
  }

}

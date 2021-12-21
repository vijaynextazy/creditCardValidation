import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpiryDate]'
})
export class ExpiryDateDirective {

  constructor() { }

  @HostListener('input',['$event'])
  keyup(event:any) {
    var input = event.target

    var trimmed = input.value.replace(/\s+/g,'/');
   
    var numbers = [];
    for (var i = 0; i < trimmed.length; i += 2) {
      numbers.push(trimmed.substr(i,2));
    } 

     input.value = numbers.join(" ");

  }

}

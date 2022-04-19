import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRepo]'
})
export class RepoDirective {

  constructor(private elem:ElementRef) { 
  elem.nativeElement.style.color ="black";
}
}
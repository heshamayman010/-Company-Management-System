import { Directive, Input,ElementRef, HostListener,OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[light]'
})
export class LightchangeDirective implements OnChanges {
@Input('light')lighmode:string='Red';

  constructor(private element:ElementRef) {

}
  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.border="10px blue solid";
    
  }
@HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse enter event triggered');
    this.element.nativeElement.style.border = '10px grey solid';
}

@HostListener('mouseout') onMouseOut() {
    console.log('Mouse out event triggered');
    this.element.nativeElement.style.border = '10px red solid';
}


}

  // we use the public before the parameter name to make the type script make an property withe the same name and save the variable in it 

// here we must have css to apply and we will change the style when using this directive
    // element.nativeElement.style=''; 






import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[erClickableIndicator]'
})
export class ClickableIndicatorDirective {

  	constructor(el: ElementRef, renderer: Renderer2) {
  		el.nativeElement.onmouseover = () => renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  		el.nativeElement.onmouseout = () => renderer.removeStyle(el.nativeElement, 'cursor');
  	}

}

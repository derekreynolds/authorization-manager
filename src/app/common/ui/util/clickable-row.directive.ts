import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[erClickableRow]'
})
export class ClickableRowDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
  		el.nativeElement.onmouseover = () => { 
  			renderer.setStyle(el.nativeElement, 'cursor', 'pointer');  
  			renderer.addClass(el.nativeElement, 'er-row-highlight');
  		};
  		el.nativeElement.onmouseout = () => {
  			renderer.removeStyle(el.nativeElement, 'cursor');
  			renderer.removeClass(el.nativeElement, 'er-row-highlight');
  		}
  	}

}

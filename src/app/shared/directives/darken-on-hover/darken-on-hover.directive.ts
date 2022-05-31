import { Renderer2 } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    constructor(private el: ElementRef, private render: Renderer2){}

    @HostListener('mouseover')
    darkOn(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)')
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}
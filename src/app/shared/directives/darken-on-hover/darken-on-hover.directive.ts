import { Renderer } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    constructor(private el: ElementRef, private render: Renderer){}

    @HostListener('mouseover')
    darkOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)')
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}
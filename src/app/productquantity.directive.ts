import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductquantity]'
})
export class ProductquantityDirective {
  @Input('qte') qte :any
  constructor(private render:Renderer2, private el:ElementRef) { 
    
  }
  
  @HostListener("click") 
  setclick(){
    if(this.qte<=50){
      this.render.setStyle(this.el.nativeElement,"backgroundColor","green")
    }
    else{
      this.render.setStyle(this.el.nativeElement,"backgroundColor","black")

    }
  }
  @HostListener("dblclick") 
  setdbclick(){
    this.render.setStyle(this.el.nativeElement,"backgroundColor","red")
  }
}

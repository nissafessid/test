// import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
// import { NgControl, ValidationErrors } from '@angular/forms';
// import { Subscription } from 'rxjs';

// @Directive({
//   selector: '[appValidateform]'
// })
// export class ValidateformDirective {

//   constructor(private elRef: ElementRef,private ren:Renderer2,private control: NgControl) { }
//   @Input('formControlName') formControlName: string;
//   errorSpanId = '';
//   statusChangeSubscription: Subscription;
//   ngOnInit(): void {
//     this.errorSpanId = this.formControlName + '-error';
//     this.statusChangeSubscription = this.control.statusChanges.subscribe(
//       (status:any) => {
//         if (status === 'INVALID') {
//           this.showError();
//         } else {
//           this.removeError();
//         }
//       }
//     );
//   }
//   @HostListener('blur', ['$event'])
//   handleBlurEvent(event:any) {
//     console.log(event);
//     if (this.control.value === null || this.control.value === '') {
//       if (this.control.errors) {
//         this.showError();
//       } else {
//         this.removeError();
//       }
//     }
//   }
//   private showError() {
//     this.removeError();
//     const valErrors: ValidationErrors = this.control.errors;
//     const firstKey = Object.keys(valErrors)[0];
//     console.log('firstKey => ', firstKey);
//     const errorMsgKey = this.formControlName + '-' + firstKey;
//     const errorMsg = '';
//     const errSpan =  errorMsg ;
//     this.ren.setProperty(this.elRef.nativeElement,'innerHtml',errSpan);
//     this.elRef.nativeElement.classList.add('is-invalid');
//   }
//   private removeError(): void {
//     const errorElement = document.getElementById(this.errorSpanId);
//     if (errorElement) {
//       this.elRef.nativeElement.classList.remove('is-invalid');
//       errorElement.remove();
//     }
//   }

// }

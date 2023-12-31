import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // This is custom structural directive class
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen
  // }

  @HostListener('document:click',['$event']) toggle(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}

import { Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core'; 
import { GeneralsModalPopUpService } from './generals-modal-popup.service';

@Component({
  selector: 'app-general-modal-popup',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralModalPopupComponent implements OnInit {
  @Input() id: string='';
  private element: any;
  constructor(private modalService: GeneralsModalPopUpService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'setting-modal-popup') {
        //this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }
  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  @HostBinding('style.width') public width: Number = 0;
  // open modal
  open(): void {
    this.element.style.display = 'block';
    this.width = this.modalService.width;
    //document.body.classList.add('setting-modal-popup-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    //document.body.classList.remove('setting-modal-popup-open');
  }
}

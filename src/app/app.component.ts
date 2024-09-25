import { Component } from '@angular/core';
import { GeneralsModalPopUpService } from './shared/modal/generals-modal-popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'highcharts';
  HeaderTitle: any = '<h5 class="modal-title"><span class="fas fa-chevron-left mr-3" data-dismiss="modal"></span>BREWSTER, TX</h5>';
  headerColor: string = 'bg-white f-color';

  constructor(private _modalService: GeneralsModalPopUpService) { }

  GenderWiseData:any = [];

  ViewData() {

    // Set new gender data
    this.GenderWiseData = [
      { color: '#92C5FD', name: 'M', data: [38.67], index: 0, type: 'bar' },
      { color: '#FB92FD', name: 'F', data: [61.33], index: 1, type: 'bar' },
    ],

      this.openModal('myModal-1');

  }

  //#region modal popup

  modalId: string = '';
  openModal(id: string) {
    this.modalId = id;
    this._modalService.width = 55;
    this._modalService.open(id);
  }


  closeModal(id: string) {
    this._modalService.close(id);
  }

  //#endregion

}

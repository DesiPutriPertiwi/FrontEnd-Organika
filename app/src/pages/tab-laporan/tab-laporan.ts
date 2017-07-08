import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { LaporanPage} from '../laporan/laporan';
import { DokumentasiPage} from '../dokumentasi/dokumentasi';
import { EditKeluarPage } from '../edit-keluar/edit-keluar';
/*
  Generated class for the TabLaporan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-laporan',
  templateUrl: 'tab-laporan.html'
})
export class TabLaporanPage {

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public navParams: NavParams) {}

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(EditKeluarPage);
    popover.present({ ev: event });
  }

  goToDokumentasi(){
      this.navCtrl.push(DokumentasiPage);
  }

  goToKeuangan(){
      this.navCtrl.push(LaporanPage);
  }
}

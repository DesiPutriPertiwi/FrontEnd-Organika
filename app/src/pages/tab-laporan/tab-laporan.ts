import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { LaporanPage} from '../laporan/laporan';
import { DokumentasiPage} from '../dokumentasi/dokumentasi';
import { Http } from '@angular/http';
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
  eventSource;
  viewTitle;

    public lapor;
    public httpErr;
  constructor(
    public navCtrl: NavController, public http: Http, 
    public popoverCtrl: PopoverController,
    public navParams: NavParams) {
        this.getData();
    }
 getData() {
    this.http.get('http://organika.agri.web.id/all_laporan.php').subscribe(res => {
      this.lapor = res.json();
      this.httpErr = false;
    }, err => {});
  }
  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(EditKeluarPage);
    popover.present({ ev: event });
  }

  goToDokumentasi(){
      this.navCtrl.push(DokumentasiPage);
  }
doRefresh(refresher) {
    setTimeout(() => {
      this.getData();
      refresher.complete();
    }, 1500);
  }
  goToKeuangan(){
      this.navCtrl.push(LaporanPage);
  }
}

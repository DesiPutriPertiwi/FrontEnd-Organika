import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaporanPage} from '../laporan/laporan';
import { DokumentasiPage} from '../dokumentasi/dokumentasi';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToDokumentasi(){
      this.navCtrl.push(DokumentasiPage);
  }

  goToKeuangan(){
      this.navCtrl.push(LaporanPage);
  }
}

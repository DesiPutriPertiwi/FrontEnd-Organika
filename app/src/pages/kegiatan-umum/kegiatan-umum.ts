import { Component } from '@angular/core';
import { PopoverController , ActionSheetController} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { KegiatanPage } from '../kegiatan/kegiatan';

/*
  Generated class for the KegiatanUmum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kegiatan-umum',
  templateUrl: 'kegiatan-umum.html'
})
export class KegiatanUmumPage {
  month = 'YYYY-MM-DD';
  picture: string;
  submitted = false;

  constructor(public popoverCtrl: PopoverController,public actionSheetCtrl: ActionSheetController,public camera: Camera,
    public navCtrl: NavController
    ) { }

  uploadLaporan(){
    this.submitted= true;
    this.navCtrl.push(KegiatanPage);
  }
}

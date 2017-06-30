import { Component } from '@angular/core';
import { PopoverController , ActionSheetController} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { KegiatanPage } from '../kegiatan/kegiatan';


@Component({
  selector: 'page-kegiatan-pribadi',
  templateUrl: 'kegiatan-pribadi.html'
})

export class KegiatanPribadiPage {
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

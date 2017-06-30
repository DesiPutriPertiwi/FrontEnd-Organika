import { Component } from '@angular/core';
import { PopoverController , ActionSheetController} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { BerandaPage } from '../beranda/beranda';

@Component({
  selector: 'page-tambah-beranda',
  templateUrl: 'tambah-beranda.html'
})
export class TambahBerandaPage {
  month = 'YYYY-MM-DD';
  picture: string;
  submitted = false;

  constructor(public popoverCtrl: PopoverController,public actionSheetCtrl: ActionSheetController,public camera: Camera,
    public navCtrl: NavController
    ) { }

  uploadLaporan(){
    this.submitted= true;
    this.navCtrl.push(BerandaPage);
  }
}

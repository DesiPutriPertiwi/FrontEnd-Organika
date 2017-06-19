import { Component } from '@angular/core';
import { PopoverController , ActionSheetController} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-dokumentasi',
  templateUrl: 'dokumentasi.html',
})

export class DokumentasiPage {
  month = '2017-06-02';
  picture: string;
  submitted = false;

  constructor(public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public navCtrl: NavController,
    public app: App,
    public menu: MenuController
    ) {}

uploadPicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }

   takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
    	this.picture = imageData;
    	}, (err) => {
    });
  }
  getPhotoFromGallery(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
    	this.picture = imageData;
    	}, (err) => {
    });
  }
    }

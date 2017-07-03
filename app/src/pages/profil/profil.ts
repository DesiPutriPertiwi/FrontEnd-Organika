import { Component } from '@angular/core';
import { ViewController, ActionSheetController, NavController, AlertController, NavParams,App, PopoverController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
//import { ProfileEditPage } from '../profile-edit/profile-edit';
import { Storage } from '@ionic/storage';
import { EditKeluarPage } from '../edit-keluar/edit-keluar';
import { Camera} from '@ionic-native/camera';
/*
  Generated class for the Profil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
	nama: string;
  profilePict: string;
  picture: string;
  submitted = false;


  constructor(
  	public alertCtrl: AlertController, 
  	public navCtrl: NavController,
    public app: App,
    public storage: Storage, 
    public viewCtrl: ViewController,
  	public auth: Auth,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public popoverCtrl: PopoverController) {

  }

  ionViewWillEnter(){
    this.getName();
    this.getProfilePict();
  }
  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(EditKeluarPage);
    popover.present({ ev: event });
  }
  getName() {
    this.auth.getUsername().then((nama) => {
      this.nama = nama;
    });
  }
  getProfilePict() {
    this.auth.getProfilePict().then((values) => {
      this.profilePict = values;
    });
  }
  /*editProfile(){
    this.nav.push(ProfileEditPage);
  }*/

editFoto() {
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

  logout() {
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);
    this.viewCtrl.dismiss();
  }

}

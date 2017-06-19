import { Component } from '@angular/core';
import { ViewController, NavController, AlertController, NavParams,App, PopoverController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
//import { ProfileEditPage } from '../profile-edit/profile-edit';
import { Storage } from '@ionic/storage';
import { EditKeluarPage } from '../edit-keluar/edit-keluar';

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
  constructor(
  	public alertCtrl: AlertController, 
  	public nav: NavController,
    public app: App,
    public storage: Storage, 
    public viewCtrl: ViewController,
  	public auth: Auth,
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

  logout() {
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);
    this.viewCtrl.dismiss();
  }

}

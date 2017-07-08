import { Component } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
//import { GantiPasswordPage } from '../ganti-password/ganti-password';
//import { EditAlamatPage } from '../edit-alamat/edit-alamat';

/*
  Generated class for the EditKeluar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-keluar',
  templateUrl: 'edit-keluar.html'
})
export class EditKeluarPage {
  role:string;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    public auth: Auth
  ) { }
ionViewWillEnter(){
  this.auth.getRole().then((value)=>{
    this.role = value;
  });
}
  logout() {
    const root = this.app.getRootNav();
    root.popToRoot(LoginPage);
    this.viewCtrl.dismiss();
  }
/*  gantiPassword(){
    this.navCtrl.push(GantiPasswordPage);
    this.viewCtrl.dismiss();
  }*/
}

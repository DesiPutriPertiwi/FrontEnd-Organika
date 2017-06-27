import { Component } from '@angular/core';
import { NavController, App, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Auth } from '../../providers/auth';
import { LoginPage} from '../login/login';

/*
  Generated class for the VerifikasiAkun page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-verifikasi-akun',
  templateUrl: 'verifikasi-akun.html'
})
export class VerifikasiAkunPage {
  headers = new Headers({ 'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers});
  //username:string;
  email: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: Auth,
    public http: Http,
    public app: App,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController) {
      let data = this.navParams.data;
      //this.username = data.username.data;
      this.email = data.email;
    }
  login(){
    this.app.getRootNav().setRoot(LoginPage);
  }

  reSendVerifikasi(){
    let alert = this.alertCtrl.create({
         title: 'Verifikasi Ulang',
         subTitle: 'Pengiriman verifikasi ulang sukses, silahkan masuk ke email Anda untuk verifikasi. Kemudian coba login dengan email dan password yang didaftarkan',
         buttons: ['OK']
    });
    alert.present();
  }

  showError(err: any){
    err.status == 0?
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }

  showAlert(val){
    let toast = this.toastCtrl.create({
      message: val,
      duration: 5000
    });
    toast.present();
  }
 /* ionViewDidLoad() {
    console.log('ionViewDidLoad VerifikasiAkunPage');
  }
*/
}

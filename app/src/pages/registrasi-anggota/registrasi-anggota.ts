import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { Http, Headers,RequestOptions} from '@angular/http';
import { NgForm } from '@angular/forms'
import { Auth } from'../../providers/auth';
import { VerifikasiAnggotaPage } from '../verifikasi-anggota/verifikasi-anggota';


/*
  Generated class for the RegistrasiAnggota page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registrasi-anggota',
  templateUrl: 'registrasi-anggota.html'
})
export class RegistrasiAnggotaPage {
 user: {nama?:string, myDate?:string, email?:string, password?: string, /*role?:any */ } = {};
  submitted = false;
   
  headers = new Headers({ 'Content-Type' : 'application/json'});
  options = new RequestOptions({ headers: this.headers});

  constructor(
    public navCtrl: NavController, 
    public toasCtrl: ToastController,
    public navParams: NavParams,
    public http: Http,
    public loadCtrl: LoadingController,
    public auth: Auth 
  ){
    //this.user.role = this.navParams.data
   }

   changeUserType(type: any){
   //  this.user.role = type;
   }

  onDaftar(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });
    this.navCtrl.push(VerifikasiAnggotaPage);
  }

  showError(err: any){
    err.status == 0?
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan internet Anda"):
    this.showAlert("Tidak dapat menyambung ke Server. Mohon memuat kembali halaman ini")
  }

  showAlert(message){
    let toast = this.toasCtrl.create({
      message: message,
      duration: 3000
    });
  }
 
 /* ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrasiPage');
  }
 */

}
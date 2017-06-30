import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';
import { TambahBerandaPage} from '../tambah-beranda/tambah-beranda';

@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html'
})

export class BerandaPage {

  public posts;
  public limit = 0;
  public httpErr = false;

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
    this.getData();
  }

  ionViewDidLoad() {
    //this.getData();
  }

  ionViewWillEnter() {
    this.limit = 0;
    this.getData();
  }


  doRefresh(refresher) {
    this.limit =0;
    setTimeout(() => {
      this.getData();
      refresher.complete();
    }, 1500);
  }

  getData() {
    this.http.get('localhost:8000/lihat-post').subscribe(res => {
      this.posts = res.json();
      this.httpErr = false;
    }, err => {this.showAlert(err.status)});
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.limit = this.limit+5;

      this.http.get('localhost:8000/lihat-post').subscribe(res => {
        this.posts = this.posts.concat(res.json());
      });

      infiniteScroll.complete();
    }, 500);
   }

  baca(idArtikel){
    //this.navCtrl.push(ArtikelBacaPage, idArtikel);
  }


  showAlert(status){
    if(status == 0){
      let toast = this.toastCtrl.create({
        message: 'Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: 'Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
    }

    this.httpErr = true;
  }
  goToBeranda(){
    this.navCtrl.push(TambahBerandaPage);
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController,PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import { TambahBerandaPage} from '../tambah-beranda/tambah-beranda';
import { EditKeluarPage } from '../edit-keluar/edit-keluar';

@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html'
})

export class BerandaPage {

  public posts;
  public limit = 0;
  public httpErr = false;

  constructor(
    public navCtrl: NavController, 
    public http: Http, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController) {
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
    setTimeout(() => {
      this.getData();
      refresher.complete();
    }, 1500);
  }

  getData() {
    this.http.get('http://organika.agri.web.id/beranda.php').subscribe(res => {
      this.posts = res.json();
      this.httpErr = false;
    }, err => {this.showAlert(err.status)});
  }

  

  baca(idArtikel){
    //this.navCtrl.push(ArtikelBacaPage, idArtikel);
  }


  showAlert(status){
    /*if(status == 0){
      let toast = this.toastCtrl.create({
        message: 'Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
       // message: 'Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'X'
      });
      toast.present();
    }*/

    this.httpErr = true;
  }
  goToBeranda(){
    this.navCtrl.push(TambahBerandaPage);
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(EditKeluarPage);
    popover.present({ ev: event });
  }

}
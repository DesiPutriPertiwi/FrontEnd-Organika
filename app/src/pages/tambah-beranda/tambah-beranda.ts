import { Component } from '@angular/core';
import { PopoverController , ActionSheetController} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { BerandaPage } from '../beranda/beranda';

@Component({
  selector: 'page-tambah-beranda',
  templateUrl: 'tambah-beranda.html'
})
export class TambahBerandaPage {
  picture: string;
  submitted = false;
    subject="";
    catatan="";

  constructor(public popoverCtrl: PopoverController,public actionSheetCtrl: ActionSheetController,public camera: Camera, public http: Http,
    public navCtrl: NavController
    ) { }

  uploadLaporan(){
     let post=JSON.stringify({subjek: this.subject, isi: this.catatan});
      this.http.post('http://organika.agri.web.id/tulis-post.php',post).subscribe(res=>{
          let data = res.json();
          if(data.status){
              console.log('Berhasil');
          }else{
              console.log(data);
          }
      })
      console.log(post);
    this.submitted= true;
      
    this.navCtrl.push(BerandaPage);
  }
}
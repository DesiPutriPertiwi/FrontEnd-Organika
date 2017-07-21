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
  public pengguna_id_pengguna=1;
  public subjek:string;
  public isi="";
  public divisi_organisasi_id_organisasi=2;
  public divisi_id_Divisi=1;

  constructor(public popoverCtrl: PopoverController,public actionSheetCtrl: ActionSheetController,public camera: Camera, public http: Http,
    public navCtrl: NavController
    ) { }

  kirim(){
     let post=JSON.stringify({subjek:this.subjek,isi:this.isi,Divisi_id_divisi:this.divisi_id_Divisi,Divisi_organisasi_id_organisasi:this.divisi_organisasi_id_organisasi,pengguna_id_pengguna:this.pengguna_id_pengguna});
      this.http.post('http://organika.agri.web.id/api/api.php/ruang_diskusi', post).subscribe(res=>{
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
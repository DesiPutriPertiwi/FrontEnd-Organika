import { Component } from '@angular/core';
import { ViewController, ActionSheetController, LoadingController, NavController, ToastController, AlertController, NavParams,App, PopoverController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { EditProfilPage } from '../edit-profil/edit-profil';
import { Storage } from '@ionic/storage';
import { EditKeluarPage } from '../edit-keluar/edit-keluar';
import { Camera} from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
//import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
	user: {user_id?: string, ttl?: string, name?: string, email?: string, picture?: string, password?: string,  role?: string} = {};
  nama : string;
  base64Image: string;
  profilePict: string;
  picture: string;
  submitted = false;
  loading : any;


  constructor(
  	public alertCtrl: AlertController, 
  	public navCtrl: NavController,
    public app: App,
    public storage: Storage, 
    public viewCtrl: ViewController,
  	public auth: Auth,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public toastCtrl: ToastController,
  	public loadCtrl: LoadingController,
  //  public authHttp: AuthHttp,
    public popoverCtrl: PopoverController) {

  }

  ionViewWillEnter(){
    this.getName();
    this.getProfilePict();
    this.auth.getData().then((value)=>{
      this.user.ttl = value.ttl;
      this.user.name = value.name;
      this.user.email = value.email;
      this.user.user_id = value.user_id;
      this.user.picture = value.picture;
      this.user.role = value.role;
    });

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
  
  editProfil(){
   this.navCtrl.push(EditProfilPage);
  }
  
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
  
  postUpdatePicture(){
    this.loading = this.loadCtrl.create({
        content: 'Uploading image...'
    });
    this.loading.present();
    let param = JSON.stringify({
      picture: this.base64Image
    });
/*    this.authHttp.post(this.auth.BASE_URL+'user/uploadPhoto',param).subscribe(res => {
      this.loading.dismiss();
      let response = res.json();
      if(response.status==200) {
        this.auth.updateProfilePict(response.picture);
        this.user.picture = response.picture;
        this.showAlert("Berhasil mengubah foto profile"); 
      }         
    }, err => { 
        this.loading.dismiss();
        this.showError(err);
    });
    */
  }  

  onUpdate(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });
    if (form.valid) {
    	loading.present();
      let param = JSON.stringify({
     	  user_id : this.user.user_id,
        ttl : this.user.ttl,
        name : this.user.name,
        email : this.user.email,
        password: this.user.password
      });
  /*    this.authHttp.post(this.auth.BASE_URL+'user/update',param).subscribe(res => {
      	loading.dismiss();
        let response = res.json();
        if(response.status == 200) {
          this.auth.login(response.data);
          this.showAlert(response.message);
          this.navCtrl.popToRoot();
        } else if(response.status == 400) {
          this.showAlert(response.message);
        }
      }, err => { 
      	loading.dismiss();
         this.showError(err);
      });
*/
    }
  }
  showError(err: any){  
    err.status==0? 
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

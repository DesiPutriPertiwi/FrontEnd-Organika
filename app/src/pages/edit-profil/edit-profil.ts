import { Component } from '@angular/core';
import { ViewController, ActionSheetController, LoadingController, NavController, ToastController, AlertController, NavParams,App } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { NgForm} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { GantipaswordPage} from '../gantipasword/gantipasword';

/*
  Generated class for the EditProfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-profil',
  templateUrl: 'edit-profil.html'
})
export class EditProfilPage {
  user: {user_id?: string, ttl?: string, name?: string, email?: string, picture?: string, password?: string,  role?: string} = {};
  nama : string;
  base64Image: string;
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
   // public camera: Camera,
    public toastCtrl: ToastController,
  	public loadCtrl: LoadingController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPage');
    this.auth.getData().then((value)=>{
      this.user.name = value.name;
      this.user.ttl = value.ttl;
      this.user.email = value.email;
      this.user.user_id = value.user_id;
      this.user.picture = value.picture;
      this.user.role = value.role;
      this.user.password = value.password;
    });
  }

  onUpdate(form: NgForm) {
    this.submitted = true;
   /* let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });*/
    if (form.valid) {
    //	loading.present();
      let param = JSON.stringify({
     	  user_id : this.user.user_id,
        ttl : this.user.ttl,
        name : this.user.name,
        email : this.user.email,
        password: this.user.password
      });
   /*   this.authHttp.post(this.userData.BASE_URL+'user/update',param).subscribe(res => {
      	loading.dismiss();
        let response = res.json();
        if(response.status == 200) {
          this.userData.login(response.data);
          this.showAlert(response.message);
          this.navCtrl.popToRoot();
        } else if(response.status == 400) {
          this.showAlert(response.message);
        }
      }, err => { 
      	loading.dismiss();
         this.showError(err);
      });*/

    }
  }
  gantiPass(){
    this.navCtrl.push(GantipaswordPage);
  }
}

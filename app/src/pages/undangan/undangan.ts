import { Component } from '@angular/core';
import { ViewController, ActionSheetController, LoadingController, NavController, ToastController, AlertController, NavParams,App, PopoverController } from 'ionic-angular';
import { NgForm} from '@angular/forms';
import { Http, Headers,RequestOptions} from '@angular/http';
import { Storage } from '@ionic/storage';
import {Auth } from '../../providers/auth';
import { TabsPage} from '../tabs/tabs';

/*
  Generated class for the Undangan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-undangan',
  templateUrl: 'undangan.html'
})
export class UndanganPage {
  organisasi: {nama_organisasi?:string, jumlah?:number, deskripsi?:string, url?:string} ={};
  keanggotaan: {level?: string, divisi_id_divisi?:number}={};
  user: {user_id?: string, ttl?: string, name?: string, email?: string, picture?: string, password?: string,   role?: string} = {};
  submitted = false;
   
  headers = new Headers({ 'Content-Type' : 'application/json'});
  options = new RequestOptions({ headers: this.headers});

  constructor(
    public alertCtrl: AlertController, 
  	public navCtrl: NavController,
    public storage: Storage, 
    public viewCtrl: ViewController,
  	public auth: Auth,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
  	public loadCtrl: LoadingController,
    public popoverCtrl: PopoverController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UndanganPage');
  }

  onDaftar(){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });
    this.navCtrl.push(TabsPage);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  organisasi: {nama_organisasi?:string} ={};
  keanggotaan: {level?: string, divisi_id_divisi?:number}={};
  user: {user_id?: string, ttl?: string, name?: string, email?: string, picture?: string, password?: string,   role?: string} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UndanganPage');
  }

}

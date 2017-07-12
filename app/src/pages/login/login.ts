import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,Headers,RequestOptions } from '@angular/http';
import { NavController,LoadingController } from 'ionic-angular';

import { Auth } from '../../providers/auth';

import { TabsPage } from '../tabs/tabs';
import { RegistrasiPage } from '../registrasi/registrasi';
import { LupapaswordPage} from '../lupapasword/lupapasword';
// import { Storage } from '@ionic-storage';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  submitted = false;
  
  headers = new Headers({ 'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers});
  
  constructor(
    public navCtrl: NavController, 
    public auth: Auth,
    public http: Http,
    public loadCtrl: LoadingController
    ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'Tunggu sebentar...'
    });

   /* if (form.valid) {
      // this.auth.login(this.login.username);
      let input = JSON.stringify({
        email: this.login.username, 
        password: this.login.password
      });
      this.http.post("http://localhost:2017/login",input,this.options).subscribe(data => {
        let response = data.json();

        console.log(response);
        if(response.message =="ok"){ */
          this.navCtrl.push(TabsPage);
      /*  }
      });
    }*/
  }

  lupaPass(){
    this.navCtrl.push(LupapaswordPage);
  }

  onSignup() {
   this.navCtrl.push(RegistrasiPage);
  }
}

import { Injectable } from '@angular/core';

import { Events, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { AuthHttp} from 'angular2-jwt';


@Injectable()
export class Auth {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  BASE_URL = 'http:';
  token:any;
  data:any;

  constructor(
    public events: Events,
    public toasCtrl: ToastController,
    public storage: Storage,
   // public authHttp: AuthHttp
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(data: string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('username', data);
    this.events.publish('user:login');
  };

  signup(data: string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('username', data);
    this.events.publish('user:signup');
  };

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.storage.remove('token');
    this.storage.remove('komoditas');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  setToken(token: string){
    this.storage.set('token', token);
  }

  getData() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  updateProfilePict(picture) {
    this.storage.get('username').then((value) => {
      let data = value;
      data.picture = picture;
      this.storage.set('username', data);
    });
  }
  getProfilePict() {
    return this.storage.get('username').then((value) => {
      return value.picture;
    });
  };
  getToken() {
    return this.storage.get('token').then((value) => {
      return value;
    });
  };
  getRole() {
    return this.storage.get('username').then((value) => {
      return value.role;
    });
  };
  getId(){
    return this.storage.get('username').then((value) => {
      return value.user_id;
    });
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };
}

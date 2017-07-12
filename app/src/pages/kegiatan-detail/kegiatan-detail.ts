import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-kegiatan-detail',
  templateUrl: 'kegiatan-detail.html'
})
export class KegiatanDetailPage {
  session: any;

  constructor(public navParams: NavParams) {
    this.session = navParams.data.session;
  }
}

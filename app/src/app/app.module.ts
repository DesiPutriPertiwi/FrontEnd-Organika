import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { KegiatanPage } from '../pages/kegiatan/kegiatan';
import { ProfilPage } from '../pages/profil/profil';
import { BerandaPage } from '../pages/beranda/beranda';
import { UndanganPage } from '../pages/undangan/undangan';
import { TabsPage } from '../pages/tabs/tabs';
import {LeaderboardPage} from '../pages/leaderboard/leaderboard';
import { MulaiPage } from '../pages/mulai/mulai';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';
import { Storage } from '@ionic/storage';
import { RegistrasiPage} from '../pages/registrasi/registrasi';
import { EditKeluarPage} from '../pages/edit-keluar/edit-keluar';
import { Camera } from '@ionic-native/camera';
import { LaporanPage } from '../pages/laporan/laporan';
import { DokumentasiPage } from '../pages/dokumentasi/dokumentasi';
import { TabLaporanPage } from '../pages/tab-laporan/tab-laporan'
;
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    KegiatanPage,
    BerandaPage,
    UndanganPage,
    ProfilPage,
    LeaderboardPage,
    LoginPage,
    RegistrasiPage,
    EditKeluarPage,
    LaporanPage,
    DokumentasiPage,
    TabLaporanPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    KegiatanPage,
    BerandaPage,
    UndanganPage,
    ProfilPage,
    LeaderboardPage,
    LoginPage,
    RegistrasiPage,
    EditKeluarPage,
    LaporanPage,
    DokumentasiPage,
    TabLaporanPage,
  ],
  providers: [
    {provide: Storage, useClass: IonicErrorHandler}, 
    Auth,
    Camera
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider) {
  }

  editing: boolean = false;
  userInfo: any;


  ionViewWillEnter() {
    this.getUserInfo()
  }

  onLogout() {
    // this.user.logoutUser(window.sessionStorage.getItem('token'))
    //   .subscribe( response => {
    //     console.log('onsubscibe-logout')
    //     window.sessionStorage.clear()
    //   })
  }

  getUserInfo() {
    this.user.getUser()
    .subscribe(response => {
      let data = response
      console.log('received user data')
      console.log(data)
      this.user.userData = response;
    })
  }


  allowEdit() {
    this.editing = true;
  }

  updateProfile() {
    this.editing = false;
    // let loader = this.loader.create({
    // })
    // loader.present()
    // this._user.updateUser()
    //   .subscribe(_ => {
    //     loader.dismiss();
    //     this.editting = false;
    //   }, err => {
    //     console.error(err)
    //     loader.dismiss()
    //     let toast = this.toastCtrl.create({
    //       message: 'Unable to update at this time',
    //       duration: 2000,
    //       position: 'top'
    //     });
    //     toast.present()
    //   })
  }

  //todo connect backend for update user object
  updateUser() {

  }

}

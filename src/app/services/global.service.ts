import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
//import { Network } from '@ionic-native/network/';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalURL = "http://www.myClinic.com/api/";
  public isNetwork = false;

  //constructor(public platform: Platform, private network: Network) { }
  constructor(public platform: Platform,private http: HttpClient) { }

 /* checkIsNetwork() {
    return new Promise(async (resolve, reject) => {
     if (this.platform.is('cordova')) {
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          console.log('network was disconnected :-(');
          this.isNetwork = false;
          resolve(this.isNetwork);
        });
        disconnectSubscription.unsubscribe();

        let connectSubscription = this.network.onConnect().subscribe(() => {
          console.log('network connected!');
          this.isNetwork = true;
          resolve(this.isNetwork);
        });
        connectSubscription.unsubscribe();
      } else {
        resolve(this.isNetwork);
      }
      resolve(this.isNetwork);
    })
  }*/
  checkIsNetwork() {
    return false;
  }
  checkIsNetwork2() {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Check network with /clinic server");
       
          await this.http.get(this.globalURL).subscribe(data => { 
            
            this.isNetwork = true;
            resolve(this.isNetwork);
           } , error => {
              console.error(error);
              this.isNetwork = false;
            resolve(this.isNetwork);
            });
      } catch (err) {
        this.isNetwork = false;
        console.log(err);
        resolve(this.isNetwork);
      } 
    });
  }
}

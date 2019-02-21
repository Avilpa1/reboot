import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
    console.log(this.list[0].title)
  }

  toggleSection(number){
    var x = document.getElementById(number);
    if( x.style.display === "initial" ){
      x.style.display = "none";
    } else if ( x.style.display === "none" ){
      x.style.display = "initial";
    }
  }

  slide(x) {
    this.slides.slideTo(x);
  }


  public list = [
    {
      title: 'Understanding the process of separating',
      section: 'Getting Out',
      subItems: [
        {
          subTitle: "Completing my paperwork",
          checkmark: true, 
        },
        {
          subTitle: "Completing my paperwork",
          checkmark: true,
        },
      ]
    },
    {
      title: "Mail stuff",
      section: 'Getting Out',
      subItems: [
        {
          subTitle: "Completing my paperwork",
          checkmark: true, 
        },
        {
          subTitle: "Completing my paperwork",
          checkmark: true,
        },
      ]
    }
  ]

  
}

import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {TimelineComponent} from '../../components/timeline/timeline';
import { TimelineItemComponent } from '../../components/timeline/timeline';
import { TimelineTimeComponent } from '../../components/timeline/timeline';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  toggleSection(number){
    var x = document.getElementById(number);
    if( x.style.display === "initial" ){
      x.style.display = "none";
    } else if ( x.style.display === "none" ){
      x.style.display = "initial";
    }
  }

  next() {
    console.log('next')
    // this.slides.slideNext();
  }
}

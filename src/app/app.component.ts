import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private  platform: Platform,) {
    this.initializeApp();
  }

initializeApp()
{
  this.platform.backButton.subscribeWithPriority(0, () => {
    if (window.location.pathname == "/home") {
      navigator['app'].exitApp();
    }
  });
}
}

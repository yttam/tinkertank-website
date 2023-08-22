import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public darkMode = false;

  constructor(private platform: Platform) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
    this.updateDarkMode();
    prefersDark.addEventListener('change', () => {
      this.darkMode = prefersDark.matches;
      this.updateDarkMode();
    });
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkTheme(event: any) {
    this.darkMode = event.detail.checked;
    this.updateDarkMode();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'villa-root',
  standalone: false,
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit, OnDestroy {
  showSplash = true;
  loadingProgress = 0;
  splashLogo = 'assets/images/logo.webp';

  private progressTimer?: ReturnType<typeof setInterval>;
  private completeTimer?: ReturnType<typeof setTimeout>;
  private hideTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.startSplashSequence();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  private startSplashSequence(): void {
    const durationMs = 2200;
    const startTime = Date.now();

    this.progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(96, Math.floor((elapsed / durationMs) * 100));
      this.loadingProgress = progress;
    }, 30);

    this.completeTimer = setTimeout(() => {
      this.loadingProgress = 100;
      this.hideTimer = setTimeout(() => {
        this.showSplash = false;
        this.clearTimers();
      }, 220);
    }, durationMs);
  }

  private clearTimers(): void {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = undefined;
    }

    if (this.completeTimer) {
      clearTimeout(this.completeTimer);
      this.completeTimer = undefined;
    }

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = undefined;
    }
  }
}

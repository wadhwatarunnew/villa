import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'villa-rewards-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards-stats.component.html',
  styleUrls: ['./rewards-stats.component.scss']
})
export class RewardsStatsComponent implements AfterViewInit, OnDestroy {
  // stats contain numeric targets and optional suffix so we can animate counts on load
  stats: Array<{ target: number; suffix?: string; label: string; iconPath: string; display: string }> = [
    {
      target: 10,
      suffix: '+',
      label: 'Years of Experience',
      iconPath:
        'M12 15.75l-3.09 1.624.59-3.441-2.5-2.437 3.454-.502L12 7.875l1.546 3.119 3.454.502-2.5 2.437.59 3.441L12 15.75z M7.5 21l4.5-2.25L16.5 21v-5.25 M5.25 10.5a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z',
      display: '0+'
    },
    {
      target: 500,
      suffix: '+',
      label: 'Projects Completed',
      iconPath: 'M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1 M4 8h16 M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8 M9 12h6',
      display: '0+'
    },
    {
      target: 40,
      suffix: '+',
      label: 'Countries Served',
      iconPath:
        'M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8 M3.6 15h16.8 M12 3c2 2.2 3 5.2 3 9s-1 6.8-3 9 M12 3c-2 2.2-3 5.2-3 9s1 6.8 3 9',
      display: '0+'
    },
    {
      target: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      iconPath: 'M12 21a9 9 0 100-18 9 9 0 000 18z M8.5 10h.01 M15.5 10h.01 M8.75 14a4.25 4.25 0 006.5 0',
      display: '0%'
    }
  ];

  private _rafId: number | null = null;
  private _observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    // Trigger animation when stats section appears in viewport for a smoother UX
    const host = document.querySelector('villa-rewards-stats');
    if (host && 'IntersectionObserver' in window) {
      this._observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          this._observer?.disconnect();
          this._observer = null;
        }
      }, { threshold: 0.2 });
      this._observer.observe(host);
    } else {
      // fallback: animate shortly after mount
      setTimeout(() => this.animateCounters(), 80);
    }
  }

  ngOnDestroy(): void {
    if (this._rafId) cancelAnimationFrame(this._rafId);
  }

  private animateCounters(duration = 2000) {
    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const raw = Math.min(1, (now - start) / duration);
      const t = easeOutCubic(raw);

      this.stats.forEach((s) => {
        const current = Math.round(s.target * t);
        // format with commas for large numbers
        const formatted = current.toLocaleString();
        s.display = `${formatted}${s.suffix ?? ''}`;
      });

      if (raw < 1) {
        this._rafId = requestAnimationFrame(step);
      } else {
        // ensure final exact values
        this.stats.forEach((s) => (s.display = `${s.target.toLocaleString()}${s.suffix ?? ''}`));
        this._rafId = null;
      }
    };

    this._rafId = requestAnimationFrame(step);
  }
}

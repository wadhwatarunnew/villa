import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'villa-rewards-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards-stats.component.html',
  styleUrls: ['./rewards-stats.component.scss']
})
export class RewardsStatsComponent implements AfterViewInit, OnDestroy {
  // stats contain numeric targets and optional suffix so we can animate counts on load
  defaultStats: Array<{ target: number; suffix?: string; label: string; iconName: string; display: string }> = [
    {
      target: 10,
      suffix: '+',
      label: 'Years of Experience',
      iconName: 'emoji_events',
      display: '0+'
    },
    {
      target: 20,
      suffix: '+',
      label: 'Projects Completed',
      iconName: 'work',
      display: '0+'
    },
    {
      target: 10,
      suffix: '+',
      label: 'Countries Served',
      iconName: 'public',
      display: '0+'
    },
    {
      target: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      iconName: 'thumb_up',
      display: '0%'
    }
  ];

  private _defaultStats = this.defaultStats;

  @Input()
  set stats(value: any[] | null | undefined) {
    this._defaultStats =
      value && value.length ? value : this.defaultStats;
  }

  get stats(): any[] {
    return this._defaultStats;
  }

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

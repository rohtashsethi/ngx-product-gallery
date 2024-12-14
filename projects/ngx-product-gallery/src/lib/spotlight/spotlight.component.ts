import { Component, HostListener, input, signal } from '@angular/core';
import { IImage } from '../ngx-product-gallery.model';

@Component({
  selector: 'ngx-spotlight',
  standalone: true,
  imports: [],
  templateUrl: './spotlight.component.html',
  styleUrl: './spotlight.component.css'
})
export class SpotlightComponent {
  readonly image = input.required<IImage | null>();
  readonly isTrackMouse = signal<boolean>(false);
  readonly backgroundPosition = signal<string>('0% 0%');

  onMousemove(event: MouseEvent): void{
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.backgroundPosition.set(`${x}% ${y}%`);

    this.isTrackMouse.set(true);
  }

  onMousLeave(event: MouseEvent): void {
    console.log(event);
    this.isTrackMouse.set(false);
  }
}

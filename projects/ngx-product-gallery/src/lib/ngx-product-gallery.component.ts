import { Component, effect, input, signal } from '@angular/core';
import { IImage } from './ngx-product-gallery.model';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { SpotlightComponent } from './spotlight/spotlight.component';

@Component({
  selector: 'ngx-product-gallery',
  standalone: true,
  imports: [ThumbnailComponent, SpotlightComponent],
  templateUrl: './ngx-product-gallery.component.html',
  styleUrls: ['./ngx-product-gallery.component.css']
})
export class NgxProductGalleryComponent {
  readonly images = input.required<IImage[]>();
  readonly selectedImage = signal<IImage | null>(null);

  constructor() {
    effect(() => {
      const images = this.images();
      this.selectedImage.set(images[0]);
    });
  }

  spotlightImage(item: IImage): void {
    this.selectedImage.set(item);
    console.log(item);
  }
}

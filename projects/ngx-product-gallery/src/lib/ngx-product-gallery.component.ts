import { Component, input } from '@angular/core';
import { IImage } from './ngx-product-gallery.model';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@Component({
  selector: 'ngx-product-gallery',
  standalone: true,
  imports: [ThumbnailComponent],
  templateUrl: './ngx-product-gallery.component.html',
  styleUrls: ['./ngx-product-gallery.component.css']
})
export class NgxProductGalleryComponent {
  readonly images = input.required<IImage[]>();
}

import { Component } from '@angular/core';
import { IImage } from '../../../../ngx-product-gallery/src/lib/ngx-product-gallery.model';
import { NgxProductGalleryComponent } from '../../../../ngx-product-gallery/src/public-api';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgxProductGalleryComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  images: IImage[] = [
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 1', id: 1 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 2', id: 2 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 3', id: 3 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 4', id: 4 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 5', id: 5 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 6', id: 6 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 7', id: 7 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 8', id: 8 },
    { thumbnail: 'https://picsum.photos/100', image: 'https://picsum.photos/400', altText: 'Image 9', id: 9 },
  ]
}

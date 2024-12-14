import { Component } from '@angular/core';
import { IImage } from '../../../../ngx-product-gallery/src/lib/ngx-product-gallery.model';
import { NgxProductGalleryComponent } from '../../../../ngx-product-gallery/src/public-api';
import { BrandingComponent } from '../branding/branding.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgxProductGalleryComponent, BrandingComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  images: IImage[] = [
    { thumbnail: 'https://picsum.photos/id/1/64', image: 'https://picsum.photos/id/1/1200', altText: 'Image 1', id: 1 },
    { thumbnail: 'https://picsum.photos/id/2/64', image: 'https://picsum.photos/id/2/1200', altText: 'Image 2', id: 2 },
    { thumbnail: 'https://picsum.photos/id/3/64', image: 'https://picsum.photos/id/3/1200', altText: 'Image 3', id: 3 },
    { thumbnail: 'https://picsum.photos/id/4/64', image: 'https://picsum.photos/id/4/1200', altText: 'Image 4', id: 4 },
    { thumbnail: 'https://picsum.photos/id/5/64', image: 'https://picsum.photos/id/5/1200', altText: 'Image 5', id: 5 },
    { thumbnail: 'https://picsum.photos/id/6/64', image: 'https://picsum.photos/id/6/1200', altText: 'Image 6', id: 6 },
    { thumbnail: 'https://picsum.photos/id/7/64', image: 'https://picsum.photos/id/7/1200', altText: 'Image 7', id: 7 },
    { thumbnail: 'https://picsum.photos/id/8/64', image: 'https://picsum.photos/id/8/1200', altText: 'Image 8', id: 8 },
    { thumbnail: 'https://picsum.photos/id/9/64', image: 'https://picsum.photos/id/9/1200', altText: 'Image 9', id: 9 },
  ]
}

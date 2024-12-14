import { Component, input } from '@angular/core';
import { IImage } from '../ngx-product-gallery.model';

@Component({
  selector: 'ngx-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.css'
})
export class ThumbnailComponent {
  readonly images = input.required<IImage[]>();
}

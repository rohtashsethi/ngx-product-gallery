import { Component, input, output } from '@angular/core';
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
  readonly selected = output<IImage>();

  onSelected(item: IImage): void {
    this.selected.emit(item);
  }
}

import { TestBed } from '@angular/core/testing';

import { NgxProductGalleryService } from './ngx-product-gallery.service';

describe('NgxProductGalleryService', () => {
  let service: NgxProductGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProductGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProductGalleryComponent } from './ngx-product-gallery.component';

describe('NgxProductGalleryComponent', () => {
  let component: NgxProductGalleryComponent;
  let fixture: ComponentFixture<NgxProductGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProductGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxProductGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecComponent } from './product-rec.component';

describe('ProductRecComponent', () => {
  let component: ProductRecComponent;
  let fixture: ComponentFixture<ProductRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

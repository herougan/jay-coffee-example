import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMessagerComponent } from './db-messager.component';

describe('DbMessagerComponent', () => {
  let component: DbMessagerComponent;
  let fixture: ComponentFixture<DbMessagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbMessagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbMessagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

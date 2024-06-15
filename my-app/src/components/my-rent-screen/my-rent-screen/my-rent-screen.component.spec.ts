import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentScreenComponent } from './my-rent-screen.component';

describe('MyRentScreenComponent', () => {
  let component: MyRentScreenComponent;
  let fixture: ComponentFixture<MyRentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRentScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyRentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

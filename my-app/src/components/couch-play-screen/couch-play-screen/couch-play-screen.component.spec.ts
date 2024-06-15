import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchPlayScreenComponent } from './couch-play-screen.component';

describe('CouchPlayScreenComponent', () => {
  let component: CouchPlayScreenComponent;
  let fixture: ComponentFixture<CouchPlayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouchPlayScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouchPlayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

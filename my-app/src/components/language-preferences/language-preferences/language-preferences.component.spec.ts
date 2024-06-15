import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePreferencesComponent } from './language-preferences.component';

describe('LanguagePreferencesComponent', () => {
  let component: LanguagePreferencesComponent;
  let fixture: ComponentFixture<LanguagePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagePreferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

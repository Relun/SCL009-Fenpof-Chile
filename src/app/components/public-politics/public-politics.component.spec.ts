import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPoliticsComponent } from './public-politics.component';

describe('PublicPoliticsComponent', () => {
  let component: PublicPoliticsComponent;
  let fixture: ComponentFixture<PublicPoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

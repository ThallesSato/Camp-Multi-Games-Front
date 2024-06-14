import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingFfaComponent } from './ranking-ffa.component';

describe('RankingFfaComponent', () => {
  let component: RankingFfaComponent;
  let fixture: ComponentFixture<RankingFfaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingFfaComponent]
    });
    fixture = TestBed.createComponent(RankingFfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

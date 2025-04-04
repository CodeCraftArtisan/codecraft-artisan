import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecraftHomePageComponent } from './codecraft-home-page.component';

describe('CodecraftHomePageComponent', () => {
  let component: CodecraftHomePageComponent;
  let fixture: ComponentFixture<CodecraftHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodecraftHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodecraftHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

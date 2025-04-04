import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecraftAboutUsComponent } from './codecraft-about-us.component';

describe('CodecraftAboutUsComponent', () => {
  let component: CodecraftAboutUsComponent;
  let fixture: ComponentFixture<CodecraftAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodecraftAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodecraftAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

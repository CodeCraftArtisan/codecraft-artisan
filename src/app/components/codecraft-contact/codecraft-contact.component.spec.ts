import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecraftContactComponent } from './codecraft-contact.component';

describe('CodecraftContactComponent', () => {
  let component: CodecraftContactComponent;
  let fixture: ComponentFixture<CodecraftContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodecraftContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodecraftContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

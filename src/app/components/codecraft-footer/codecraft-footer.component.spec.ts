import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodecraftFooter } from './codecraft-footer.component';


describe('CodecraftFooter', () => {
  let component: CodecraftFooter;
  let fixture: ComponentFixture<CodecraftFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodecraftFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodecraftFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

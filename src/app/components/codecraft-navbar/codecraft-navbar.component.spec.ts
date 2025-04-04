import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodecraftNavbar } from './codecraft-navbar.component';


describe('CodecraftNavbar', () => {
  let component: CodecraftNavbar;
  let fixture: ComponentFixture<CodecraftNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodecraftNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodecraftNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

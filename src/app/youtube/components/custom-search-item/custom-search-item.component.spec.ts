import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSearchItemComponent } from './custom-search-item.component';

describe('SearchItemComponent', () => {
  let component: CustomSearchItemComponent;
  let fixture: ComponentFixture<CustomSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSearchItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

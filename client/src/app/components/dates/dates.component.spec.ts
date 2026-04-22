import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatesComponent } from './dates.component';
import { DatesService } from '../../services/dates.service';
import { of, throwError } from 'rxjs';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;
  let datesService: DatesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatesComponent],
      imports: [HttpClientTestingModule],
      providers: [DatesService],
    }).compileComponents();

    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    datesService = TestBed.inject(DatesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load dates on initialization', () => {
    const mockDates = [
      { id: 1, date: '2026-04-21', description: 'Today' },
    ];
    spyOn(datesService, 'getDates').and.returnValue(of(mockDates));

    fixture.detectChanges();

    expect(component.dates).toEqual(mockDates);
    expect(component.loading).toBe(false);
  });

  it('should handle error when loading dates', () => {
    spyOn(datesService, 'getDates').and.returnValue(
      throwError(() => new Error('API Error'))
    );

    fixture.detectChanges();

    expect(component.error).toBeTruthy();
    expect(component.loading).toBe(false);
  });
});

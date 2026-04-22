import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatesService } from './dates.service';

describe('DatesService', () => {
  let service: DatesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatesService],
    });
    service = TestBed.inject(DatesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch dates from API', () => {
    const mockDates = [
      { id: 1, date: '2026-04-21', description: 'Today' },
      { id: 2, date: '2026-12-25', description: 'Christmas' },
    ];

    service.getDates().subscribe((dates) => {
      expect(dates).toEqual(mockDates);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/dates');
    expect(req.request.method).toBe('GET');
    req.flush(mockDates);
  });
});

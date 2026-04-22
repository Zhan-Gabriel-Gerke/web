import { Component, OnInit } from '@angular/core';
import { DatesService, DateItem } from '../../services/dates.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent implements OnInit {
  dates: DateItem[] = [];
  loading = true;
  error: string | null = null;

  constructor(private datesService: DatesService) {}

  ngOnInit(): void {
    this.loadDates();
  }

  loadDates(): void {
    this.loading = true;
    this.error = null;
    this.datesService.getDates().subscribe({
      next: (data) => {
        this.dates = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load dates from API';
        this.loading = false;
        console.error('Error fetching dates:', err);
      },
    });
  }
}

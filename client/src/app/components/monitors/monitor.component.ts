import { Component, OnInit } from '@angular/core';
import { MonitorService, MonitorItem } from 'src/app/services/monitors.service';

@Component({
    selector: 'app-monitors',
    templateUrl: './monitors.component.html',
    styleUrls: ['./monitors.component.scss'],
})
export class MonitorComponent implements OnInit {
    monitors: MonitorItem[] = [];
    loading = true;
    error: string | null = null;

    constructor(private monitorService: MonitorService) {}

    ngOnInit(): void {
        this.loadMonitors();
    }

    loadMonitors(): void {
        this.loading = true;
        this.error = null;
        this.monitorService.getMonitors().subscribe({
            next: (data) => {
                this.monitors = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load dates from API';
                this.loading = false;
                console.error("Error fetching monitors", err);
            }
        });
    }
}
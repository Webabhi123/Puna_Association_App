import { Component,AfterViewInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ManageEventService } from '../admin-module/manage-event/manage-event.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-eventcalendars',
  imports: [CommonModule,DatePipe],
  templateUrl: './eventcalendars.html',
  styleUrl: './eventcalendars.css'
})
export class Eventcalendars implements AfterViewInit {
  upcomingEvents: any[] = [];
  constructor(private manageEventService: ManageEventService) {}
  ngAfterViewInit(): void {
    const calendarEl = document.getElementById('calendar') as HTMLElement | null;

    if (!calendarEl) {
      console.error("Calendar element not found");
      return;
    }

    this.manageEventService.getAllEvents().subscribe((apiEvents: any[]) => {
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);

      this.upcomingEvents = apiEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= nextWeek;
      });
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        height: 550,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        events: apiEvents.map(event => ({
          title: event.title,
          start: event.date, // or event.start
          color: event.type === 'Holiday' ? '#f7b731' : '#3498db',
          allDay: true
        }))
      });

      calendar.render();
    });
  }
}

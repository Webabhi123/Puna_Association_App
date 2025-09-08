import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';// for FullCalendar!
import interactionPlugin from '@fullcalendar/interaction';
import  dayGridPlugin from '@fullcalendar/daygrid';
import { ManageEventService } from '../manage-event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapLoaderService } from '../../bootstrap-loader.service';
declare var bootstrap: any;

@Component({
  selector: 'app-event',
  imports: [CommonModule,FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css'
})
export class Event implements AfterViewInit {

  event:any={};
  isEdit:boolean = false;
  calendar:any;
  constructor(private manageEventService: ManageEventService,
    private bootstrapLoader: BootstrapLoaderService) {}
  ngOnInit() {
    this.bootstrapLoader.loadBootstrap(); 
  }
  ngAfterViewInit(): void {
    const calendarEl = document.getElementById('calendar') as HTMLElement | null;

    if (!calendarEl) {
      console.error("Calendar element not found");
      return;
    }

    // Fetch events from API
    this.manageEventService.getAllEvents().subscribe((apiEvents: any[]) => {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        height: 600,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        events: apiEvents.map(event => ({
          id: event.id,
          title: event.title,
          start: event.date,
          allDay: true,
          color: event.type === 'Holiday' ? '#f7b731' : '#3498db',
          extendedProps: {
            type: event.type,
            description: event.description
          }
        })),
        dateClick: (info: any) => {
          this.event = { date: info.dateStr, title: '', type: 'Holiday' };
          this.isEdit = false;
          this.showModal();
        },
        eventClick: (info: any) => {
          this.event = {
          id: info.event.id,
          title: info.event.title,
          date: info.event.startStr,  // or format as needed
          type: info.event.extendedProps.type
          };
          this.isEdit = true;
          this.showModal();
        }
      });

      this.calendar.render();
    });
  }
  showModal() {
    //debugger;
    console.log('showModal called');
    const modal = document.getElementById('eventModal') as any;
    if (modal) {
      // If using Bootstrap 5
      //debugger;
      const bsModal = new (window as any).bootstrap.Modal(modal);
      bsModal.show();
    }
  }
   refreshCalendar() {
    // Refetch events from API and rerender
    this.manageEventService.getAllEvents().subscribe((apiEvents: any[]) => {
      this.calendar.removeAllEvents();
      apiEvents.forEach(event => this.calendar.addEvent(event));
    });
  }

  submitEvent() {
    if (this.isEdit) {
      this.manageEventService.updateEvent(this.event.id,this.event).subscribe(() => this.refreshCalendar());
    } else {
      this.manageEventService.createEvent(this.event).subscribe(() => this.refreshCalendar());
    }
  }
  deleteEvent() {
  if (confirm("Are you sure you want to delete this event?")) {
    this.manageEventService.deleteEventById(this.event.id).subscribe(() => {
      this.refreshCalendar();
      const modal = document.getElementById('eventModal');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        bsModal.hide();
      }
    });
  }
}

}


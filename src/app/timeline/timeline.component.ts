import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TimelineEntry {
  date: string;
  note: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-timeline',
  imports: [FormsModule, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements AfterViewInit {
  entries: TimelineEntry[] = [];
  selectedDate: string = '';
  note: string = '';
  imageUrl: string = '';
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;

  showNotes: boolean = false;

toggleNotesVisibility() {
  this.showNotes = true;
}

  ngAfterViewInit() {
  const stored = localStorage.getItem('timelineData');
  if (stored) this.entries = JSON.parse(stored);

  // Optional: auto scroll to today
  const today = new Date().toISOString().slice(0, 10);
  setTimeout(() => this.scrollToDate(today), 300);
}


  addEntry() {
    if (!this.selectedDate) return;
    const existing = this.entries.find(e => e.date === this.selectedDate);
    if (existing) {
      existing.note = this.note;
      existing.imageUrl = this.imageUrl;
    } else {
      this.entries.push({ date: this.selectedDate, note: this.note, imageUrl: this.imageUrl });
    }
    this.note = '';
    this.imageUrl = '';
    localStorage.setItem('timelineData', JSON.stringify(this.entries));
  }

  scrollToDate(date: string) {
    const el = document.getElementById('entry-' + date);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

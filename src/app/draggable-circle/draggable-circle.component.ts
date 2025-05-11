import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-draggable-circle',
  imports: [CommonModule, FormsModule],
  templateUrl: './draggable-circle.component.html',
  styleUrls: ['./draggable-circle.component.css']
})
export class DraggableCircleComponent {
  @Input() text: string = 'Drag Me';
  @Input() isDragging: boolean = false;
  @Output() dragStart = new EventEmitter<DragEvent>();
  @Output() dragEnd = new EventEmitter<DragEvent>();
  @Output() textUpdated = new EventEmitter<string>();

  onDragStart(event: DragEvent) {
    this.dragStart.emit(event);
    event.dataTransfer?.setData('text/plain', 'circle');
  }

  onDragEnd(event: DragEvent) {
    this.dragEnd.emit(event);
  }

  onBlur(event: FocusEvent) {
    const el = event.target as HTMLElement;
    this.textUpdated.emit(el.innerText.trim());
  }
}

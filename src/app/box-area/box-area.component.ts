import { Component } from '@angular/core';
import { DraggableCircleComponent } from "../draggable-circle/draggable-circle.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-area',
  templateUrl: './box-area.component.html',
  styleUrls: ['./box-area.component.css'],
  imports: [DraggableCircleComponent, CommonModule, FormsModule]
})
export class BoxAreaComponent {
  boxes = ['box1', 'box2', 'box3'];
  circleLocation = 'box1';
  circleText = 'Edit me';
  isDragging = false;

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, boxId: string) {
    event.preventDefault();
    if (event.dataTransfer?.getData('text/plain') === 'circle') {
      this.circleLocation = boxId;
    }
    this.isDragging = false;
  }

  onDragStart(event: DragEvent) {
    this.isDragging = true;
    event.dataTransfer?.setData('text/plain', 'circle');
  }

  onDragEnd(event: DragEvent) {
    this.isDragging = false;
  }

  updateText(newText: string) {
    this.circleText = newText || 'Edit me';
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content">
        <p>{{ message }}</p>
        <button (click)="closeModal()">Cerrar</button>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
      }
    `,
  ],
})
export class ModalComponent {
  @Input() message: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}

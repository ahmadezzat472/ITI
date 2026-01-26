import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
export type ModalType = 'default' | 'danger';
@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Modal {
  @Input() modalId: string = 'modal-dialog';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() size: ModalSize = 'md';
  @Input() type: ModalType = 'default';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = true;
  @Input() confirmText: string = 'Confirm';
  @Input() isLoading: boolean = false;
  @Input() icon?: 'warning' | 'success' | 'info' | 'danger';
  @Input() ConfirmButtonDisabled: boolean = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  get sizeClasses(): string {
    const sizes = {
      sm: 'sm:max-w-md',
      md: 'sm:max-w-lg',
      lg: 'sm:max-w-2xl',
      xl: 'sm:max-w-4xl',
    };
    return sizes[this.size];
  }

  get iconClasses(): string {
    if (!this.icon) return '';

    const icons = {
      warning: 'bg-warning-500/10 ring-warning-500/20 text-warning-400',
      success: 'bg-success-500/10 ring-success-500/20 text-success-400',
      info: 'bg-primary-500/10 ring-primary-500/20 text-primary-400',
      danger: 'bg-danger-500/10 ring-danger-500/20 text-danger-400',
    };
    return icons[this.icon];
  }

  get confirmButtonClass(): string {
    return this.type === 'danger' ? 'btn-danger' : 'btn-primary';
  }

  onConfirm(): void {
    if (!this.isLoading) {
      this.confirm.emit();
    }
  }

  onCancel(): void {
    if (!this.isLoading) {
      this.cancel.emit();
    }
  }

  onClose(): void {
    this.closed.emit();
  }
}

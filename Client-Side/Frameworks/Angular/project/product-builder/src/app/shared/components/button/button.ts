import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost' =
    'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const classes: string[] = [];

    // Variant classes
    const variantMap = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
    };
    classes.push(variantMap[this.variant]);

    // Size classes
    const sizeMap = {
      sm: '!px-3 !py-1.5 !text-xs',
      md: '', // default size
      lg: '!px-6 !py-3 !text-base',
    };
    if (sizeMap[this.size]) {
      classes.push(sizeMap[this.size]);
    }

    // Full width
    if (this.fullWidth) {
      classes.push('w-full');
    }

    // Additional flex classes for content alignment
    classes.push('inline-flex items-center justify-center');

    return classes.filter(Boolean).join(' ');
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}

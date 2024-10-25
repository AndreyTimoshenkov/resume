import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { ITech } from '../../interfaces/tech.interface';

@Component({
  selector: 'cv-stack',
  standalone: true,
  imports: [
    ChipModule
  ],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackComponent {
  @Input() stack: ITech[];
}

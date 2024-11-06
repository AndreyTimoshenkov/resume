import {Component, Input} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {IProject} from '../../interfaces/portfolio.interface';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {StackComponent} from "../stack/stack.component";
import {CardModule} from 'primeng/card';


@Component({
  selector: 'cv-portfolio-item',
  standalone: true,
  imports: [
    GalleriaModule, FormsModule, ButtonModule, StackComponent, CardModule
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.less'
})
export class PortfolioItemComponent {
  @Input() project: IProject;

  get pics() {
    return this.project?.pics;
  }

  redirectToWebsite(site: string) {
    window.open(site);
  }
}

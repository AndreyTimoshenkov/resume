import { Component, Input } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'cv-company',
  standalone: true,
  imports: [ AvatarModule, ButtonModule, ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.less'
})
export class CompanyComponent {
  @Input() company: ICompany;

  redirectToWebsite(site: string) {
    window.open(site);
  }
}

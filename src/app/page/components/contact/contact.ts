import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Footer } from "../../../shared/components/footer/footer";
import { Icon } from "../../../shared/components/icon/icon";
import { Icons } from '../../../shared/components/icon/icon.model';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, FormsModule, Icon],
  templateUrl: './contact.html'
})
export class Contact {
  Icons = Icons;

  form: ContactForm = { name: '', email: '', message: '' };
  submitted = signal(false);

  onSubmit(): void {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted.set(true);
      this.form = { name: '', email: '', message: '' };
    }
  }
}


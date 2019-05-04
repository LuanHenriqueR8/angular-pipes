import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'Angular Pipes';
  public form: FormGroup;
  public file: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: [],
      justification: []
    });
  }

  onFileChanged(event: any): void {
    event.target.files ? this.file = event.target.files : null;
  }

}

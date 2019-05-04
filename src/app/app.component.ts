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
  public file: any = [];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      photo: []
    });
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    for (const file of this.file) {
      formData.append(name, file, file.name);
    }

    // just an example how this file will be send to the api
    // this.http.post('url', formData).subscribe(x => ....);
  }

}

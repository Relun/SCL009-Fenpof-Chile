import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedFile : File = null;

  constructor(private http : HttpClientModule) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log("selectedFile.name" );
    console.log( this.selectedFile.name);
    console.log("event");
    console.log( event);
    console.log("selectFile");
    console.log(this.selectedFile);

  }

  onUpload() {
    const fd = new FormData();
    const x = fd.append('image',this.selectedFile, this.selectedFile.name)
    console.log(x);
    console.log(fd);

    console.log("apreto btn ");
    console.log(this.http);
  }




}

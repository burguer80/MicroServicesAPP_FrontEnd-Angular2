import { Component } from '@angular/core';
import { Document } from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "First description",
      file_url: "file.doc",
      updated_at: "11/11/16",
      image_url: "imageurl.jpg"
    },
    {
      title: "My second Doc",
      description: "second description",
      file_url: "secondfile.doc",
      updated_at: "11/12/16",
      image_url: "secondimageurl.jpg"
    },
    {
      title: "My third Doc",
      description: "third description",
      file_url: "thirdfile.doc",
      updated_at: "11/12/16",
      image_url: "thirdimageurl.jpg"
    }
  ]
}

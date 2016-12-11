import { Component } from '@angular/core';
import { Document } from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "First description",
      file_url: "file.doc",
      updated_at: "11/11/16",
      image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
    },
    {
      title: "My second Doc",
      description: "second description",
      file_url: "secondfile.doc",
      updated_at: "11/12/16",
      image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
    },
    {
      title: "My third Doc",
      description: "third description",
      file_url: "thirdfile.doc",
      updated_at: "11/12/16",
      image_url: "http://lorempixel.com/output/business-q-g-640-480-5.jpg"
    }
  ]
}

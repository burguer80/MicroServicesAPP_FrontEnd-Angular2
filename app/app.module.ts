import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalService } from './proposal/proposal.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  declarations: [
    HomepageComponent,
    AppComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  providers:[
    DocumentService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksDomainFacadeService } from './service/books-domain-facade.service';

@NgModule({
  imports: [CommonModule],
  providers: [BooksDomainFacadeService],
})
export class DemoBooksDomainModule {}

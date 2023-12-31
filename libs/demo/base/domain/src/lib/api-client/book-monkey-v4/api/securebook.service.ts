/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/**
 * BookMonkey 4 API
 * **DEMO**  This is a demo backend for serving books. All data is erased after some inactivity.
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { Observable } from 'rxjs';

import { Book } from '../model/book';
import { Rating } from '../model/rating';

import { Configuration } from '../configuration';
import { BASE_PATH } from '../variables';

@Injectable()
export class SecurebookService {
  protected basePath = 'https://localhost';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns whether ISBN exists or not (secured)
   *
   * @param isbn ISBN of the book
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookIsbnCheckGet(
    isbn: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBookIsbnCheckGet(
    isbn: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBookIsbnCheckGet(
    isbn: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBookIsbnCheckGet(
    isbn: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (isbn === null || isbn === undefined) {
      throw new Error(
        'Required parameter isbn was null or undefined when calling secureBookIsbnCheckGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/secure/book/${encodeURIComponent(String(isbn))}/check`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Deletes a book (secured)
   *
   * @param isbn ISBN of the book to delete
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookIsbnDelete(
    isbn: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBookIsbnDelete(
    isbn: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBookIsbnDelete(
    isbn: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBookIsbnDelete(
    isbn: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (isbn === null || isbn === undefined) {
      throw new Error(
        'Required parameter isbn was null or undefined when calling secureBookIsbnDelete.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(
      `${this.basePath}/secure/book/${encodeURIComponent(String(isbn))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Returns a single book by ISBN (secured)
   *
   * @param isbn ISBN of the book
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookIsbnGet(
    isbn: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Book>;
  public secureBookIsbnGet(
    isbn: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Book>>;
  public secureBookIsbnGet(
    isbn: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Book>>;
  public secureBookIsbnGet(
    isbn: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (isbn === null || isbn === undefined) {
      throw new Error(
        'Required parameter isbn was null or undefined when calling secureBookIsbnGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Book>(
      `${this.basePath}/secure/book/${encodeURIComponent(String(isbn))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Updates an existing book (secured)
   * Requires a full book entry, ISBN in query and body must match
   * @param isbn ISBN of the book to update
   * @param book An existing book to update
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookIsbnPut(
    isbn: string,
    book: Book,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBookIsbnPut(
    isbn: string,
    book: Book,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBookIsbnPut(
    isbn: string,
    book: Book,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBookIsbnPut(
    isbn: string,
    book: Book,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (isbn === null || isbn === undefined) {
      throw new Error(
        'Required parameter isbn was null or undefined when calling secureBookIsbnPut.'
      );
    }

    if (book === null || book === undefined) {
      throw new Error(
        'Required parameter book was null or undefined when calling secureBookIsbnPut.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<any>(
      `${this.basePath}/secure/book/${encodeURIComponent(String(isbn))}`,
      book,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Updates rating of a book to a given value (secured)
   *
   * @param isbn ISBN of the book
   * @param rating The new rating value for the given book
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookIsbnRatePost(
    isbn: string,
    rating: Rating,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBookIsbnRatePost(
    isbn: string,
    rating: Rating,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBookIsbnRatePost(
    isbn: string,
    rating: Rating,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBookIsbnRatePost(
    isbn: string,
    rating: Rating,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (isbn === null || isbn === undefined) {
      throw new Error(
        'Required parameter isbn was null or undefined when calling secureBookIsbnRatePost.'
      );
    }

    if (rating === null || rating === undefined) {
      throw new Error(
        'Required parameter rating was null or undefined when calling secureBookIsbnRatePost.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<any>(
      `${this.basePath}/secure/book/${encodeURIComponent(String(isbn))}/rate`,
      rating,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Creates a new book (secured)
   *
   * @param book A new book to be stored
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBookPost(
    book: Book,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBookPost(
    book: Book,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBookPost(
    book: Book,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBookPost(
    book: Book,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (book === null || book === undefined) {
      throw new Error(
        'Required parameter book was null or undefined when calling secureBookPost.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<any>(`${this.basePath}/secure/book`, book, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * Resets store to initial state (secured)
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBooksDelete(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<any>;
  public secureBooksDelete(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public secureBooksDelete(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public secureBooksDelete(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(`${this.basePath}/secure/books`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * Get all books (secured)
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBooksGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<Book>>;
  public secureBooksGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<Book>>>;
  public secureBooksGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<Book>>>;
  public secureBooksGet(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<Book>>(`${this.basePath}/secure/books`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * Get all books matching the given search term (case insensitive). The properties isbn, title, authors, published (interpreted as ISO string), subtitle and description are evaluated for a match. (secured)
   *
   * @param searchTerm search term (treated case insensitive)
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public secureBooksSearchSearchTermGet(
    searchTerm: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<Book>>;
  public secureBooksSearchSearchTermGet(
    searchTerm: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<Book>>>;
  public secureBooksSearchSearchTermGet(
    searchTerm: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<Book>>>;
  public secureBooksSearchSearchTermGet(
    searchTerm: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (searchTerm === null || searchTerm === undefined) {
      throw new Error(
        'Required parameter searchTerm was null or undefined when calling secureBooksSearchSearchTermGet.'
      );
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];

    return this.httpClient.get<Array<Book>>(
      `${this.basePath}/secure/books/search/${encodeURIComponent(
        String(searchTerm)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}

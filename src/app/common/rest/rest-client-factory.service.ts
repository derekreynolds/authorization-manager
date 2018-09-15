import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from './rest.service';

/**
 * @class - Allows the user to regsiter a {@link RestService} for an {@link Entity}.
 * The client can then use it to retrieve the {@link RestService} for an entity.
 */
@Injectable()
export class RestClientFactoryService {

  private factory = new Map<string, RestService<any>>();

  constructor(private httpClient: HttpClient) { }

  /**
   * Register an {@link Entity}. It will create a {@link RestService} for that 
   * {@link Entity}. 
   * 
   * @param {Object} - the instance of type {@link T}. This is a model.
   * @param {string} - the Uri for the {@link RestService}.
   */
  register<T>(entity: T, uri: string) {
  	let restService = new RestService<T>(this.httpClient);
  	restService.setUri(uri);
  	this.factory.set(entity.constructor.name, restService);
  }

  /**
   * Gets the  {@link RestService} for an entity {@link T}.
   * @param  {Object} - type of object.
   * @return {RestService<T>} - the {@link RestService} for the entity {@link T}
   */
  get<T>(entity: T): RestService<T> {
  	return this.factory.get(entity.constructor.name);
  }

}

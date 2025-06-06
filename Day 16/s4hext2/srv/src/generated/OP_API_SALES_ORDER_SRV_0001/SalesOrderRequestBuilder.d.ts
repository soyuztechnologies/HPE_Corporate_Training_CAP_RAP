/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrder } from './SalesOrder';
/**
 * Request builder class for operations supported on the {@link SalesOrder} entity.
 */
export declare class SalesOrderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrder<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrder` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrder` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrder<T>, T>;
  /**
   * Returns a request builder for creating a `SalesOrder` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrder`.
   */
  create(entity: SalesOrder<T>): CreateRequestBuilder<SalesOrder<T>, T>;
  /**
   * Returns a request builder for retrieving one `SalesOrder` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrder.salesOrder}.
   * @returns A request builder for creating requests to retrieve one `SalesOrder` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrder<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrder`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrder`.
   */
  update(entity: SalesOrder<T>): UpdateRequestBuilder<SalesOrder<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrder`.
   * @param salesOrder Key property. See {@link SalesOrder.salesOrder}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrder`.
   */
  delete(salesOrder: string): DeleteRequestBuilder<SalesOrder<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrder`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrder` by taking the entity as a parameter.
   */
  delete(entity: SalesOrder<T>): DeleteRequestBuilder<SalesOrder<T>, T>;
}

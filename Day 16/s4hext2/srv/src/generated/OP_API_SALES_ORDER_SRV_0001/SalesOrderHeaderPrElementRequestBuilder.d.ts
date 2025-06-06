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
import { SalesOrderHeaderPrElement } from './SalesOrderHeaderPrElement';
/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderPrElement} entity.
 */
export declare class SalesOrderHeaderPrElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderPrElement<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaderPrElement` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderPrElement` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for creating a `SalesOrderHeaderPrElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderPrElement`.
   */
  create(
    entity: SalesOrderHeaderPrElement<T>
  ): CreateRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderPrElement` entity based on its keys.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPrElement.salesOrder}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderPrElement` entity based on its keys.
   */
  getByKey(
    salesOrder: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderPrElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderPrElement`.
   */
  update(
    entity: SalesOrderHeaderPrElement<T>
  ): UpdateRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPrElement`.
   * @param salesOrder Key property. See {@link SalesOrderHeaderPrElement.salesOrder}.
   * @param pricingProcedureStep Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link SalesOrderHeaderPrElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPrElement`.
   */
  delete(
    salesOrder: string,
    pricingProcedureStep: string,
    pricingProcedureCounter: string
  ): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderPrElement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderPrElement` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderPrElement<T>
  ): DeleteRequestBuilder<SalesOrderHeaderPrElement<T>, T>;
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderTextApi } from './SalesOrderTextApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
/**
 * This class represents the entity "A_SalesOrderText" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderTextType<T>
{
  /**
   * Technical entity name for SalesOrderText.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SalesOrderText entity.
   */
  static _keys: string[];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   */
  language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  constructor(_entityApi: SalesOrderTextApi<T>);
}
export interface SalesOrderTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}

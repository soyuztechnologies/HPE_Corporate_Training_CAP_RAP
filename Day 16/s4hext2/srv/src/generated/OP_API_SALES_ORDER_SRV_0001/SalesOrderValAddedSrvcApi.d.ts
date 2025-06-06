/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderValAddedSrvc } from './SalesOrderValAddedSrvc';
import { SalesOrderValAddedSrvcRequestBuilder } from './SalesOrderValAddedSrvcRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderValAddedSrvcApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderValAddedSrvc<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SalesOrderValAddedSrvcApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof SalesOrderValAddedSrvc;
  requestBuilder(): SalesOrderValAddedSrvcRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SalesOrderValAddedSrvc<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SalesOrderValAddedSrvc<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SalesOrderValAddedSrvc,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    VALUE_ADDED_SERVICE_TYPE: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SUB_SERVICE_TYPE: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAL_ADDED_SRVC_TRANSACTION_NUMBER: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_GROUP: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_PRODUCT: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VAL_ADDED_SRVC_INCREMENT: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_CHARGE_CODE: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_IS_CREATED_MANUALLY: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER_IN_SD: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_IS_RLVT_FOR_PROCMT: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_1: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_2: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_3: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_LONG_TEXT: OrderableEdmTypeField<
      SalesOrderValAddedSrvc<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesOrderValAddedSrvc<DeSerializers>>;
  };
}

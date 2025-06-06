/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsOrdPaymentPlanItemDetails } from './SlsOrdPaymentPlanItemDetails';
import { SlsOrdPaymentPlanItemDetailsRequestBuilder } from './SlsOrdPaymentPlanItemDetailsRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SlsOrdPaymentPlanItemDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SlsOrdPaymentPlanItemDetails<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): SlsOrdPaymentPlanItemDetailsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this;
  entityConstructor: typeof SlsOrdPaymentPlanItemDetails;
  requestBuilder(): SlsOrdPaymentPlanItemDetailsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SlsOrdPaymentPlanItemDetails<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SlsOrdPaymentPlanItemDetails<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SlsOrdPaymentPlanItemDetails,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_PLAN_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_PLAN: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_TYPE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_VALIDITY_START_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    E_PAYT_VALIDITY_END_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_HOLDER_NAME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    AUTHORIZATION_CURRENCY: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_BY_DIGITAL_PAYT_SRVC: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_BY_ACQUIRER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_DATE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    AUTHORIZATION_TIME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    AUTHORIZATION_STATUS_NAME: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_BY_DIGITAL_PAYMENT_SRVC: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_PAYMENT_CALL_STATUS: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_AUTHORIZATION_RESULT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_PAYT_TO_BE_AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    E_PAYT_AUTHORIZATION_IS_EXPIRED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    E_PAYT_AMOUNT_IS_CHANGED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PREAUTHORIZATION_IS_REQUESTED: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_SERVICE_PROVIDER: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BY_PAYMENT_SERVICE_PRVDR: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_BY_PAYT_SRVC_PRVDR: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANT_BY_CLEARING_HOUSE: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_AUTHZN_RELATION_ID: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_TO_BE_AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PAYT_PLN_FOR_AUTHORIZATION_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM: OrderableEdmTypeField<
      SlsOrdPaymentPlanItemDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrdPaymentPlanItemDetails<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SlsOrdPaymentPlanItemDetails<DeSerializers>>;
  };
}

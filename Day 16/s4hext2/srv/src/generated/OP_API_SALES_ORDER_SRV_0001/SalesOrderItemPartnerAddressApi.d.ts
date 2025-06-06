/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItemPartnerAddress } from './SalesOrderItemPartnerAddress';
import { SalesOrderItemPartnerAddressRequestBuilder } from './SalesOrderItemPartnerAddressRequestBuilder';
import { SalesOrderItemPartnerApi } from './SalesOrderItemPartnerApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
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
export declare class SalesOrderItemPartnerAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItemPartnerAddress<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderItemPartnerAddressApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SalesOrderItemPartnerApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SalesOrderItemPartnerAddress;
  requestBuilder(): SalesOrderItemPartnerAddressRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SalesOrderItemPartnerAddress<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SalesOrderItemPartnerAddress<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SalesOrderItemPartnerAddress,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_REPRESENTATION_CODE: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESSEE_FULL_NAME: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_1: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_2: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_3: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_4: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_PREFIX_NAME_1: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_PREFIX_NAME_2: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_SUFFIX_NAME_1: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_SUFFIX_NAME_2: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_JURISDICTION: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_ZONE: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_POSTAL_CODE: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE_COUNTRY: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER_COUNTRY: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_EXTENSION_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER_COUNTRY: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_AREA_CODE_SUBSCRIBER_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_EXTENSION_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPartnerAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER: OneToOneLink<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemPartnerAddress<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItemPartnerAddress<DeSerializers>>;
  };
}

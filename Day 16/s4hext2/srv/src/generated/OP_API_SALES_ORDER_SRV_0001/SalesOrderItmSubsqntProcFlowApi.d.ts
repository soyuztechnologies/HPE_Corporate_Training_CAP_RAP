/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItmSubsqntProcFlow } from './SalesOrderItmSubsqntProcFlow';
import { SalesOrderItmSubsqntProcFlowRequestBuilder } from './SalesOrderItmSubsqntProcFlowRequestBuilder';
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
export declare class SalesOrderItmSubsqntProcFlowApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesOrderItmSubsqntProcFlow<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderItmSubsqntProcFlowApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SalesOrderItmSubsqntProcFlow;
  requestBuilder(): SalesOrderItmSubsqntProcFlowRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SalesOrderItmSubsqntProcFlow<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SalesOrderItmSubsqntProcFlow<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SalesOrderItmSubsqntProcFlow,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SUBSEQUENT_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_FLOW_LEVEL: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_TRANSFER_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRELIM_BILLING_DOCUMENT_STATUS: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOC_ITEM: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSQNT_DOC_ITM_PRECDG_DOC_CATEGORY: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesOrderItmSubsqntProcFlow<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItmSubsqntProcFlow<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItmSubsqntProcFlow<DeSerializers>>;
  };
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItem } from './SalesOrderItem';
import { SalesOrderItemRequestBuilder } from './SalesOrderItemRequestBuilder';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SalesOrderItemPartnerApi } from './SalesOrderItemPartnerApi';
import { SalesOrderItmPrecdgProcFlowApi } from './SalesOrderItmPrecdgProcFlowApi';
import { SalesOrderItemPrElementApi } from './SalesOrderItemPrElementApi';
import { SalesOrderItemRelatedObjectApi } from './SalesOrderItemRelatedObjectApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';
import { SalesOrderItmSubsqntProcFlowApi } from './SalesOrderItmSubsqntProcFlowApi';
import { SalesOrderItemTextApi } from './SalesOrderItemTextApi';
import { SalesOrderValAddedSrvcApi } from './SalesOrderValAddedSrvcApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderItem<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SalesOrderItemApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SalesOrderItemBillingPlanApi<DeSerializersT>,
      SalesOrderItemPartnerApi<DeSerializersT>,
      SalesOrderItmPrecdgProcFlowApi<DeSerializersT>,
      SalesOrderItemPrElementApi<DeSerializersT>,
      SalesOrderItemRelatedObjectApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderScheduleLineApi<DeSerializersT>,
      SalesOrderItmSubsqntProcFlowApi<DeSerializersT>,
      SalesOrderItemTextApi<DeSerializersT>,
      SalesOrderValAddedSrvcApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SalesOrderItem;
  requestBuilder(): SalesOrderItemRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SalesOrderItem<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SalesOrderItem<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SalesOrderItem, DeSerializersT>;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIGHER_LEVEL_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIGHER_LEVEL_ITEM_USAGE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ITEM_CATEGORY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ITEM_TEXT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_BY_CUSTOMER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_BY_SHIP_TO_PARTY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERLYING_PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINALLY_REQUESTED_MATERIAL: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_BY_CUSTOMER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PRICING_REFERENCE_MATERIAL: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REQUESTED_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFD_DELIV_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_GROSS_WEIGHT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_NET_WEIGHT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_WEIGHT_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WEIGHT_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WEIGHT_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_VOLUME_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TOTAL_SD_DOC_REFERENCE_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_REFERENCE_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_SUBSTITUTION_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_PRICING_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_4: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_5: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_DOCUMENT_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONTRACT_ACCOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_VALUE_DAYS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICES_RENDERED_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BATCH: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_PLANT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_PLANT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTV_BSD_CONF_SUBSTITUTION_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_POINT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_TYPE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_PRIORITY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE_QUANTITY_IS_FIXED: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELIVERY_DATE_TYPE_RULE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_4: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_5: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_6: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_7: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_8: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_9: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATL_ACCOUNT_ASSIGNMENT_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_VALUE_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DOCUMENT_RJCN_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BILLING_BLOCK_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    WBS_ELEMENT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REFERENCE_SD_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_SD_DOCUMENT_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPNC_EXTERNAL_REFERENCE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_CORRESPNC_EXTERNAL_REFERENCE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONDITION_GROUP_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONDITION_GROUP_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONDITION_GROUP_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONDITION_GROUP_4: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONDITION_GROUP_5: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_RELATED_BILLING_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBTOTAL_1_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_2_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_3_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_4_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_5_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_6_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_SEASON_YEAR: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLLECTION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_THEME: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEASON_COMPLETENESS_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FASHION_CANCEL_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PRODUCT_CHARACTERISTIC_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CHARACTERISTIC_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CHARACTERISTIC_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_GROUP_NUMBER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_GROUP_RULE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_PLANT_CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CATEGORY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_SEGMENT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPrecedingProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRECEDING_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmPrecdgProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPricingElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRICING_ELEMENT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPrElementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toRelatedObject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_RELATED_OBJECT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemRelatedObjectApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toScheduleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SCHEDULE_LINE: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderScheduleLineApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSubsequentProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUBSEQUENT_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmSubsqntProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_TEXT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toValueAddedService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUE_ADDED_SERVICE: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderValAddedSrvcApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItem<DeSerializers>>;
  };
}

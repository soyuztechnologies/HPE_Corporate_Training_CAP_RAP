/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderValAddedSrvc } from './SalesOrderValAddedSrvc';
import { SalesOrderValAddedSrvcRequestBuilder } from './SalesOrderValAddedSrvcRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderValAddedSrvcApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderValAddedSrvc<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SalesOrderValAddedSrvcApi<DeSerializersT> {
    return new SalesOrderValAddedSrvcApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesOrderValAddedSrvc;

  requestBuilder(): SalesOrderValAddedSrvcRequestBuilder<DeSerializersT> {
    return new SalesOrderValAddedSrvcRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderValAddedSrvc<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderValAddedSrvc<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderValAddedSrvc<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SalesOrderValAddedSrvc,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderValAddedSrvc,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link valueAddedServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedSubServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SUB_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedSubServiceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'SalesOrderItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valAddedSrvcTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcTransactionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceProduct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcHasToBeOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcHasToBeOrdered',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_INCREMENT: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIncrement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcIsCreatedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_IS_CREATED_MANUALLY: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIsCreatedManually',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumberInSd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER_IN_SD: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumberInSD',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcIsRlvtForProcmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_IS_RLVT_FOR_PROCMT: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIsRlvtForProcmt',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_1: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_2: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_3: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceLongText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_LONG_TEXT: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceLongText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderValAddedSrvc)
      };
    }

    return this._schema;
  }
}

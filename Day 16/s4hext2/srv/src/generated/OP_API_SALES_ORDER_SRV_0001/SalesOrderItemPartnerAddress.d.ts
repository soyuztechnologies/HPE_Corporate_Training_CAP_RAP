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
import type { SalesOrderItemPartnerAddressApi } from './SalesOrderItemPartnerAddressApi';
import {
  SalesOrderItemPartner,
  SalesOrderItemPartnerType
} from './SalesOrderItemPartner';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
/**
 * This class represents the entity "A_SalesOrderItemPartnerAddress" of service "API_SALES_ORDER_SRV".
 */
export declare class SalesOrderItemPartnerAddress<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderItemPartnerAddressType<T>
{
  /**
   * Technical entity name for SalesOrderItemPartnerAddress.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SalesOrderItemPartnerAddress entity.
   */
  static _keys: string[];
  /**
   * Sales and Distribution Document Number.
   * Maximum length: 10.
   */
  salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Item number of the SD document.
   * Maximum length: 6.
   */
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Version ID for International Addresses.
   * Maximum length: 1.
   */
  addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name of Person.
   * Maximum length: 80.
   * @nullable
   */
  addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1.
   * Maximum length: 40.
   * @nullable
   */
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 3.
   * Maximum length: 40.
   * @nullable
   */
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 4.
   * Maximum length: 40.
   * @nullable
   */
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City postal code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 2.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box.
   * Maximum length: 10.
   * @nullable
   */
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E-Mail Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItemPartner} entity.
   */
  toPartner?: SalesOrderItemPartner<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  toSalesOrderItem?: SalesOrderItem<T> | null;
  constructor(_entityApi: SalesOrderItemPartnerAddressApi<T>);
}
export interface SalesOrderItemPartnerAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  addressRepresentationCode: DeserializedType<T, 'Edm.String'>;
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
  mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  toPartner?: SalesOrderItemPartnerType<T> | null;
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}

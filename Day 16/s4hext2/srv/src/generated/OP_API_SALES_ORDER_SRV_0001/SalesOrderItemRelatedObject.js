"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObject = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SalesOrderItemRelatedObject" of service "API_SALES_ORDER_SRV".
 */
class SalesOrderItemRelatedObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SalesOrderItemRelatedObject = SalesOrderItemRelatedObject;
/**
 * Technical entity name for SalesOrderItemRelatedObject.
 */
SalesOrderItemRelatedObject._entityName = 'A_SalesOrderItemRelatedObject';
/**
 * Default url path for the according service.
 */
SalesOrderItemRelatedObject._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
/**
 * All key fields of the SalesOrderItemRelatedObject entity.
 */
SalesOrderItemRelatedObject._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'SDDocRelatedObjectSequenceNmbr'
];
//# sourceMappingURL=SalesOrderItemRelatedObject.js.map
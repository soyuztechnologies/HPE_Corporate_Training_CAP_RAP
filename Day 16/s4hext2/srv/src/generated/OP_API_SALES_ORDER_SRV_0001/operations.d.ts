/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { FunctionResult } from './FunctionResult';
/**
 * Type of the parameters to be passed to {@link rejectApprovalRequest}.
 */
export interface RejectApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order.
   */
  salesOrder?: string | null;
}
/**
 * Reject Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function rejectApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RejectApprovalRequestParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  RejectApprovalRequestParameters<DeSerializersT>,
  FunctionResult
>;
/**
 * Type of the parameters to be passed to {@link releaseApprovalRequest}.
 */
export interface ReleaseApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order.
   */
  salesOrder?: string | null;
}
/**
 * Release Approval Request.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function releaseApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseApprovalRequestParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ReleaseApprovalRequestParameters<DeSerializersT>,
  FunctionResult
>;
export declare const operations: {
  rejectApprovalRequest: typeof rejectApprovalRequest;
  releaseApprovalRequest: typeof releaseApprovalRequest;
};

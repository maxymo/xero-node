/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HistoryRecord } from './historyRecord';

export class HistoryRecords {
    'historyRecords'?: Array<HistoryRecord>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "historyRecords",
            "baseName": "HistoryRecords",
            "type": "Array<HistoryRecord>"
        }    ];

    static getAttributeTypeMap() {
        return HistoryRecords.attributeTypeMap;
    }
}


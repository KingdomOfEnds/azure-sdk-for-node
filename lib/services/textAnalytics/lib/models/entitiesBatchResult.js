/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a EntitiesBatchResult.
 */
class EntitiesBatchResult {
  /**
   * Create a EntitiesBatchResult.
   * @member {array} [documents]
   * @member {array} [errors]
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntitiesBatchResult
   *
   * @returns {object} metadata of EntitiesBatchResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntitiesBatchResult',
      type: {
        name: 'Composite',
        className: 'EntitiesBatchResult',
        modelProperties: {
          documents: {
            required: false,
            readOnly: true,
            serializedName: 'documents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntitiesBatchResultItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'EntitiesBatchResultItem'
                  }
              }
            }
          },
          errors: {
            required: false,
            readOnly: true,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorRecordElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorRecord'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EntitiesBatchResult;
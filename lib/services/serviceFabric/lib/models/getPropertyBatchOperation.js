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
 * Represents a PropertyBatchOperation that gets the specified property if it
 * exists.
 * Note that if one PropertyBatchOperation in a PropertyBatch fails,
 * the entire batch fails and cannot be committed in a transactional manner.
 *
 * @extends models['PropertyBatchOperation']
 */
class GetPropertyBatchOperation extends models['PropertyBatchOperation'] {
  /**
   * Create a GetPropertyBatchOperation.
   * @member {boolean} [includeValue] Whether or not to return the property
   * value with the metadata.
   * True if values should be returned with the metadata; False to return only
   * property metadata. Default value: false .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of GetPropertyBatchOperation
   *
   * @returns {object} metadata of GetPropertyBatchOperation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Get',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'PropertyBatchOperation',
        className: 'GetPropertyBatchOperation',
        modelProperties: {
          propertyName: {
            required: true,
            serializedName: 'PropertyName',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          includeValue: {
            required: false,
            serializedName: 'IncludeValue',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = GetPropertyBatchOperation;

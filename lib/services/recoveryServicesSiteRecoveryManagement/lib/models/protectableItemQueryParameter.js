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

/**
 * Query parameter to enumerate Protectable items.
 *
 */
class ProtectableItemQueryParameter {
  /**
   * Create a ProtectableItemQueryParameter.
   * @member {string} [state] State of the Protectable item query filter.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProtectableItemQueryParameter
   *
   * @returns {object} metadata of ProtectableItemQueryParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectableItemQueryParameter',
      type: {
        name: 'Composite',
        className: 'ProtectableItemQueryParameter',
        modelProperties: {
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectableItemQueryParameter;
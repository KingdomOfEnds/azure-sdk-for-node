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
 * The Resource model definition for a nested resource.
 *
 */
class SubResource {
  /**
   * Create a SubResource.
   * @member {string} [id] Resource Id
   * @member {string} [name] Resource name
   * @member {string} [type] Resource type
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubResource
   *
   * @returns {object} metadata of SubResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubResource',
      type: {
        name: 'Composite',
        className: 'SubResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubResource;

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
 * Description of a Service Fabric property.
 *
 */
class PropertyDescription {
  /**
   * Create a PropertyDescription.
   * @member {string} propertyName The name of the Service Fabric property.
   * @member {string} [customTypeId] The property's custom type ID. Using this
   * property, the user is able to tag the type of the value of the property.
   * @member {object} value Describes a Service Fabric property value.
   * @member {string} [value.kind] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyDescription
   *
   * @returns {object} metadata of PropertyDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyDescription',
      type: {
        name: 'Composite',
        className: 'PropertyDescription',
        modelProperties: {
          propertyName: {
            required: true,
            serializedName: 'PropertyName',
            type: {
              name: 'String'
            }
          },
          customTypeId: {
            required: false,
            serializedName: 'CustomTypeId',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'Value',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'Kind',
                clientName: 'kind'
              },
              uberParent: 'PropertyValue',
              className: 'PropertyValue'
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyDescription;

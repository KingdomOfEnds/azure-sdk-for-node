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
 * Base properties for any build step.
 *
 */
class BuildStepProperties {
  /**
   * Create a BuildStepProperties.
   * @member {string} [provisioningState] The provisioning state of the build
   * step. Possible values include: 'Creating', 'Updating', 'Deleting',
   * 'Succeeded', 'Failed', 'Canceled'
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of BuildStepProperties
   *
   * @returns {object} metadata of BuildStepProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildStepProperties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'BuildStepProperties',
        className: 'BuildStepProperties',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildStepProperties;

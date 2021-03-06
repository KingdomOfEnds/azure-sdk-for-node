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
 * Azure Firewall FQDN Tag Resource
 *
 * @extends models['Resource']
 */
class AzureFirewallFqdnTag extends models['Resource'] {
  /**
   * Create a AzureFirewallFqdnTag.
   * @member {string} [provisioningState] The provisioning state of the
   * resource.
   * @member {string} [fqdnTagName] The name of this FQDN Tag.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureFirewallFqdnTag
   *
   * @returns {object} metadata of AzureFirewallFqdnTag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureFirewallFqdnTag',
      type: {
        name: 'Composite',
        className: 'AzureFirewallFqdnTag',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
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
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          fqdnTagName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.fqdnTagName',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureFirewallFqdnTag;

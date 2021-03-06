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
 * Network trace
 *
 */
class NetworkTrace {
  /**
   * Create a NetworkTrace.
   * @member {string} [path] Local file path for the captured network trace
   * file.
   * @member {string} [status] Current status of the network trace operation,
   * same as Operation.Status (InProgress/Succeeded/Failed).
   * @member {string} [message] Detailed message of a network trace operation,
   * e.g. error message in case of failure.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkTrace
   *
   * @returns {object} metadata of NetworkTrace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkTrace',
      type: {
        name: 'Composite',
        className: 'NetworkTrace',
        modelProperties: {
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkTrace;

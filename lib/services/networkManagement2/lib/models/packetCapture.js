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
 * Parameters that define the create packet capture operation.
 *
 */
class PacketCapture {
  /**
   * Create a PacketCapture.
   * @member {string} target The ID of the targeted resource, only VM is
   * currently supported.
   * @member {number} [bytesToCapturePerPacket] Number of bytes captured per
   * packet, the remaining bytes are truncated. Default value: 0 .
   * @member {number} [totalBytesPerSession] Maximum size of the capture
   * output. Default value: 1073741824 .
   * @member {number} [timeLimitInSeconds] Maximum duration of the capture
   * session in seconds. Default value: 18000 .
   * @member {object} storageLocation
   * @member {string} [storageLocation.storageId] The ID of the storage account
   * to save the packet capture session. Required if no local file path is
   * provided.
   * @member {string} [storageLocation.storagePath] The URI of the storage path
   * to save the packet capture. Must be a well-formed URI describing the
   * location to save the packet capture.
   * @member {string} [storageLocation.filePath] A valid local path on the
   * targeting VM. Must include the name of the capture file (*.cap). For linux
   * virtual machine it must start with /var/captures. Required if no storage
   * ID is provided, otherwise optional.
   * @member {array} [filters]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PacketCapture
   *
   * @returns {object} metadata of PacketCapture
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PacketCapture',
      type: {
        name: 'Composite',
        className: 'PacketCapture',
        modelProperties: {
          target: {
            required: true,
            serializedName: 'properties.target',
            type: {
              name: 'String'
            }
          },
          bytesToCapturePerPacket: {
            required: false,
            serializedName: 'properties.bytesToCapturePerPacket',
            defaultValue: 0,
            type: {
              name: 'Number'
            }
          },
          totalBytesPerSession: {
            required: false,
            serializedName: 'properties.totalBytesPerSession',
            defaultValue: 1073741824,
            type: {
              name: 'Number'
            }
          },
          timeLimitInSeconds: {
            required: false,
            serializedName: 'properties.timeLimitInSeconds',
            defaultValue: 18000,
            type: {
              name: 'Number'
            }
          },
          storageLocation: {
            required: true,
            serializedName: 'properties.storageLocation',
            type: {
              name: 'Composite',
              className: 'PacketCaptureStorageLocation'
            }
          },
          filters: {
            required: false,
            serializedName: 'properties.filters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PacketCaptureFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'PacketCaptureFilter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PacketCapture;

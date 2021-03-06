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
 * Information about the image store content.
 *
 */
class ImageStoreContent {
  /**
   * Create a ImageStoreContent.
   * @member {array} [storeFiles] The list of image store file info objects
   * represents files found under the given image store relative path.
   * @member {array} [storeFolders] The list of image store folder info objects
   * represents subfolders found under the given image store relative path.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageStoreContent
   *
   * @returns {object} metadata of ImageStoreContent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageStoreContent',
      type: {
        name: 'Composite',
        className: 'ImageStoreContent',
        modelProperties: {
          storeFiles: {
            required: false,
            serializedName: 'StoreFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FileInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'FileInfo'
                  }
              }
            }
          },
          storeFolders: {
            required: false,
            serializedName: 'StoreFolders',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FolderInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'FolderInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageStoreContent;

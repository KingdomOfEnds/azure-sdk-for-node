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
 * Metric properties.
 *
 */
class MetricProperties {
  /**
   * Create a MetricProperties.
   * @member {object} [serviceSpecification] The service specifications.
   * @member {array} [serviceSpecification.metricSpecifications] List of metric
   * specifications.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricProperties
   *
   * @returns {object} metadata of MetricProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricProperties',
      type: {
        name: 'Composite',
        className: 'MetricProperties',
        modelProperties: {
          serviceSpecification: {
            required: false,
            serializedName: 'serviceSpecification',
            type: {
              name: 'Composite',
              className: 'ServiceSpecification'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricProperties;
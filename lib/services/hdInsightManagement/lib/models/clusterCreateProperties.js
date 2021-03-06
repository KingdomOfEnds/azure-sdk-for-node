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
 * The cluster create parameters.
 *
 */
class ClusterCreateProperties {
  /**
   * Create a ClusterCreateProperties.
   * @member {string} [clusterVersion] The version of the cluster.
   * @member {string} [osType] The type of operating system. Possible values
   * include: 'Windows', 'Linux'
   * @member {string} [tier] The cluster tier. Possible values include:
   * 'Standard', 'Premium'
   * @member {object} [clusterDefinition] The cluster definition.
   * @member {string} [clusterDefinition.blueprint] The link to the blueprint.
   * @member {string} [clusterDefinition.kind] The type of cluster.
   * @member {object} [clusterDefinition.componentVersion] The versions of
   * different services in the cluster.
   * @member {object} [clusterDefinition.configurations] The cluster
   * configurations.
   * @member {object} [securityProfile] The security profile.
   * @member {string} [securityProfile.directoryType] The directory type.
   * Possible values include: 'ActiveDirectory'
   * @member {string} [securityProfile.domain] The organization's active
   * directory domain.
   * @member {string} [securityProfile.organizationalUnitDN] The organizational
   * unit within the Active Directory to place the cluster and service
   * accounts.
   * @member {array} [securityProfile.ldapsUrls] The LDAPS protocol URLs to
   * communicate with the Active Directory.
   * @member {string} [securityProfile.domainUsername] The domain user account
   * that will have admin privileges on the cluster.
   * @member {string} [securityProfile.domainUserPassword] The domain admin
   * password.
   * @member {array} [securityProfile.clusterUsersGroupDNs] Optional. The
   * Distinguished Names for cluster user groups
   * @member {string} [securityProfile.aaddsResourceId] The resource ID of the
   * user's Azure Active Directory Domain Service.
   * @member {string} [securityProfile.msiResourceId] User assigned identity
   * that has permissions to read and create cluster-related artifacts in the
   * user's AADDS.
   * @member {object} [computeProfile] The compute profile.
   * @member {array} [computeProfile.roles] The list of roles in the cluster.
   * @member {object} [storageProfile] The storage profile.
   * @member {array} [storageProfile.storageaccounts] The list of storage
   * accounts in the cluster.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClusterCreateProperties
   *
   * @returns {object} metadata of ClusterCreateProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClusterCreateProperties',
      type: {
        name: 'Composite',
        className: 'ClusterCreateProperties',
        modelProperties: {
          clusterVersion: {
            required: false,
            serializedName: 'clusterVersion',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Windows', 'Linux' ]
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'Enum',
              allowedValues: [ 'Standard', 'Premium' ]
            }
          },
          clusterDefinition: {
            required: false,
            serializedName: 'clusterDefinition',
            type: {
              name: 'Composite',
              className: 'ClusterDefinition'
            }
          },
          securityProfile: {
            required: false,
            serializedName: 'securityProfile',
            type: {
              name: 'Composite',
              className: 'SecurityProfile'
            }
          },
          computeProfile: {
            required: false,
            serializedName: 'computeProfile',
            type: {
              name: 'Composite',
              className: 'ComputeProfile'
            }
          },
          storageProfile: {
            required: false,
            serializedName: 'storageProfile',
            type: {
              name: 'Composite',
              className: 'StorageProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = ClusterCreateProperties;

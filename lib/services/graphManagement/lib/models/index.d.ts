/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the GraphError class.
 * @constructor
 * Active Directory error information.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message value.
 */
export interface GraphError {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the DirectoryObject class.
 * @constructor
 * Represents an Azure Active Directory object.
 *
 * @member {string} [objectId] The object ID.
 * @member {date} [deletionTimestamp] The time at which the directory object
 * was deleted.
 * @member {string} objectType Polymorphic Discriminator
 */
export interface DirectoryObject {
  readonly objectId?: string;
  readonly deletionTimestamp?: Date;
  objectType: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the KeyCredential class.
 * @constructor
 * Active Directory Key Credential information.
 *
 * @member {date} [startDate] Start date.
 * @member {date} [endDate] End date.
 * @member {string} [value] Key value.
 * @member {string} [keyId] Key ID.
 * @member {string} [usage] Usage. Acceptable values are 'Verify' and 'Sign'.
 * @member {string} [type] Type. Acceptable values are 'AsymmetricX509Cert' and
 * 'Symmetric'.
 * @member {buffer} [customKeyIdentifier] Custom Key Identifier
 */
export interface KeyCredential {
  startDate?: Date;
  endDate?: Date;
  value?: string;
  keyId?: string;
  usage?: string;
  type?: string;
  customKeyIdentifier?: Buffer;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the PasswordCredential class.
 * @constructor
 * Active Directory Password Credential information.
 *
 * @member {date} [startDate] Start date.
 * @member {date} [endDate] End date.
 * @member {string} [keyId] Key ID.
 * @member {string} [value] Key value.
 */
export interface PasswordCredential {
  startDate?: Date;
  endDate?: Date;
  keyId?: string;
  value?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ResourceAccess class.
 * @constructor
 * Specifies an OAuth 2.0 permission scope or an app role that an application
 * requires. The resourceAccess property of the RequiredResourceAccess type is
 * a collection of ResourceAccess.
 *
 * @member {string} id The unique identifier for one of the OAuth2Permission or
 * AppRole instances that the resource application exposes.
 * @member {string} [type] Specifies whether the id property references an
 * OAuth2Permission or an AppRole. Possible values are "scope" or "role".
 */
export interface ResourceAccess {
  id: string;
  type?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the RequiredResourceAccess class.
 * @constructor
 * Specifies the set of OAuth 2.0 permission scopes and app roles under the
 * specified resource that an application requires access to. The specified
 * OAuth 2.0 permission scopes may be requested by client applications (through
 * the requiredResourceAccess collection) when calling a resource application.
 * The requiredResourceAccess property of the Application entity is a
 * collection of ReqiredResourceAccess.
 *
 * @member {array} resourceAccess The list of OAuth2.0 permission scopes and
 * app roles that the application requires from the specified resource.
 * @member {string} [resourceAppId] The unique identifier for the resource that
 * the application requires access to. This should be equal to the appId
 * declared on the target resource application.
 */
export interface RequiredResourceAccess {
  resourceAccess: ResourceAccess[];
  resourceAppId?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ApplicationCreateParameters class.
 * @constructor
 * Request parameters for creating a new application.
 *
 * @member {boolean} availableToOtherTenants Whether the application is
 * available to other tenants.
 * @member {string} displayName The display name of the application.
 * @member {string} [homepage] The home page of the application.
 * @member {array} identifierUris A collection of URIs for the application.
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 * @member {array} [keyCredentials] The list of KeyCredential objects.
 * @member {array} [passwordCredentials] The list of PasswordCredential
 * objects.
 * @member {boolean} [oauth2AllowImplicitFlow] Whether to allow implicit grant
 * flow for OAuth2
 * @member {array} [requiredResourceAccess] Specifies resources that this
 * application requires access to and the set of OAuth permission scopes and
 * application roles that it needs under each of those resources. This
 * pre-configuration of required resource access drives the consent experience.
 */
export interface ApplicationCreateParameters {
  availableToOtherTenants: boolean;
  displayName: string;
  homepage?: string;
  identifierUris: string[];
  replyUrls?: string[];
  keyCredentials?: KeyCredential[];
  passwordCredentials?: PasswordCredential[];
  oauth2AllowImplicitFlow?: boolean;
  requiredResourceAccess?: RequiredResourceAccess[];
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ApplicationUpdateParameters class.
 * @constructor
 * Request parameters for updating an existing application.
 *
 * @member {boolean} [availableToOtherTenants] Whether the application is
 * available to other tenants
 * @member {string} [displayName] The display name of the application.
 * @member {string} [homepage] The home page of the application.
 * @member {array} [identifierUris] A collection of URIs for the application.
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 * @member {array} [keyCredentials] The list of KeyCredential objects.
 * @member {array} [passwordCredentials] The list of PasswordCredential
 * objects.
 * @member {boolean} [oauth2AllowImplicitFlow] Whether to allow implicit grant
 * flow for OAuth2
 * @member {array} [requiredResourceAccess] Specifies resources that this
 * application requires access to and the set of OAuth permission scopes and
 * application roles that it needs under each of those resources. This
 * pre-configuration of required resource access drives the consent experience.
 */
export interface ApplicationUpdateParameters {
  availableToOtherTenants?: boolean;
  displayName?: string;
  homepage?: string;
  identifierUris?: string[];
  replyUrls?: string[];
  keyCredentials?: KeyCredential[];
  passwordCredentials?: PasswordCredential[];
  oauth2AllowImplicitFlow?: boolean;
  requiredResourceAccess?: RequiredResourceAccess[];
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the AppRole class.
 * @constructor
 * @member {string} [id] Unique role identifier inside the appRoles collection.
 * @member {array} [allowedMemberTypes] Specifies whether this app role
 * definition can be assigned to users and groups by setting to 'User', or to
 * other applications (that are accessing this application in daemon service
 * scenarios) by setting to 'Application', or to both.
 * @member {string} [description] Permission help text that appears in the
 * admin app assignment and consent experiences.
 * @member {string} [displayName] Display name for the permission that appears
 * in the admin consent and app assignment experiences.
 * @member {boolean} [isEnabled] When creating or updating a role definition,
 * this must be set to true (which is the default). To delete a role, this must
 * first be set to false. At that point, in a subsequent call, this role may be
 * removed.
 * @member {string} [value] Specifies the value of the roles claim that the
 * application should expect in the authentication and access tokens.
 */
export interface AppRole {
  id?: string;
  allowedMemberTypes?: string[];
  description?: string;
  displayName?: string;
  isEnabled?: boolean;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Active Directory application information.
 *
 * @member {string} [appId] The application ID.
 * @member {array} [appRoles] The collection of application roles that an
 * application may declare. These roles can be assigned to users, groups or
 * service principals.
 * @member {array} [appPermissions] The application permissions.
 * @member {boolean} [availableToOtherTenants] Whether the application is be
 * available to other tenants.
 * @member {string} [displayName] The display name of the application.
 * @member {array} [identifierUris] A collection of URIs for the application.
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 * @member {string} [homepage] The home page of the application.
 * @member {boolean} [oauth2AllowImplicitFlow] Whether to allow implicit grant
 * flow for OAuth2
 */
export interface Application extends DirectoryObject {
  appId?: string;
  appRoles?: AppRole[];
  appPermissions?: string[];
  availableToOtherTenants?: boolean;
  displayName?: string;
  identifierUris?: string[];
  replyUrls?: string[];
  homepage?: string;
  oauth2AllowImplicitFlow?: boolean;
}

/**
 * @class
 * Initializes a new instance of the AddOwnerParameters class.
 * @constructor
 * Request parameters for adding a owner to an application.
 *
 * @member {string} url A owner object URL, such as
 * "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd",
 * where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and
 * "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the owner (user,
 * application, servicePrincipal, group) to be added.
 */
export interface AddOwnerParameters {
  url: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ApplicationAddOwnerParameters class.
 * @constructor
 */
export interface ApplicationAddOwnerParameters extends AddOwnerParameters {
}

/**
 * @class
 * Initializes a new instance of the KeyCredentialsUpdateParameters class.
 * @constructor
 * Request parameters for a KeyCredentials update operation
 *
 * @member {array} value A collection of KeyCredentials.
 */
export interface KeyCredentialsUpdateParameters {
  value: KeyCredential[];
}

/**
 * @class
 * Initializes a new instance of the PasswordCredentialsUpdateParameters class.
 * @constructor
 * Request parameters for a PasswordCredentials update operation.
 *
 * @member {array} value A collection of PasswordCredentials.
 */
export interface PasswordCredentialsUpdateParameters {
  value: PasswordCredential[];
}

/**
 * @class
 * Initializes a new instance of the AADObject class.
 * @constructor
 * The properties of an Active Directory object.
 *
 * @member {string} [objectId] The ID of the object.
 * @member {string} [objectType] The type of AAD object.
 * @member {string} [displayName] The display name of the object.
 * @member {string} [userPrincipalName] The principal name of the object.
 * @member {string} [mail] The primary email address of the object.
 * @member {boolean} [mailEnabled] Whether the AAD object is mail-enabled.
 * @member {string} [mailNickname] The mail alias for the user.
 * @member {boolean} [securityEnabled] Whether the AAD object is
 * security-enabled.
 * @member {string} [signInName] The sign-in name of the object.
 * @member {array} [servicePrincipalNames] A collection of service principal
 * names associated with the object.
 * @member {string} [userType] The user type of the object.
 * @member {string} [usageLocation] A two letter country code (ISO standard
 * 3166). Required for users that will be assigned licenses due to legal
 * requirement to check for availability of services in countries. Examples
 * include: "US", "JP", and "GB".
 * @member {string} [appId] The application ID.
 * @member {array} [appPermissions] The application permissions.
 * @member {boolean} [availableToOtherTenants] Whether the application is be
 * available to other tenants.
 * @member {array} [identifierUris] A collection of URIs for the application.
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 * @member {string} [homepage] The home page of the application.
 */
export interface AADObject {
  objectId?: string;
  objectType?: string;
  displayName?: string;
  userPrincipalName?: string;
  mail?: string;
  mailEnabled?: boolean;
  readonly mailNickname?: string;
  securityEnabled?: boolean;
  signInName?: string;
  servicePrincipalNames?: string[];
  userType?: string;
  readonly usageLocation?: string;
  readonly appId?: string;
  readonly appPermissions?: string[];
  readonly availableToOtherTenants?: boolean;
  readonly identifierUris?: string[];
  readonly replyUrls?: string[];
  readonly homepage?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the GroupAddMemberParameters class.
 * @constructor
 * Request parameters for adding a member to a group.
 *
 * @member {string} url A member object URL, such as
 * "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd",
 * where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and
 * "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user,
 * application, servicePrincipal, group) to be added.
 */
export interface GroupAddMemberParameters {
  url: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the GroupCreateParameters class.
 * @constructor
 * Request parameters for creating a new group.
 *
 * @member {string} displayName Group display name
 * @member {string} mailNickname Mail nickname
 */
export interface GroupCreateParameters {
  displayName: string;
  mailNickname: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ADGroup class.
 * @constructor
 * Active Directory group information.
 *
 * @member {string} [displayName] The display name of the group.
 * @member {boolean} [mailEnabled] Whether the group is mail-enabled. Must be
 * false. This is because only pure security groups can be created using the
 * Graph API.
 * @member {string} [mailNickname] The mail alias for the group.
 * @member {boolean} [securityEnabled] Whether the group is security-enable.
 * @member {string} [mail] The primary email address of the group.
 */
export interface ADGroup extends DirectoryObject {
  displayName?: string;
  mailEnabled?: boolean;
  mailNickname?: string;
  securityEnabled?: boolean;
  mail?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupGetMemberGroupsParameters class.
 * @constructor
 * Request parameters for GetMemberGroups API call.
 *
 * @member {boolean} securityEnabledOnly If true, only membership in
 * security-enabled groups should be checked. Otherwise, membership in all
 * groups should be checked.
 */
export interface GroupGetMemberGroupsParameters {
  securityEnabledOnly: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the CheckGroupMembershipParameters class.
 * @constructor
 * Request parameters for IsMemberOf API call.
 *
 * @member {string} groupId The object ID of the group to check.
 * @member {string} memberId The object ID of the contact, group, user, or
 * service principal to check for membership in the specified group.
 */
export interface CheckGroupMembershipParameters {
  groupId: string;
  memberId: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the CheckGroupMembershipResult class.
 * @constructor
 * Server response for IsMemberOf API call
 *
 * @member {boolean} [value] True if the specified user, group, contact, or
 * service principal has either direct or transitive membership in the
 * specified group; otherwise, false.
 */
export interface CheckGroupMembershipResult {
  value?: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ServicePrincipalCreateParameters class.
 * @constructor
 * Request parameters for creating a new service principal.
 *
 * @member {string} appId application Id
 * @member {boolean} accountEnabled Whether the account is enabled
 * @member {array} [keyCredentials] A collection of KeyCredential objects.
 * @member {array} [passwordCredentials] A collection of PasswordCredential
 * objects
 */
export interface ServicePrincipalCreateParameters {
  appId: string;
  accountEnabled: boolean;
  keyCredentials?: KeyCredential[];
  passwordCredentials?: PasswordCredential[];
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the ServicePrincipal class.
 * @constructor
 * Active Directory service principal information.
 *
 * @member {string} [displayName] The display name of the service principal.
 * @member {string} [appId] The application ID.
 * @member {array} [appRoles] The collection of application roles that an
 * application may declare. These roles can be assigned to users, groups or
 * service principals.
 * @member {array} [servicePrincipalNames] A collection of service principal
 * names.
 */
export interface ServicePrincipal extends DirectoryObject {
  displayName?: string;
  appId?: string;
  appRoles?: AppRole[];
  servicePrincipalNames?: string[];
}

/**
 * @class
 * Initializes a new instance of the PasswordProfile class.
 * @constructor
 * The password profile associated with a user.
 *
 * @member {string} password Password
 * @member {boolean} [forceChangePasswordNextLogin] Whether to force a password
 * change on next login.
 */
export interface PasswordProfile {
  password: string;
  forceChangePasswordNextLogin?: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the UserBase class.
 * @constructor
 * @member {string} [immutableId] This must be specified if you are using a
 * federated domain for the user's userPrincipalName (UPN) property when
 * creating a new user account. It is used to associate an on-premises Active
 * Directory user account with their Azure AD user object.
 * @member {string} [usageLocation] A two letter country code (ISO standard
 * 3166). Required for users that will be assigned licenses due to legal
 * requirement to check for availability of services in countries. Examples
 * include: "US", "JP", and "GB".
 * @member {string} [givenName] The given name for the user.
 * @member {string} [surname] The user's surname (family name or last name).
 * @member {string} [userType] A string value that can be used to classify user
 * types in your directory, such as 'Member' and 'Guest'. Possible values
 * include: 'Member', 'Guest'
 */
export interface UserBase {
  immutableId?: string;
  usageLocation?: string;
  givenName?: string;
  surname?: string;
  userType?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the UserCreateParameters class.
 * @constructor
 * Request parameters for creating a new work or school account user.
 *
 * @member {boolean} accountEnabled Whether the account is enabled.
 * @member {string} displayName The display name of the user.
 * @member {object} passwordProfile Password Profile
 * @member {string} [passwordProfile.password] Password
 * @member {boolean} [passwordProfile.forceChangePasswordNextLogin] Whether to
 * force a password change on next login.
 * @member {string} userPrincipalName The user principal name
 * (someuser@contoso.com). It must contain one of the verified domains for the
 * tenant.
 * @member {string} mailNickname The mail alias for the user.
 * @member {string} [mail] The primary email address of the user.
 */
export interface UserCreateParameters extends UserBase {
  accountEnabled: boolean;
  displayName: string;
  passwordProfile: PasswordProfile;
  userPrincipalName: string;
  mailNickname: string;
  mail?: string;
}

/**
 * @class
 * Initializes a new instance of the UserUpdateParameters class.
 * @constructor
 * Request parameters for updating an existing work or school account user.
 *
 * @member {boolean} [accountEnabled] Whether the account is enabled.
 * @member {string} [displayName] The display name of the user.
 * @member {object} [passwordProfile] The password profile of the user.
 * @member {string} [passwordProfile.password] Password
 * @member {boolean} [passwordProfile.forceChangePasswordNextLogin] Whether to
 * force a password change on next login.
 * @member {string} [userPrincipalName] The user principal name
 * (someuser@contoso.com). It must contain one of the verified domains for the
 * tenant.
 * @member {string} [mailNickname] The mail alias for the user.
 */
export interface UserUpdateParameters extends UserBase {
  accountEnabled?: boolean;
  displayName?: string;
  passwordProfile?: PasswordProfile;
  userPrincipalName?: string;
  mailNickname?: string;
}

/**
 * @class
 * Initializes a new instance of the SignInName class.
 * @constructor
 * Contains information about a sign-in name of a local account user in an
 * Azure Active Directory B2C tenant.
 *
 * @member {string} [type] A string value that can be used to classify user
 * sign-in types in your directory, such as 'emailAddress' or 'userName'.
 * @member {string} [value] The sign-in used by the local account. Must be
 * unique across the company/tenant. For example, 'johnc@example.com'.
 */
export interface SignInName {
  type?: string;
  value?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the User class.
 * @constructor
 * Active Directory user information.
 *
 * @member {string} [immutableId] This must be specified if you are using a
 * federated domain for the user's userPrincipalName (UPN) property when
 * creating a new user account. It is used to associate an on-premises Active
 * Directory user account with their Azure AD user object.
 * @member {string} [usageLocation] A two letter country code (ISO standard
 * 3166). Required for users that will be assigned licenses due to legal
 * requirement to check for availability of services in countries. Examples
 * include: "US", "JP", and "GB".
 * @member {string} [givenName] The given name for the user.
 * @member {string} [surname] The user's surname (family name or last name).
 * @member {string} [userType] A string value that can be used to classify user
 * types in your directory, such as 'Member' and 'Guest'. Possible values
 * include: 'Member', 'Guest'
 * @member {boolean} [accountEnabled] Whether the account is enabled.
 * @member {string} [displayName] The display name of the user.
 * @member {string} [userPrincipalName] The principal name of the user.
 * @member {string} [mailNickname] The mail alias for the user.
 * @member {string} [mail] The primary email address of the user.
 * @member {array} [signInNames] The sign-in names of the user.
 */
export interface User extends DirectoryObject {
  immutableId?: string;
  usageLocation?: string;
  givenName?: string;
  surname?: string;
  userType?: string;
  accountEnabled?: boolean;
  displayName?: string;
  userPrincipalName?: string;
  mailNickname?: string;
  mail?: string;
  signInNames?: SignInName[];
}

/**
 * @class
 * Initializes a new instance of the UserGetMemberGroupsParameters class.
 * @constructor
 * Request parameters for GetMemberGroups API call.
 *
 * @member {boolean} securityEnabledOnly If true, only membership in
 * security-enabled groups should be checked. Otherwise, membership in all
 * groups should be checked.
 */
export interface UserGetMemberGroupsParameters {
  securityEnabledOnly: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the GetObjectsParameters class.
 * @constructor
 * Request parameters for the GetObjectsByObjectIds API.
 *
 * @member {array} [objectIds] The requested object IDs.
 * @member {array} [types] The requested object types.
 * @member {boolean} includeDirectoryObjectReferences If true, also searches
 * for object IDs in the partner tenant.
 */
export interface GetObjectsParameters {
  objectIds?: string[];
  types?: string[];
  includeDirectoryObjectReferences: boolean;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the Domain class.
 * @constructor
 * Active Directory Domain information.
 *
 * @member {string} [authenticationType] the type of the authentication into
 * the domain.
 * @member {boolean} [isDefault] if this is the default domain in the tenant.
 * @member {boolean} [isVerified] if this domain's ownership is verified.
 * @member {string} name the domain name.
 */
export interface Domain {
  readonly authenticationType?: string;
  readonly isDefault?: boolean;
  readonly isVerified?: boolean;
  name: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the Permissions class.
 * @constructor
 * @member {string} [odatatype]
 * Microsoft.DirectoryServices.OAuth2PermissionGrant
 * @member {string} [clientId] The objectId of the Service Principal associated
 * with the app
 * @member {string} [consentType] Typically set to AllPrincipals
 * @member {object} [principalId] Set to null if AllPrincipals is set
 * @member {string} [resourceId] Service Principal Id of the resource you want
 * to grant
 * @member {string} [scope] Typically set to user_impersonation
 * @member {string} [startTime] Start time for TTL
 * @member {string} [expiryTime] Expiry time for TTL
 */
export interface Permissions {
  odatatype?: string;
  clientId?: string;
  consentType?: string;
  principalId?: any;
  resourceId?: string;
  scope?: string;
  startTime?: string;
  expiryTime?: string;
}


/**
 * @class
 * Initializes a new instance of the DirectoryObjectListResult class.
 * @constructor
 * DirectoryObject list operation result.
 *
 * @member {string} [odatanextLink] The URL to get the next set of results.
 */
export interface DirectoryObjectListResult extends Array<DirectoryObject> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ApplicationListResult class.
 * @constructor
 * Application list operation result.
 *
 * @member {string} [odatanextLink] The URL to get the next set of results.
 */
export interface ApplicationListResult extends Array<Application> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the KeyCredentialListResult class.
 * @constructor
 * KeyCredential list operation result.
 *
 */
export interface KeyCredentialListResult extends Array<KeyCredential> {
}

/**
 * @class
 * Initializes a new instance of the PasswordCredentialListResult class.
 * @constructor
 * PasswordCredential list operation result.
 *
 */
export interface PasswordCredentialListResult extends Array<PasswordCredential> {
}

/**
 * @class
 * Initializes a new instance of the GroupListResult class.
 * @constructor
 * Server response for Get tenant groups API call
 *
 * @member {string} [odatanextLink] The URL to get the next set of results.
 */
export interface GroupListResult extends Array<ADGroup> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the GetObjectsResult class.
 * @constructor
 * The response to an Active Directory object inquiry API request.
 *
 * @member {string} [odatanextLink] The URL to get the next set of results.
 */
export interface GetObjectsResult extends Array<AADObject> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the GroupGetMemberGroupsResult class.
 * @constructor
 * Server response for GetMemberGroups API call.
 *
 */
export interface GroupGetMemberGroupsResult extends Array<string> {
}

/**
 * @class
 * Initializes a new instance of the ServicePrincipalListResult class.
 * @constructor
 * Server response for get tenant service principals API call.
 *
 * @member {string} [odatanextLink] the URL to get the next set of results.
 */
export interface ServicePrincipalListResult extends Array<ServicePrincipal> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the UserListResult class.
 * @constructor
 * Server response for Get tenant users API call.
 *
 * @member {string} [odatanextLink] The URL to get the next set of results.
 */
export interface UserListResult extends Array<User> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the UserGetMemberGroupsResult class.
 * @constructor
 * Server response for GetMemberGroups API call.
 *
 */
export interface UserGetMemberGroupsResult extends Array<string> {
}

/**
 * @class
 * Initializes a new instance of the DomainListResult class.
 * @constructor
 * Server response for Get tenant domains API call.
 *
 */
export interface DomainListResult extends Array<Domain> {
}

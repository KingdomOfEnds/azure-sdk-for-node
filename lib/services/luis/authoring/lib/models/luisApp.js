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
 * Exported Model - An exported LUIS Application.
 *
 */
class LuisApp {
  /**
   * Create a LuisApp.
   * @member {string} [name] The name of the application.
   * @member {string} [versionId] The version ID of the application that was
   * exported.
   * @member {string} [desc] The description of the application.
   * @member {string} [culture] The culture of the application. E.g.: en-us.
   * @member {array} [intents] List of intents.
   * @member {array} [entities] List of entities.
   * @member {array} [closedLists] List of closed lists.
   * @member {array} [composites] List of composite entities.
   * @member {array} [patternAnyEntities] List of Pattern.Any entities.
   * @member {array} [regexEntities] List of regular expression entities.
   * @member {array} [prebuiltEntities] List of prebuilt entities.
   * @member {array} [regexFeatures] List of pattern features.
   * @member {array} [modelFeatures] List of model features.
   * @member {array} [patterns] List of patterns.
   * @member {array} [utterances] List of sample utterances.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LuisApp
   *
   * @returns {object} metadata of LuisApp
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LuisApp',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ObjectElementType',
                type: {
                  name: 'Object'
                }
            }
          }
        },
        className: 'LuisApp',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          versionId: {
            required: false,
            serializedName: 'versionId',
            type: {
              name: 'String'
            }
          },
          desc: {
            required: false,
            serializedName: 'desc',
            type: {
              name: 'String'
            }
          },
          culture: {
            required: false,
            serializedName: 'culture',
            type: {
              name: 'String'
            }
          },
          intents: {
            required: false,
            serializedName: 'intents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HierarchicalModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'HierarchicalModel'
                  }
              }
            }
          },
          entities: {
            required: false,
            serializedName: 'entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HierarchicalModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'HierarchicalModel'
                  }
              }
            }
          },
          closedLists: {
            required: false,
            serializedName: 'closedLists',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ClosedListElementType',
                  type: {
                    name: 'Composite',
                    className: 'ClosedList'
                  }
              }
            }
          },
          composites: {
            required: false,
            serializedName: 'composites',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HierarchicalModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'HierarchicalModel'
                  }
              }
            }
          },
          patternAnyEntities: {
            required: false,
            serializedName: 'patternAnyEntities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PatternAnyElementType',
                  type: {
                    name: 'Composite',
                    className: 'PatternAny'
                  }
              }
            }
          },
          regexEntities: {
            required: false,
            serializedName: 'regex_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RegexEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'RegexEntity'
                  }
              }
            }
          },
          prebuiltEntities: {
            required: false,
            serializedName: 'prebuiltEntities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PrebuiltEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'PrebuiltEntity'
                  }
              }
            }
          },
          regexFeatures: {
            required: false,
            serializedName: 'regex_features',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JSONRegexFeatureElementType',
                  type: {
                    name: 'Composite',
                    className: 'JSONRegexFeature'
                  }
              }
            }
          },
          modelFeatures: {
            required: false,
            serializedName: 'model_features',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JSONModelFeatureElementType',
                  type: {
                    name: 'Composite',
                    className: 'JSONModelFeature'
                  }
              }
            }
          },
          patterns: {
            required: false,
            serializedName: 'patterns',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PatternRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'PatternRule'
                  }
              }
            }
          },
          utterances: {
            required: false,
            serializedName: 'utterances',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JSONUtteranceElementType',
                  type: {
                    name: 'Composite',
                    className: 'JSONUtterance'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LuisApp;

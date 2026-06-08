import type { INodeProperties } from 'n8n-workflow';

export const providerAccountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get All Provider Accounts",
					"value": "Get All Provider Accounts",
					"action": "Get Provider Accounts",
					"description": "The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providerAccounts"
						}
					}
				},
				{
					"name": "Edit Credentials Or Refresh Provider Account",
					"value": "Edit Credentials Or Refresh Provider Account",
					"action": "Update Account",
					"description": "The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providerAccounts"
						}
					}
				},
				{
					"name": "Get Provider Account Profiles",
					"value": "Get Provider Account Profiles",
					"action": "Get User Profile Details",
					"description": "The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providerAccounts/profile"
						}
					}
				},
				{
					"name": "Delete Provider Account",
					"value": "Delete Provider Account",
					"action": "Delete Provider Account",
					"description": "The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providerAccounts/{{$parameter[\"providerAccountId\"]}}"
						}
					}
				},
				{
					"name": "Get Provider Account",
					"value": "Get Provider Account",
					"action": "Get Provider Account Details",
					"description": "The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providerAccounts/{{$parameter[\"providerAccountId\"]}}"
						}
					}
				},
				{
					"name": "Update Preferences",
					"value": "Update Preferences",
					"action": "Update Preferences",
					"description": "This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providerAccounts/{{$parameter[\"providerAccountId\"]}}/preferences"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providerAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get All Provider Accounts"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "include",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get All Provider Accounts"
					]
				}
			}
		},
		{
			"displayName": "Provider Ids",
			"name": "providerIds",
			"description": "Comma separated providerIds.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "providerIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get All Provider Accounts"
					]
				}
			}
		},
		{
			"displayName": "PUT /providerAccounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Ids",
			"name": "providerAccountIds",
			"required": true,
			"description": "comma separated providerAccountIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "providerAccountIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Aggregation Source",
			"name": "aggregationSource",
			"type": "options",
			"default": "SYSTEM",
			"options": [
				{
					"name": "SYSTEM",
					"value": "SYSTEM"
				},
				{
					"name": "USER",
					"value": "USER"
				}
			],
			"routing": {
				"send": {
					"property": "aggregationSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Consent Id",
			"name": "consentId",
			"type": "number",
			"default": 0,
			"description": "Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>",
			"routing": {
				"send": {
					"property": "consentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Dataset",
			"name": "dataset",
			"type": "json",
			"default": "[\n  {\n    \"attribute\": [\n      {\n        \"container\": [\n          null\n        ],\n        \"containerAttributes\": {\n          \"BANK\": {\n            \"fullAccountNumberFields\": [\n              null\n            ]\n          },\n          \"CREDITCARD\": {},\n          \"INSURANCE\": {},\n          \"INVESTMENT\": {},\n          \"LOAN\": {}\n        }\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "dataset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Dataset Name",
			"name": "datasetName",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "datasetName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "[\n  {\n    \"option\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Preferences",
			"name": "preferences",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "preferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Edit Credentials Or Refresh Provider Account"
					]
				}
			}
		},
		{
			"displayName": "GET /providerAccounts/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account Profiles"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"description": "Comma separated providerAccountIds.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "providerAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providerAccounts/{providerAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Delete Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"required": true,
			"description": "providerAccountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Delete Provider Account"
					]
				}
			}
		},
		{
			"displayName": "GET /providerAccounts/{providerAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "include credentials,questions",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"required": true,
			"description": "providerAccountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account"
					]
				}
			}
		},
		{
			"displayName": "Request Id",
			"name": "requestId",
			"description": "The unique identifier for the request that returns contextual data",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Get Provider Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /providerAccounts/{providerAccountId}/preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Update Preferences"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"required": true,
			"description": "providerAccountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Update Preferences"
					]
				}
			}
		},
		{
			"displayName": "Preferences",
			"name": "preferences",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "preferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Accounts"
					],
					"operation": [
						"Update Preferences"
					]
				}
			}
		},
];

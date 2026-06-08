import type { INodeProperties } from 'n8n-workflow';

export const providersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					]
				}
			},
			"options": [
				{
					"name": "Get All Providers",
					"value": "Get All Providers",
					"action": "Get Providers",
					"description": "The get provider service is used to get all the providers that are enabled, search a provider service by name or routing number and get popular sites of a region. <br>Searching for a provider using a routing number is applicable only to the USA and Canada regions.<br>The valid values for priority are: <br>   1. cobrand: Returns providers enabled for the cobrand (Default priority)<br>   2. popular: Returns providers popular among users of the customer<br><br>Only the datasets, attributes, and containers that are enabled for the customer will be returned in the response.<br>Input for the dataset$filter should adhere to the following expression:<br><dataset.name>[<attribute.name>.container[<container> OR <container>] OR <attribute.name>.container[<container>]] <br>OR <dataset.name>[<attribute.name> OR <attribute.name>]<br><b>dataset$filter value examples:</b><br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank OR investment OR creditCard]]<br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA[ACCOUNT_DETAILS.container[bank OR investment] OR HOLDINGS.container[bank]] OR ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA<br>BASIC_AGG_DATA OR ACCT_PROFILE<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS OR HOLDINGS ]<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS] OR DOCUMENT <br>BASIC_AGG_DATA [ BASIC_ACCOUNT_INFO OR ACCOUNT_DETAILS ] <br><br>The fullAcountNumberFields is specified to filter the providers that have paymentAccountNumber or unmaskedAccountNumber support in the FULL_ACCT_NUMBER dataset attribute.<br><b>Examples for usage of fullAccountNumberFields </b><br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=paymentAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber,paymentAccountNumber<br><br>The skip and top parameters are used for pagination. In the skip and top parameters, pass the number of records to be skipped and retrieved, respectively.<br>The response header provides the links to retrieve the next and previous set of transactions.<br><br><b>Note:</b> <ol><li>In a product flow involving user interaction, Yodlee recommends invoking this service with filters.<li>Without filters, the service may perform slowly as it takes a few minutes to return data in the response.<li>The AuthParameter appears in the response only in case of token-based aggregation sites.<li>The pagination feature only applies when the priority parameter is set as cobrand. If no values are provided in the skip and top parameters, the API will only return the first 500 records.<li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in query parameter and response.</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers"
						}
					}
				},
				{
					"name": "Get Providers Count",
					"value": "Get Providers Count",
					"action": "Get Providers Count",
					"description": "The count service provides the total number of providers that get returned in the GET /providers depending on the input parameters passed.<br>If you are implementing pagination for providers, call this endpoint before calling GET /providers to know the number of providers that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /providers endpoint<br><br><b>Note:</b> <li>The capability has been deprecated in the query parameter.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/count"
						}
					}
				},
				{
					"name": "Get Provider",
					"value": "Get Provider",
					"action": "Get Provider Details",
					"description": "The get provider detail service is used to get detailed information including the login form for a provider.<br>The response is a provider object that includes information such as name of the provider, <br>provider's base URL, a list of containers supported by the provider, the login form details of the provider, etc.<br>Only enabled datasets, attributes and containers gets returned in the response.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Capability",
			"name": "capability",
			"description": "CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "capability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Dataset Filter",
			"name": "dataset%24filter",
			"description": "Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dataset$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Full Account Number Fields",
			"name": "fullAccountNumberFields",
			"description": "Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fullAccountNumberFields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Institution Id",
			"name": "institutionId",
			"description": "Institution Id for Single site selection",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "institutionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Name in minimum 1 character or routing number.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "Search priority",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Provider Id",
			"name": "providerId",
			"description": "Max 5 Comma seperated Provider Ids",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "providerId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "skip (Min 0) - This is not applicable along with 'name' parameter.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"description": "top (Max 500) - This is not applicable along with 'name' parameter.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get All Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "Capability",
			"name": "capability",
			"description": "CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "capability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "Dataset Filter",
			"name": "dataset%24filter",
			"description": "Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dataset$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "Full Account Number Fields",
			"name": "fullAccountNumberFields",
			"description": "Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fullAccountNumberFields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Name in minimum 1 character or routing number.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "Search priority",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Providers Count"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Provider"
					]
				}
			}
		},
		{
			"displayName": "Provider Id",
			"name": "providerId",
			"required": true,
			"description": "providerId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Providers"
					],
					"operation": [
						"Get Provider"
					]
				}
			}
		},
];

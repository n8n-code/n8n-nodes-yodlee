import type { INodeProperties } from 'n8n-workflow';

export const holdingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					]
				}
			},
			"options": [
				{
					"name": "Get Holdings",
					"value": "Get Holdings",
					"action": "Get Holdings",
					"description": "The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the \"include\" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/holdings"
						}
					}
				},
				{
					"name": "Get Asset Classification List",
					"value": "Get Asset Classification List",
					"action": "Get Asset Classification List",
					"description": "The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/holdings/assetClassificationList"
						}
					}
				},
				{
					"name": "Get Holding Type List",
					"value": "Get Holding Type List",
					"action": "Get Holding Type List",
					"description": "The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/holdings/holdingTypeList"
						}
					}
				},
				{
					"name": "Get Securities",
					"value": "Get Securities",
					"action": "Get Security Details",
					"description": "The get security details service is used to get all the security information for the holdings<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/holdings/securities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /holdings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "Comma separated accountId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "Asset Classification Classification Type",
			"name": "assetClassification-classificationType",
			"description": "e.g. Country, Sector, etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assetClassification.classificationType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "Classification Value",
			"name": "classificationValue",
			"description": "e.g. US",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationValue",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "assetClassification",
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
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"description": "providerAccountId",
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
						"Holdings"
					],
					"operation": [
						"Get Holdings"
					]
				}
			}
		},
		{
			"displayName": "GET /holdings/assetClassificationList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Asset Classification List"
					]
				}
			}
		},
		{
			"displayName": "GET /holdings/holdingTypeList",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Holding Type List"
					]
				}
			}
		},
		{
			"displayName": "GET /holdings/securities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Securities"
					]
				}
			}
		},
		{
			"displayName": "Holding Id",
			"name": "holdingId",
			"description": "Comma separated holdingId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "holdingId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Holdings"
					],
					"operation": [
						"Get Securities"
					]
				}
			}
		},
];

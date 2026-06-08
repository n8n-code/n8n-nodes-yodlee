import type { INodeProperties } from 'n8n-workflow';

export const dataExtractsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					]
				}
			},
			"options": [
				{
					"name": "Get Data Extracts Events",
					"value": "Get Data Extracts Events",
					"action": "Get Events",
					"description": "The get extracts events service is used to learn about occurrences of data extract related events. This service currently supports only the DATA_UPDATES event.<br>Passing the event name as DATA_UPDATES provides information about users for whom data has been modified in the system for the specified time range. To learn more, please refer to the <a href=\"https://developer.yodlee.com/docs/api/1.1/DataExtracts\">dataExtracts</a> page.<br>You can retrieve data in increments of no more than 60 minutes over the period of the last 7 days from today's date.<br>This service is only invoked with either admin access token or a cobrand session.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataExtracts/events"
						}
					}
				},
				{
					"name": "Get Data Extracts User Data",
					"value": "Get Data Extracts User Data",
					"action": "Get userData",
					"description": "The get user data service is used to get a user's modified data for a particular period of time for accounts, transactions, holdings, and provider account information.<br>The time difference between fromDate and toDate fields cannot be more than 60 minutes.<br>By default, pagination is available for the transaction entity in this API. In the first response, the API will retrieve 500 transactions along with other data. The response header will provide a link to retrieve the next set of transactions.<br>In the response body of the first API response, totalTransactionsCount indicates the total number of transactions the API will retrieve for the user.<br>This service is only invoked with either admin access token or a cobrand session.<br/>Refer to <a href=\"https://developer.yodlee.com/docs/api/1.1/DataExtracts\">dataExtracts</a> page for more information.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataExtracts/userData"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataExtracts/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts Events"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"required": true,
			"description": "Event Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "eventName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts Events"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"required": true,
			"description": "From DateTime (YYYY-MM-DDThh:mm:ssZ)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts Events"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"required": true,
			"description": "To DateTime (YYYY-MM-DDThh:mm:ssZ)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts Events"
					]
				}
			}
		},
		{
			"displayName": "GET /dataExtracts/userData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts User Data"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"required": true,
			"description": "From DateTime (YYYY-MM-DDThh:mm:ssZ)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts User Data"
					]
				}
			}
		},
		{
			"displayName": "Login Name",
			"name": "loginName",
			"required": true,
			"description": "Login Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "loginName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts User Data"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"required": true,
			"description": "To DateTime (YYYY-MM-DDThh:mm:ssZ)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Extracts"
					],
					"operation": [
						"Get Data Extracts User Data"
					]
				}
			}
		},
];

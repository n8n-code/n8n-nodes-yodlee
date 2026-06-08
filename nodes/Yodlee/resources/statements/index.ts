import type { INodeProperties } from 'n8n-workflow';

export const statementsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Statements"
					]
				}
			},
			"options": [
				{
					"name": "Get Statements",
					"value": "Get Statements",
					"action": "Get Statements",
					"description": "The statements service is used to get the list of statement related information. <br>By default, all the latest statements of active and to be closed accounts are retrieved for the user. <br>Certain sites do not have both a statement date and a due date. When a fromDate is passed as an input, all the statements that have the due date on or after the passed date are retrieved. <br>For sites that do not have the due date, statements that have the statement date on or after the passed date are retrieved. <br>The default value of \"isLatest\" is true. To retrieve historical statements isLatest needs to be set to false.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/statements"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /statements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "accountId",
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
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"description": "creditCard/loan/insurance",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "container",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "from date for statement retrieval (YYYY-MM-DD)",
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
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
		{
			"displayName": "Is Latest",
			"name": "isLatest",
			"description": "isLatest (true/false)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isLatest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "ACTIVE,TO_BE_CLOSED,CLOSED",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Statements"
					],
					"operation": [
						"Get Statements"
					]
				}
			}
		},
];

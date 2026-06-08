import type { INodeProperties } from 'n8n-workflow';

export const derivedDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					]
				}
			},
			"options": [
				{
					"name": "Get Holding Summary",
					"value": "Get Holding Summary",
					"action": "Get Holding Summary",
					"description": "The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/derived/holdingSummary"
						}
					}
				},
				{
					"name": "Get Networth",
					"value": "Get Networth",
					"action": "Get Networth Summary",
					"description": "The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/derived/networth"
						}
					}
				},
				{
					"name": "Get Transaction Summary",
					"value": "Get Transaction Summary",
					"action": "Get Transaction Summary",
					"description": "The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/derived/transactionSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /derived/holdingSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Holding Summary"
					]
				}
			}
		},
		{
			"displayName": "Account Ids",
			"name": "accountIds",
			"description": "Comma separated accountIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Holding Summary"
					]
				}
			}
		},
		{
			"displayName": "Classification Type",
			"name": "classificationType",
			"description": "e.g. Country, Sector, etc.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "classificationType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Holding Summary"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "details",
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
						"Derived"
					],
					"operation": [
						"Get Holding Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /derived/networth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Account Ids",
			"name": "accountIds",
			"description": "comma separated accountIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"description": "bank/creditCard/investment/insurance/loan/realEstate/otherAssets/otherLiabilities",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "from date for balance retrieval (YYYY-MM-DD)",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "details",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"description": "D-daily, W-weekly or M-monthly",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "skip (Min 0)",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "toDate for balance retrieval (YYYY-MM-DD)",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"description": "top (Max 500)",
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
						"Derived"
					],
					"operation": [
						"Get Networth"
					]
				}
			}
		},
		{
			"displayName": "GET /derived/transactionSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "comma separated account Ids",
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
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "categoryId",
			"description": "comma separated categoryIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "categoryId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Category Type",
			"name": "categoryType",
			"description": "INCOME, EXPENSE, TRANSFER, UNCATEGORIZE or DEFERRED_COMPENSATION",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "categoryType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "YYYY-MM-DD format",
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
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"required": true,
			"description": "CATEGORY_TYPE, HIGH_LEVEL_CATEGORY or CATEGORY",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "details",
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
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Include User Category",
			"name": "includeUserCategory",
			"description": "TRUE/FALSE",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeUserCategory",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"description": "D-daily, W-weekly, M-mothly or Y-yearly",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "YYYY-MM-DD format",
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
						"Derived"
					],
					"operation": [
						"Get Transaction Summary"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const transactionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					]
				}
			},
			"options": [
				{
					"name": "Get Transactions",
					"value": "Get Transactions",
					"action": "Get Transactions",
					"description": "The Transaction service is used to get a list of transactions for a user.<br>By default, this service returns the last 30 days of transactions from today's date.<br>The keyword parameter performs a contains search on the original, consumer, and simple description attributes, replace the special characters #, &, and + with percent-encoding values %23, %26, and %2B respectively. Eg: for -Debit# , pass the input as -Debit%23.<br>Values for categoryId parameter can be fetched from get transaction category list service.<br> The categoryId is used to filter transactions based on system-defined category as well as user-defined category.<br>User-defined categoryIds should be provided in the filter with the prefix ''U''. E.g. U10002<br>The skip and top parameters are used for pagination. In the skip and top parameters pass the number of records to be skipped and retrieved, respectively. The response header provides the links to retrieve the next and previous set of transactions.<br>Double quotes in the merchant name will be prefixed by backslashes (&#92;) in the response, e.g. Toys \"R\" Us. <br>sourceId is a unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts. Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.<br><br><b>Note</b><li> <a href=\"https://developer.yodlee.com/docs/api/1.1/Transaction_Data_Enrichment\">TDE</a> is made available for bank and card accounts and for the US market only.The address field in the response is available only when the TDE key is turned on.<li>The pagination feature is available by default. If no values are passed in the skip and top parameters, the API will only return the first 500 transactions.<li>This service supports the localization feature and accepts locale as a header parameter.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions"
						}
					}
				},
				{
					"name": "Get Transaction Categories",
					"value": "Get Transaction Categories",
					"action": "Get Transaction Category List",
					"description": "The categories service returns the list of available transaction categories.<br>High level category is returned in the response only if it is opted by the customer.<br>When invoked by passing the cobrand session or admin access token, this service returns the supported transaction categories at the cobrand level. <br>When invoked by passing the cobrand session and the user session or user access token, this service returns the transaction categories <br>along with user-defined categories.<br>Double quotes in the user-defined category name will be prefixed by backslashes (&#92;) in the response, <br>e.g. Toys \"R\" Us.<br/>Source and id are the primary attributes of the category entity.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions/categories"
						}
					}
				},
				{
					"name": "Create Transaction Category",
					"value": "Create Transaction Category",
					"action": "Create Category",
					"description": "The create transaction categories service is used to create user-defined categories for a system-defined category.<br>The parentCategoryId is the system-defined category id.This can be retrieved using get transaction categories service.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 201 (Created successfully).<br>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transactions/categories"
						}
					}
				},
				{
					"name": "Update Transaction Category",
					"value": "Update Transaction Category",
					"action": "Update Category",
					"description": "The update transaction categories service is used to update the transaction category name<br>for a high level category, a system-defined category and a user-defined category.<br>The renamed category can be set back to the original name by passing an empty string for categoryName.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 204 (Success without content).<br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/transactions/categories"
						}
					}
				},
				{
					"name": "Create Or Run Transaction Categorization Rules",
					"value": "Create Or Run Transaction Categorization Rules",
					"action": "Create or Run Transaction Categorization Rule",
					"description": "The Create or Run Transaction Categorization Rule endpoint is used to: <br>Create transaction categorization rules for both system and user-defined categories.<br>Run all the transaction categorization rules to categorize transactions by calling the endpoint with action=run as the query parameter. <br><br>The input body parameters to create transaction categorization rules follow:<br>     categoryId - This field is mandatory and numeric<br>     priority - This field is optional and numeric. Priority decides the order in which the rule gets applied on transactions.<br>     ruleClause - This field is mandatory and should contain at least one rule<br>     field - The value can be description or amount<br><br>       If the field value is description then,<br>         1. operation - value can be stringEquals or stringContains<br>         2. value - value should be min of 3 and max of 50 characters<br><br>       If the field value is amount then, <br>         1. operation - value can be numberEquals, numberLessThan, numberLessThanEquals, numberGreaterThan or numberGreaterThanEquals<br>         2. value - min value 0 and a max value of 99999999999.99 is allowed<br>The HTTP response code is 201 (Created Successfully).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transactions/categories/rules"
						}
					}
				},
				{
					"name": "Delete Transaction Categorization Rule",
					"value": "Delete Transaction Categorization Rule",
					"action": "Delete Transaction Categorization Rule",
					"description": "The delete transaction categorization rule service is used to delete the given user-defined transaction categorization rule for both system-defined category as well as user-defined category.<br>This will delete all the corresponding rule clauses associated with the rule.<br>The HTTP response code is 204 (Success without content).<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/transactions/categories/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				},
				{
					"name": "Run Transaction Categorization Rule",
					"value": "Run Transaction Categorization Rule",
					"action": "Run Transaction Categorization Rule",
					"description": "The run transaction categorization rule service is used to run a rule on transactions, to categorize the transactions.<br>The HTTP response code is 204 (Success with no content).<br>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transactions/categories/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				},
				{
					"name": "Update Transaction Categorization Rule",
					"value": "Update Transaction Categorization Rule",
					"action": "Update Transaction Categorization Rule",
					"description": "The update transaction categorization rule service is used to update a categorization rule for both system-defined category as well as user-defined category.<br>ruleParam JSON input should be as explained in the create transaction categorization rule service.<br>The HTTP response code is 204 (Success without content).<br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/transactions/categories/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				},
				{
					"name": "Get Transaction Categorization Rules",
					"value": "Get Transaction Categorization Rules",
					"action": "Get Transaction Categorization Rules",
					"description": "The get transaction categorization rule service is used to get all the categorization rules.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions/categories/txnRules"
						}
					}
				},
				{
					"name": "Delete Transaction Category",
					"value": "Delete Transaction Category",
					"action": "Delete Category",
					"description": "The delete transaction categories service is used to delete the given user-defined category.<br>The HTTP response code is 204 (Success without content).<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/transactions/categories/{{$parameter[\"categoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Transactions Count",
					"value": "Get Transactions Count",
					"action": "Get Transactions Count",
					"description": "The count service provides the total number of transactions for a specific user depending on the input parameters passed.<br>If you are implementing pagination for transactions, call this endpoint before calling GET /transactions to know the number of transactions that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /transactions endpoint.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions/count"
						}
					}
				},
				{
					"name": "Update Transaction",
					"value": "Update Transaction",
					"action": "Update Transaction",
					"description": "The update transaction service is used to update the category,consumer description, memo for a transaction.<br>The HTTP response code is 204 (Success without content).<br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/transactions/{{$parameter[\"transactionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "Comma separated accountIds",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Base Type",
			"name": "baseType",
			"description": "DEBIT/CREDIT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "categoryId",
			"description": "Comma separated categoryIds",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Category Type",
			"name": "categoryType",
			"description": "Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"description": "bank/creditCard/investment/insurance/loan",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Detail Category Id",
			"name": "detailCategoryId",
			"description": "Comma separated detailCategoryIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "detailCategoryId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Transaction from date(YYYY-MM-DD)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "High Level Category Id",
			"name": "highLevelCategoryId",
			"description": "Comma separated highLevelCategoryIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "highLevelCategoryId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Keyword",
			"name": "keyword",
			"description": "Transaction search text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "keyword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "Transaction end date (YYYY-MM-DD)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Transaction Type(SELL,SWEEP, etc.) for bank/creditCard/investment",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "GET /transactions/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transaction Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /transactions/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "Category Name",
			"name": "categoryName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "categoryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Transaction Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent Category Id",
			"name": "parentCategoryId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parentCategoryId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "PUT /transactions/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "Category Name",
			"name": "categoryName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "categoryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "High Level Category Name",
			"name": "highLevelCategoryName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "highLevelCategoryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "source",
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
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "POST /transactions/categories/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Or Run Transaction Categorization Rules"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"description": "To run rules, pass action=run. Only value run is supported",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Or Run Transaction Categorization Rules"
					]
				}
			}
		},
		{
			"displayName": "Rule Param",
			"name": "ruleParam",
			"description": "rules(JSON format) to categorize the transactions",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ruleParam",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Create Or Run Transaction Categorization Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /transactions/categories/rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Delete Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "Rule Id",
			"name": "ruleId",
			"required": true,
			"description": "ruleId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Delete Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /transactions/categories/rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Run Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"required": true,
			"default": "run",
			"type": "options",
			"options": [
				{
					"name": "Run",
					"value": "run"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Run Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "Rule Id",
			"name": "ruleId",
			"required": true,
			"description": "Unique id of the categorization rule",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Run Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "PUT /transactions/categories/rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "Rule Id",
			"name": "ruleId",
			"required": true,
			"description": "ruleId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule",
			"name": "rule",
			"type": "json",
			"default": "{\n  \"ruleClause\": [\n    {\n      \"value\": {}\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "rule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction Categorization Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /transactions/categories/txnRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transaction Categorization Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /transactions/categories/{categoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Delete Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "categoryId",
			"required": true,
			"description": "categoryId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Delete Transaction Category"
					]
				}
			}
		},
		{
			"displayName": "GET /transactions/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "Comma separated accountIds\t",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Base Type",
			"name": "baseType",
			"description": "DEBIT/CREDIT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "baseType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "categoryId",
			"description": "Comma separated categoryIds",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Category Type",
			"name": "categoryType",
			"description": "Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"description": "bank/creditCard/investment/insurance/loan",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Detail Category Id",
			"name": "detailCategoryId",
			"description": "Comma separated detailCategoryIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "detailCategoryId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Transaction from date(YYYY-MM-DD)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "High Level Category Id",
			"name": "highLevelCategoryId",
			"description": "Comma separated highLevelCategoryIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "highLevelCategoryId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Keyword",
			"name": "keyword",
			"description": "Transaction search text\t",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "keyword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "Transaction end date (YYYY-MM-DD)",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Transaction Type(SELL,SWEEP, etc.)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions Count"
					]
				}
			}
		},
		{
			"displayName": "PUT /transactions/{transactionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "transactionId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transaction",
			"name": "transaction",
			"type": "json",
			"default": "{\n  \"description\": {}\n}",
			"routing": {
				"send": {
					"property": "transaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Update Transaction"
					]
				}
			}
		},
];

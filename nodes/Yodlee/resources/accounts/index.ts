import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get All Accounts",
					"value": "Get All Accounts",
					"action": "Get Accounts",
					"description": "The get accounts service provides information about accounts added by the user.<br>By default, this service returns information for active and to be closed accounts.<br>If requestId is provided, the accounts that are updated in the context of the requestId will be provided in the response.<br><br><b>Note:</b><br><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li><li>fullAccountNumberList, PII (Personal Identifiable Information) and holder details are not available by default, as it is a premium feature that needs security approval. This will not be available for testing in Sandbox environment.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Create Manual Account",
					"value": "Create Manual Account",
					"action": "Add Manual Account",
					"description": "The add account service is used to add manual accounts.<br>The response of add account service includes the account name , account number and Yodlee generated account id.<br>All manual accounts added will be included as part of networth calculation by default.<br>Add manual account support is available for bank, card, investment, insurance and loan container only.<br><br><b>Note:</b> <li>A real estate account addition is only supported for SYSTEM and MANUAL valuation type.</li>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Evaluate Address",
					"value": "Evaluate Address",
					"action": "Evaluate Address",
					"description": "Use this service to validate the address before adding the real estate account.<br>If the address is valid, the service will return the complete address information.<br>The response will contain multiple addresses if the user-provided input matches with multiple entries in the vendor database.<br>In the case of multiple matches, the user can select the appropriate address from the list and then invoke the add account service with the complete address.<br><br><b>Note:</b> <li>Yodlee recommends to use this service before adding the real estate account to avoid failures.</li>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/evaluateAddress"
						}
					}
				},
				{
					"name": "Get Historical Balances",
					"value": "Get Historical Balances",
					"action": "Get Historical Balances",
					"description": "The historical balances service is used to retrieve the historical balances for an account or a user.<br>Historical balances are daily (D), weekly (W), and monthly (M). <br>The interval input should be passed as D, W, and M to retrieve the desired historical balances. The default interval is daily (D). <br>When no account id is provided, historical balances of the accounts that are active, to be closed, and closed are provided in the response. <br>If the fromDate and toDate are not passed, the last 90 days of data will be provided. <br>The fromDate and toDate should be passed in the YYYY-MM-DD format. <br>The date field in the response denotes the date for which the balance is requested.<br>includeCF needs to be sent as true if the customer wants to return carried forward balances for a date when the data is not available. <br>asofDate field in the response denotes the date as of which the balance was updated for that account.<br>When there is no balance available for a requested date and if includeCF is sent as true, the previous date for which the balance is available is provided in the response. <br>When there is no previous balance available, no data will be sent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/historicalBalances"
						}
					}
				},
				{
					"name": "Delete Account",
					"value": "Delete Account",
					"action": "Delete Account",
					"description": "The delete account service allows an account to be deleted.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Get Account",
					"value": "Get Account",
					"action": "Get Account Details",
					"description": "The get account details service provides detailed information of an account.<br><br><b>Note:</b><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Update Account",
					"value": "Update Account",
					"action": "Update Account",
					"description": "The update account service is used to update manual and aggregated accounts.<br>The HTTP response code is 204 (Success without content).<br>Update manual account support is available for bank, card, investment, insurance, loan, otherAssets, otherLiabilities and realEstate containers only.<br><br><b>Note:</b><li> A real estate account update is only supported for SYSTEM and MANUAL valuation type.</li><li> Attribute <b>isEbillEnrolled</b> is deprecated as it is applicable for bill accounts only.</li>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "Comma separated accountIds.",
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"description": "bank/creditCard/investment/insurance/loan/reward/realEstate/otherAssets/otherLiabilities",
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.",
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "Request Id",
			"name": "requestId",
			"description": "The unique identifier that returns contextual data",
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "ACTIVE,INACTIVE,TO_BE_CLOSED,CLOSED",
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
						"Accounts"
					],
					"operation": [
						"Get All Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create Manual Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"amountDue\": {},\n  \"balance\": {},\n  \"homeValue\": {}\n}",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create Manual Account"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/evaluateAddress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Evaluate Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Evaluate Address"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/historicalBalances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
					]
				}
			}
		},
		{
			"displayName": "Include CF",
			"name": "includeCF",
			"description": "Consider carry forward logic for missing balances",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeCF",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
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
						"Accounts"
					],
					"operation": [
						"Get Historical Balances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "accountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "accountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.",
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
						"Accounts"
					],
					"operation": [
						"Get Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "accountId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"amountDue\": {},\n  \"balance\": {},\n  \"homeValue\": {}\n}",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
];

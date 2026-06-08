import type { INodeProperties } from 'n8n-workflow';

export const verifyAccountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					]
				}
			},
			"options": [
				{
					"name": "Initiate Account Verification",
					"value": "Initiate Account Verification",
					"action": "Verify Accounts Using Transactions",
					"description": "The verify account service is used to verify the account's ownership by  matching the transaction details with the accounts aggregated for the user.<br><ul><li>If a match is identified, the service returns details of all the accounts along with the matched transaction's details.<li>If no transaction match is found, an empty response will be returned.<li>A maximum of 5 transactionCriteria can be passed in a request.<li>The baseType, date, and amount parameters should mandatorily be passed.<li>The optional dateVariance parameter cannot be more than 7 days. For example, +7, -4, or +/-2.<li>Pass the container or accountId parameters for better performance.<li>This service supports the localization feature and accepts locale as a header parameter.</li></ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/verifyAccount/{{$parameter[\"providerAccountId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /verifyAccount/{providerAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					],
					"operation": [
						"Initiate Account Verification"
					]
				}
			}
		},
		{
			"displayName": "Provider Account Id",
			"name": "providerAccountId",
			"required": true,
			"description": "providerAccountId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					],
					"operation": [
						"Initiate Account Verification"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "accountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					],
					"operation": [
						"Initiate Account Verification"
					]
				}
			}
		},
		{
			"displayName": "Container",
			"name": "container",
			"type": "options",
			"default": "bank",
			"options": [
				{
					"name": "Bank",
					"value": "bank"
				},
				{
					"name": "Credit Card",
					"value": "creditCard"
				},
				{
					"name": "Investment",
					"value": "investment"
				},
				{
					"name": "Insurance",
					"value": "insurance"
				},
				{
					"name": "Loan",
					"value": "loan"
				},
				{
					"name": "Reward",
					"value": "reward"
				},
				{
					"name": "Real Estate",
					"value": "realEstate"
				},
				{
					"name": "Other Assets",
					"value": "otherAssets"
				},
				{
					"name": "Other Liabilities",
					"value": "otherLiabilities"
				}
			],
			"routing": {
				"send": {
					"property": "container",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					],
					"operation": [
						"Initiate Account Verification"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transaction Criteria",
			"name": "transactionCriteria",
			"type": "json",
			"default": "[\n  {\n    \"verifiedTransaction\": [\n      {\n        \"amount\": {},\n        \"commission\": {},\n        \"description\": {},\n        \"interest\": {},\n        \"merchant\": {\n          \"address\": {},\n          \"categoryLabel\": [\n            null\n          ],\n          \"contact\": {},\n          \"coordinates\": {}\n        },\n        \"price\": {},\n        \"principal\": {},\n        \"runningBalance\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "transactionCriteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Verify Account"
					],
					"operation": [
						"Initiate Account Verification"
					]
				}
			}
		},
];

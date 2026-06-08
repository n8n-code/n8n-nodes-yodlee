import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountsDescription } from './resources/accounts';
import { authDescription } from './resources/auth';
import { cobrandDescription } from './resources/cobrand';
import { configsDescription } from './resources/configs';
import { dataExtractsDescription } from './resources/data-extracts';
import { derivedDescription } from './resources/derived';
import { documentsDescription } from './resources/documents';
import { holdingsDescription } from './resources/holdings';
import { providerAccountsDescription } from './resources/provider-accounts';
import { providersDescription } from './resources/providers';
import { statementsDescription } from './resources/statements';
import { transactionsDescription } from './resources/transactions';
import { userDescription } from './resources/user';
import { verificationDescription } from './resources/verification';
import { verifyAccountDescription } from './resources/verify-account';

export class Yodlee implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'yodlee',
		name: 'N8nDevYodlee',
		icon: { light: 'file:./yodlee.svg', dark: 'file:./yodlee.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This file describes the Yodlee Platform APIs using the swagger notation. You can use this swagger file to generate client side SDKs to the Yodlee Platform APIs for many different programming langua..',
		defaults: { name: 'yodlee' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevYodleeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "Accounts API"
				},
				{
					"name": "Auth",
					"value": "Auth",
					"description": "Auth API"
				},
				{
					"name": "Cobrand",
					"value": "Cobrand",
					"description": "Cobrand API"
				},
				{
					"name": "Configs",
					"value": "Configs",
					"description": "Configs API"
				},
				{
					"name": "Data Extracts",
					"value": "Data Extracts",
					"description": "DataExtracts API"
				},
				{
					"name": "Derived",
					"value": "Derived",
					"description": "Derived API"
				},
				{
					"name": "Documents",
					"value": "Documents",
					"description": "Documents API"
				},
				{
					"name": "Holdings",
					"value": "Holdings",
					"description": "Holdings API"
				},
				{
					"name": "Provider Accounts",
					"value": "Provider Accounts",
					"description": "Provider Accounts API"
				},
				{
					"name": "Providers",
					"value": "Providers",
					"description": "Providers API"
				},
				{
					"name": "Statements",
					"value": "Statements",
					"description": "Statements API"
				},
				{
					"name": "Transactions",
					"value": "Transactions",
					"description": "Transactions API"
				},
				{
					"name": "User",
					"value": "User",
					"description": "Users API"
				},
				{
					"name": "Verification",
					"value": "Verification",
					"description": "Verification API"
				},
				{
					"name": "Verify Account",
					"value": "Verify Account",
					"description": "Verify Account API"
				}
			],
			"default": ""
		},
		...accountsDescription,
		...authDescription,
		...cobrandDescription,
		...configsDescription,
		...dataExtractsDescription,
		...derivedDescription,
		...documentsDescription,
		...holdingsDescription,
		...providerAccountsDescription,
		...providersDescription,
		...statementsDescription,
		...transactionsDescription,
		...userDescription,
		...verificationDescription,
		...verifyAccountDescription
		],
	};
}

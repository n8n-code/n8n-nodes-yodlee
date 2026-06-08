import type { INodeProperties } from 'n8n-workflow';

export const cobrandDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cobrand"
					]
				}
			},
			"options": [
				{
					"name": "Cobrand Login",
					"value": "Cobrand Login",
					"action": "Cobrand Login",
					"description": "The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cobrand/login"
						}
					}
				},
				{
					"name": "Cobrand Logout",
					"value": "Cobrand Logout",
					"action": "Cobrand Logout",
					"description": "The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cobrand/logout"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /cobrand/login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cobrand"
					],
					"operation": [
						"Cobrand Login"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cobrand",
			"name": "cobrand",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cobrand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cobrand"
					],
					"operation": [
						"Cobrand Login"
					]
				}
			}
		},
		{
			"displayName": "POST /cobrand/logout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cobrand"
					],
					"operation": [
						"Cobrand Logout"
					]
				}
			}
		},
];

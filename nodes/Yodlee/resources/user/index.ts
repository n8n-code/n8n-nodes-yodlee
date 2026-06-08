import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get User Details",
					"description": "The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update User Details",
					"description": "The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href=\"https://developer.yodlee.com/api-reference#tag/Derived\">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/user"
						}
					}
				},
				{
					"name": "Get Access Tokens",
					"value": "Get Access Tokens",
					"action": "Get Access Tokens",
					"description": "The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/accessTokens"
						}
					}
				},
				{
					"name": "User Logout",
					"value": "User Logout",
					"action": "User Logout",
					"description": "<b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/user/logout"
						}
					}
				},
				{
					"name": "Register User",
					"value": "Register User",
					"action": "Register User",
					"description": "The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/user/register"
						}
					}
				},
				{
					"name": "Saml Login",
					"value": "Saml Login",
					"action": "Saml Login",
					"description": "The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/user/samlLogin"
						}
					}
				},
				{
					"name": "Unregister",
					"value": "Unregister",
					"action": "Delete User",
					"description": "The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/user/unregister"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "PUT /user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"name\": {},\n  \"preferences\": {}\n}",
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "GET /user/accessTokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Access Tokens"
					]
				}
			}
		},
		{
			"displayName": "App Ids",
			"name": "appIds",
			"required": true,
			"description": "appIds",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "appIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Access Tokens"
					]
				}
			}
		},
		{
			"displayName": "POST /user/logout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"User Logout"
					]
				}
			}
		},
		{
			"displayName": "POST /user/register",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"name\": {},\n  \"preferences\": {}\n}",
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"displayName": "POST /user/samlLogin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Saml Login"
					]
				}
			}
		},
		{
			"displayName": "Issuer",
			"name": "issuer",
			"required": true,
			"description": "issuer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "issuer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Saml Login"
					]
				}
			}
		},
		{
			"displayName": "Saml Response",
			"name": "samlResponse",
			"required": true,
			"description": "samlResponse",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "samlResponse",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Saml Login"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"description": "source",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Saml Login"
					]
				}
			}
		},
		{
			"displayName": "DELETE /user/unregister",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unregister"
					]
				}
			}
		},
];

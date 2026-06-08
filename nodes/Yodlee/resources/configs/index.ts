import type { INodeProperties } from 'n8n-workflow';

export const configsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					]
				}
			},
			"options": [
				{
					"name": "Get Subscribed Notification Events",
					"value": "Get Subscribed Notification Events",
					"action": "Get Subscribed Notification Events",
					"description": "The get events service provides the list of events for which consumers subscribed to receive notifications. <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/configs/notifications/events"
						}
					}
				},
				{
					"name": "Delete Subscribed Notification Event",
					"value": "Delete Subscribed Notification Event",
					"action": "Delete Notification Subscription",
					"description": "The delete events service is used to unsubscribe from an events service.<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/configs/notifications/events/{{$parameter[\"eventName\"]}}"
						}
					}
				},
				{
					"name": "Create Subscription Notification Event",
					"value": "Create Subscription Notification Event",
					"action": "Subscribe For Notification Event",
					"description": "The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes:</b><li>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<li>The content type has to be passed as application/json for the body parameter.</li>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/configs/notifications/events/{{$parameter[\"eventName\"]}}"
						}
					}
				},
				{
					"name": "Update Subscribed Notification Event",
					"value": "Update Subscribed Notification Event",
					"action": "Update Notification Subscription",
					"description": "The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter. <br>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/configs/notifications/events/{{$parameter[\"eventName\"]}}"
						}
					}
				},
				{
					"name": "Get Public Encryption Key",
					"value": "Get Public Encryption Key",
					"action": "Get Public Key",
					"description": "The get public key service provides the public key that should be used to encrypt user credentials while invoking POST /providerAccounts and PUT /providerAccounts endpoints.<br>This service will only work if the PKI (public key infrastructure) feature is enabled for the customer.<br><br><b>Note:</b><li> The key in the response is a string in PEM format.</li><li>This endpoint is not available in the Sandbox environment and it is useful only if the PKI feature is enabled.</li>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/configs/publicKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /configs/notifications/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Get Subscribed Notification Events"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"description": "eventName",
			"default": "REFRESH",
			"type": "options",
			"options": [
				{
					"name": "REFRESH",
					"value": "REFRESH"
				},
				{
					"name": "DATA UPDATES",
					"value": "DATA_UPDATES"
				},
				{
					"name": "AUTO REFRESH UPDATES",
					"value": "AUTO_REFRESH_UPDATES"
				}
			],
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
						"Configs"
					],
					"operation": [
						"Get Subscribed Notification Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /configs/notifications/events/{eventName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Delete Subscribed Notification Event"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"required": true,
			"description": "eventName",
			"default": "REFRESH",
			"type": "options",
			"options": [
				{
					"name": "REFRESH",
					"value": "REFRESH"
				},
				{
					"name": "DATA UPDATES",
					"value": "DATA_UPDATES"
				},
				{
					"name": "AUTO REFRESH UPDATES",
					"value": "AUTO_REFRESH_UPDATES"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Delete Subscribed Notification Event"
					]
				}
			}
		},
		{
			"displayName": "POST /configs/notifications/events/{eventName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Create Subscription Notification Event"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"required": true,
			"description": "eventName",
			"default": "REFRESH",
			"type": "options",
			"options": [
				{
					"name": "REFRESH",
					"value": "REFRESH"
				},
				{
					"name": "DATA UPDATES",
					"value": "DATA_UPDATES"
				},
				{
					"name": "AUTO REFRESH UPDATES",
					"value": "AUTO_REFRESH_UPDATES"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Create Subscription Notification Event"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event",
			"name": "event",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Create Subscription Notification Event"
					]
				}
			}
		},
		{
			"displayName": "PUT /configs/notifications/events/{eventName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Subscribed Notification Event"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "eventName",
			"required": true,
			"description": "eventName",
			"default": "REFRESH",
			"type": "options",
			"options": [
				{
					"name": "REFRESH",
					"value": "REFRESH"
				},
				{
					"name": "DATA UPDATES",
					"value": "DATA_UPDATES"
				},
				{
					"name": "AUTO REFRESH UPDATES",
					"value": "AUTO_REFRESH_UPDATES"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Subscribed Notification Event"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event",
			"name": "event",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Subscribed Notification Event"
					]
				}
			}
		},
		{
			"displayName": "GET /configs/publicKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Get Public Encryption Key"
					]
				}
			}
		},
];

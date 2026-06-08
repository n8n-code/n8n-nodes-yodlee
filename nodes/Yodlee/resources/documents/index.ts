import type { INodeProperties } from 'n8n-workflow';

export const documentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					]
				}
			},
			"options": [
				{
					"name": "Get Documents",
					"value": "Get Documents",
					"action": "Get Documents",
					"description": "The get documents service allows customers to search or retrieve metadata related to documents. <br>The API returns the document as per the input parameters passed. If no date range is provided then all downloaded documents will be retrieved. Details of deleted documents or documents associated to closed providerAccount will not be returned. <br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents"
						}
					}
				},
				{
					"name": "Delete Document",
					"value": "Delete Document",
					"action": "Delete Document",
					"description": "The delete document service allows the consumer to delete a document. The deleted document will not be returned in the get documents API. The HTTP response code is 204 (success without content).<br>Documents can be deleted only if the document related dataset attributes are subscribed.<br>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Download Document",
					"value": "Download Document",
					"action": "Download a Document",
					"description": "The get document details service allows consumers to download a document. The document is provided in base64.<br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Keyword",
			"name": "Keyword",
			"description": "The string used to search a document by its name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Keyword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"description": "The unique identifier of an account. Retrieve documents for a given accountId.",
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
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Doc Type",
			"name": "docType",
			"description": "Accepts only one of the following valid document types: STMT, TAX, and EBILL.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "docType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "The date from which documents have to be retrieved.",
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
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "The date to which documents have to be retrieved.",
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
						"Documents"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "documentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Download Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "documentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Download Document"
					]
				}
			}
		},
];

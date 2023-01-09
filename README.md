# unity-marketplace

A prototype marketplace that might one day drive Unity installations via the control plane.

## Schema
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "Name": {
      "type": "string",
      "description": ""
    },
    "Version": {
      "type": "string",
      "description": ""
    },
    "Channel": {
      "type": "string",
      "description": ""
    },
    "Owner": {
      "type": "string",
      "description": ""
    },
    "Description": {
      "type": "string",
      "description": ""
    },
    "Repository": {
      "type": "string",
      "description": ""
    },
    "Tags": {
      "type": "array",
      "items": [
          "type": "number"
      ]
    },
    "Category": {
      "type": "string",
      "description": ""
    },
    "IamRoles": {
      "type": "object",
      "properties": {
        "Statement": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "Effect": {
                  "type": "string"
                },
                "Action": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string"
                    }
                  ]
                },
                "Resource": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string"
                    }
                  ]
                }
              },
              "required": [
                "Effect",
                "Action",
                "Resource"
              ]
            }
          ]
        }
      },
      "required": [
        "Statement"
      ]
    },
    "Package": {
      "type": "string",
      "description": ""
    },
    "ManagedDependencies": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "Eks": {
              "type": "object",
              "properties": {
                "MinimumVersion": {
                  "type": "string"
                }
              },
              "required": [
                "MinimumVersion"
              ]
            }
          },
          "required": [
            "Eks"
          ]
        }
      ]
    },
    "Backend": {
      "type": "string",
      "description": ""
    },
    "DefaultDeployment": {
      "type": "object",
      "properties": {
        "Variables": {
          "type": "object",
          "properties": {
            "some_terraform_variable": {
              "type": "string"
            }
          },
          "required": [
            "some_terraform_variable"
          ]
        },
        "EksSpec": {
          "type": "object",
          "properties": {
            "NodeGroups": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "NodeGroup1": {
                      "type": "object",
                      "properties": {
                        "MinNodes": {
                          "type": "integer"
                        },
                        "MaxNodes": {
                          "type": "integer"
                        },
                        "DesiredNodes": {
                          "type": "integer"
                        },
                        "InstanceType": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "MinNodes",
                        "MaxNodes",
                        "DesiredNodes",
                        "InstanceType"
                      ]
                    }
                  },
                  "required": [
                    "NodeGroup1"
                  ]
                }
              ]
            }
          },
          "required": [
            "NodeGroups"
          ]
        }
      },
      "required": [
        "Variables",
        "EksSpec"
      ]
    }
  },
  "required": [
    "Name",
    "Version",
    "Channel",
    "Owner",
    "Description",
    "Repository",
    "Tags",
    "Category",
    "IamRoles",
    "Package",
    "Backend",
    "DefaultDeployment"
  ]
}
```

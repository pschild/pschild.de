---
title: Smart Home Skill für Alexa
layout: post
category: "Alexa"
tags:
  - "Alexa"
draft: yes
---
## Referenzen
* https://developer.amazon.com/de/docs/smarthome/steps-to-build-a-smart-home-skill.html
* https://github.com/alexa/alexa-smarthome/wiki/Build-a-Working-Smart-Home-Skill-in-15-Minutes#configure-skill
* https://forum.fhem.de/index.php/topic,60244.0.html

# Schritt 1: LWA konfigurieren
1. Einloggen im [Developer Portal](https://developer.amazon.com/login.html)
2. Apps & Services > Login with Amazon > Create a New Security Profile
3. Erforderliche Felder ausfüllen:
    ```no-highlight
    Security Profile Name: pschild
    Security Profile Description: test profile for smart home skill
    Consent Privacy Notice URL: https://www.amazon.com/gp/help/customer/display.html?nodeId=468496
    ```
4. Generierte Client ID und Client Secret werden in Schritt 2 benötigt (Tab "General")!

# Schritt 2: Lambda-Funktion erstellen
1. [Lambda-Funktionen in der AWS Konsole öffnen](https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/)
2. Create Function > Author from scratch
    ```no-highlight
    Name: <function_name>
    Runtime: Node.js 6.10
    Role: Choose an existing role
    Existing role: <create_role>
    ```
3. Als Trigger "Alexa Smart Home" auswählen
    ```no-highlight
    Application ID: amzn1.ask.skill.<skill_id>
    ```
4. Für die Funktion selbst folgenden Code einfügen ([Quelle](https://developer.amazon.com/de/docs/smarthome/steps-to-build-a-smart-home-skill.html)):
    ```javascript
    exports.handler = function (request, context) {
        if (request.directive.header.namespace === 'Alexa.Discovery' && request.directive.header.name === 'Discover') {
            log("DEBUG:", "Discover request",  JSON.stringify(request));
            handleDiscovery(request, context, "");
        }
        else if (request.directive.header.namespace === 'Alexa.PowerController') {
            if (request.directive.header.name === 'TurnOn' || request.directive.header.name === 'TurnOff') {
                log("DEBUG:", "TurnOn or TurnOff Request", JSON.stringify(request));
                handlePowerControl(request, context);
            }
        }

        function handleDiscovery(request, context) {
            var payload = {
                "endpoints":
                [
                    {
                        "endpointId": "demo_id",
                        "manufacturerName": "Smart Device Company",
                        "friendlyName": "Bedroom Outlet",
                        "description": "Smart Device Switch",
                        "displayCategories": ["SWITCH"],
                        "cookie": {
                            "key1": "arbitrary key/value pairs for skill to reference this endpoint.",
                            "key2": "There can be multiple entries",
                            "key3": "but they should only be used for reference purposes.",
                            "key4": "This is not a suitable place to maintain current endpoint state."
                        },
                        "capabilities":
                        [
                            {
                              "type": "AlexaInterface",
                              "interface": "Alexa",
                              "version": "3"
                            },
                            {
                                "interface": "Alexa.PowerController",
                                "version": "3",
                                "type": "AlexaInterface",
                                "properties": {
                                    "supported": [{
                                        "name": "powerState"
                                    }],
                                     "retrievable": true
                                }
                            }
                        ]
                    }
                ]
            };
            var header = request.directive.header;
            header.name = "Discover.Response";
            log("DEBUG", "Discovery Response: ", JSON.stringify({ header: header, payload: payload }));
            context.succeed({ event: { header: header, payload: payload } });
        }

        function log(message, message1, message2) {
            console.log(message + message1 + message2);
        }

        function handlePowerControl(request, context) {
            // get device ID passed in during discovery
            var requestMethod = request.directive.header.name;
            // get user token pass in request
            var requestToken = request.directive.payload.scope.token;
            var powerResult;

            if (requestMethod === "TurnOn") {

                // Make the call to your device cloud for control
                // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
                powerResult = "ON";
            }
           else if (requestMethod === "TurnOff") {
                // Make the call to your device cloud for control and check for success
                // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
                powerResult = "OFF";
            }
            var contextResult = {
                "properties": [{
                    "namespace": "Alexa.PowerController",
                    "name": "powerState",
                    "value": powerResult,
                    "timeOfSample": "2017-09-03T16:20:50.52Z", //retrieve from result.
                    "uncertaintyInMilliseconds": 50
                }]
            };
            var responseHeader = request.directive.header;
            responseHeader.name = "Alexa.Response";
            responseHeader.messageId = responseHeader.messageId + "-R";
            var response = {
                context: contextResult,
                event: {
                    header: responseHeader
                },
                payload: {}

            };
            log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
            context.succeed(response);
        }
    };
    ```
5. Save

# Schritt 2: Skill anlegen
1. [Developer Portal](https://developer.amazon.com/home.html) öffnen
2. Create skill > Namen eingeben > German als Sprache auswählen > Next
3. Smart Home auswählen > Create Skill
4. In den Skill-Einstellungen folgende Daten hinterlegen:
    ```no-highlight
    SMART HOME:
    Payload version: v3
    AWS Lambda ARN > Default endpoint: arn:aws:lambda:location<aws_account_id>:function:<lambda_name>

    ACCOUNT LINKING:
    Authorization URI: https://www.amazon.com/ap/oa
    Client ID: <client_id_from_step_1.4>
    Scope: profile (profile:<user_id>?)
    Redirect URLs: werden in Schritt 3 benötigt!
    Access Token URI: https://api.amazon.com/auth/o2/token
    Client Secret: <secret_from_step_1.4>
    Client Authentication Scheme: HTTP Basic (Recommended)
    ```

# Schritt 3: Noch einmal zurück zur LWA-Konfiguration
1. Tab "Web Settings" öffnen > Edit
2. Allowed Return URLs: Die 3 Redirect URLs aus Schritt 2.4 hinzufügen
3. Save

# Schritt 4: Skill aktivieren
1. [Alexa-Konfiguration](https://alexa.amazon.de/spa/index.html) im Browser oder per App öffnen
2. Skills > Ihre Skills > Entwicklerskills > Skill öffnen
3. Aktivieren
4. Ggf. mit Amazon-Login anmelden
5. Zugriff zulassen

# Schritt 5: Geräte suchen
1. "Alexa, suche nach Geräten"
2. In der Alexa App (Smartphone oder Browser) sollte nun unter Smart Home > Geräte das über die Lambda-Funktion definierte Geräte angezeigt werden.
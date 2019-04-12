$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("destination.feature");
formatter.feature({
  "line": 2,
  "name": "My Destination",
  "description": "",
  "id": "my-destination",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for locations on google maps",
  "description": "",
  "id": "my-destination;search-for-locations-on-google-maps",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on landing page of google maps",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003clocation\u003e\" into search text field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Selected locality is displayed as \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "my-destination;search-for-locations-on-google-maps;",
  "rows": [
    {
      "cells": [
        "location",
        "expected"
      ],
      "line": 14,
      "id": "my-destination;search-for-locations-on-google-maps;;1"
    },
    {
      "cells": [
        "Reading",
        "Reading"
      ],
      "line": 15,
      "id": "my-destination;search-for-locations-on-google-maps;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4619391500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for locations on google maps",
  "description": "",
  "id": "my-destination;search-for-locations-on-google-maps;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on landing page of google maps",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Reading\" into search text field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Selected locality is displayed as \"Reading\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Search.onLandingPageOfGoogleMaps()"
});
formatter.result({
  "duration": 1441121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reading",
      "offset": 9
    }
  ],
  "location": "Search.enterKeywordIntoSearchTextField(String)"
});
formatter.result({
  "duration": 1049434600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027SJA-LPT005855\u0027, ip: \u0027192.168.104.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.29.461591 (62ebf098771772..., userDataDir: C:\\Users\\OLA~1.EMM\\AppData\\...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: c45d1da53644f78bf0fbab71c7faf098\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\r\n\tat pages.LandingPg.setLocation(LandingPg.java:36)\r\n\tat steps.Search.enterKeywordIntoSearchTextField(Search.java:37)\r\n\tat ✽.And I enter \"Reading\" into search text field(destination.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Reading",
      "offset": 35
    }
  ],
  "location": "Search.selectedLocalityIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2305372200,
  "status": "passed"
});
});
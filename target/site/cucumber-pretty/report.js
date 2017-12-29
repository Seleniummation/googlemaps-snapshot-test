$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for multiple locations on google maps",
  "description": "",
  "id": "google-search;search-for-multiple-locations-on-google-maps",
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
  "line": 12,
  "name": "",
  "description": "",
  "id": "google-search;search-for-multiple-locations-on-google-maps;",
  "rows": [
    {
      "cells": [
        "location",
        "expected"
      ],
      "line": 13,
      "id": "google-search;search-for-multiple-locations-on-google-maps;;1"
    },
    {
      "cells": [
        "Bristol",
        "Bristol"
      ],
      "line": 14,
      "id": "google-search;search-for-multiple-locations-on-google-maps;;2"
    },
    {
      "cells": [
        "Hereford",
        "Hereford"
      ],
      "line": 15,
      "id": "google-search;search-for-multiple-locations-on-google-maps;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3718061171,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for multiple locations on google maps",
  "description": "",
  "id": "google-search;search-for-multiple-locations-on-google-maps;;2",
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
  "name": "I enter \"Bristol\" into search text field",
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
  "name": "Selected locality is displayed as \"Bristol\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Search.onLandingPageOfGoogleMaps()"
});
formatter.result({
  "duration": 9145391647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bristol",
      "offset": 9
    }
  ],
  "location": "Search.enterKeywordIntoSearchTextField(String)"
});
formatter.result({
  "duration": 353492907,
  "status": "passed"
});
formatter.match({
  "location": "Search.clickSearchButton()"
});
formatter.result({
  "duration": 136685731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bristol",
      "offset": 35
    }
  ],
  "location": "Search.selectedLocalityIsDisplayed(String)"
});
formatter.result({
  "duration": 21685546231,
  "status": "passed"
});
formatter.after({
  "duration": 2444005516,
  "status": "passed"
});
formatter.before({
  "duration": 2771756128,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for multiple locations on google maps",
  "description": "",
  "id": "google-search;search-for-multiple-locations-on-google-maps;;3",
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
  "name": "I enter \"Hereford\" into search text field",
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
  "name": "Selected locality is displayed as \"Hereford\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Search.onLandingPageOfGoogleMaps()"
});
formatter.result({
  "duration": 10186080969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hereford",
      "offset": 9
    }
  ],
  "location": "Search.enterKeywordIntoSearchTextField(String)"
});
formatter.result({
  "duration": 1845737805,
  "status": "passed"
});
formatter.match({
  "location": "Search.clickSearchButton()"
});
formatter.result({
  "duration": 182737410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hereford",
      "offset": 35
    }
  ],
  "location": "Search.selectedLocalityIsDisplayed(String)"
});
formatter.result({
  "duration": 16524843223,
  "status": "passed"
});
formatter.after({
  "duration": 2100031858,
  "status": "passed"
});
});

Feature: Google Search

  Scenario Outline: Search for multiple locations on google maps
    Given I am on landing page of google maps
    And I enter "<locations>" into search text field
    When I click search
    Then Selected locality is displayed
    Examples:
      | locations |
      | Reading |
      | Brentford |
      | Leeds |

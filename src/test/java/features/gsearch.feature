Feature: Google Search

  Scenario Outline: Search for multiple locations on google maps
    Given I am on landing page of google maps
    And I enter "<location>" into search text field
    When I click search
    Then Selected locality is displayed as "<expected>"
    Examples:
      | location  | expected  |
      | Reading   | Reading   |
      | Brentford | Brentford |
      | Norwich   | Norwich   |


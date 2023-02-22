@demo
Feature: Demo Feature login gmail account
  this file is used for demo purposes only

  Scenario: Login to Gmail Web
    Given I am on the gmail page
    And  I input "testfl148@gmail.com" into email field
    When I click on next button
    And  I input "Test@1234" into password field
    And  I click on Next button
    Then Gmail account detail page should be displayed
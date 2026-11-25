
Feature: Shopping cart

  As a Toolshop customer
  I want to add products to my shopping cart
  So that I can purchase the products I need

  Scenario: Add a product to the shopping cart
    Given I am on the Toolshop homepage
    When I search for "Pliers"
    And I select a product from the search results
    And I add the product to the cart
    Then the product should appear in the shopping cart
    And the cart should display the correct product details

  Scenario: Add multiple products to the shopping cart
    Given I am on the Toolshop homepage
    When I add two different products to the cart
    Then both products should appear in the shopping cart
    And the cart total should reflect the combined prices

  Scenario: View an empty shopping cart
    Given I am on the Toolshop homepage
    When I open the shopping cart without adding any products
    Then the cart should display an empty-cart message

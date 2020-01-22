Feature: Amazon customer journey
    E2E test scenario to cover one customer journey on Amazon website
    including navigating to the website
    searching a product
    adding it to the cart
    and proceeding to checkout

    Scenario: Verify the functionality to buy a product from amazon website
        Given User navigates to "https://www.amazon.com.au"
        When User search for product "Harry Potter Book Set"
        Then User add the product to cart and proceed to checkout
        
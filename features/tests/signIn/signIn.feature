Feature: SignIn Feature 

    Scenario: Sign in as an existing user

        When i open a browser
        Then i open the url 'http://www.google.com'
        Then i wait for 3 seconds
        Then i click the 'About' element
        Then i wait for 3 seconds
        Then i take a screenshot of the page
        Then i close the browser
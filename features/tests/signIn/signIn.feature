Feature: SignIn Feature 

    Scenario: Sign in as an existing user

        When i open a browser
        Then i open the url 'http://bbc.co.uk/football'
        Then i wait for 3 seconds
        Then i click the 'Tables' element
        Then i wait for 3 seconds
        Then i take a screenshot of the 'Tables' page
        Then i take a screenshot of the table element
        Then i click the 'Gossip' element
        Then i wait for 3 seconds
        Then i take a screenshot of the 'Gossip' page
        Then i click the 'Transfers' element
        Then i wait for 3 seconds
        Then i take a screenshot of the 'Transfers' page
        Then i click the 'Top Scorers' element
        Then i wait for 3 seconds
        Then i take a screenshot of the 'Top Scorers' page
        Then i close the browser
package steps;

import base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Test;
import pages.LandingPg;

import static org.junit.Assert.assertEquals;


public class Search {

    private BaseUtil base;

    public Search(BaseUtil base) {
        this.base = base;
    }



    @Given("^I am on landing page of google maps")
    public void onLandingPageOfGoogleMaps() throws Throwable {


        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.ofGoogleMaps();
    }

    @And("^I enter \"([^\"]*)\" into search text field$")
    public void enterKeywordIntoSearchTextField(String location) throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.setLocation(location);

    }

    @When("^I click search$")
    public void clickSearchButton() throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.clickSearch();

    }

    @Then("^Selected locality is displayed as \"([^\"]*)\"$")
    public void selectedLocalityIsDisplayed(String expected) throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.getLocation();

        expected = onLandingPage.getLocation();
        assertEquals(expected,onLandingPage.getLocation());

    }
}

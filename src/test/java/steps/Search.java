package steps;

import base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPg;

import static org.junit.Assert.assertEquals;


public class Search extends BaseUtil{

    private BaseUtil base;

    public Search(BaseUtil base) {
        this.base = base;
    }


    @Given("^I am on landing page of google maps$")
    public void iAmOnLandingPageOfGoogleMapsPage() throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.ofGoogleMaps();
    }

    @And("^I enter \"([^\"]*)\" into search text field$")
    public void iEnterTheIntoSearchTextField(String location) throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.setLocation(location);

    }

    @When("^I click search$")
    public void iClickTheSearchButton() throws Throwable {

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

package steps;

import base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LandingPg;

import static org.junit.Assert.assertEquals;


public class Search extends BaseUtil{

    private BaseUtil base;
    private WebElement textFld;
    private WebElement searchBtn;
    private WebElement location;


    public Search(BaseUtil base) {
        this.base = base;
    }

    @Given("^I am on landing page of google maps$")
    public void iAmOnLandingPageOfGoogleMapsPage() throws Throwable {

        base.driver.navigate().to("https://www.google.co.uk/maps");


    }

    @And("^I enter \"([^\"]*)\" into search text field$")
    public void iEnterTheIntoSearchTextField(String locations) throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.setLocation(locations);

    }

    @When("^I click search$")
    public void iClickTheSearchButton() throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.clickSearch();

    }

    @Then("^Selected locality is displayed$")
    public void selectedLocalityIsDisplayed() throws Throwable {

        LandingPg onLandingPage = new LandingPg(base);
        onLandingPage.getLocation();

        String locality = onLandingPage.getLocation();
        assertEquals(locality,onLandingPage.getLocation());

    }
}

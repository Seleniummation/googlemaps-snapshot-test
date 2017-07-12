package pages;

import base.BaseUtil;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;


public class LandingPg extends BaseUtil {

    private BaseUtil base;
    private static By textFld = By.id("searchboxinput");
    private static By location = By.cssSelector(".section-hero-header-title");
    private By searchButton = By.cssSelector("#searchbox-searchbutton");

    public LandingPg(BaseUtil base) {
        this.base = base;
    }

    public void ofGoogleMaps(){
        base.driver.navigate().to("https://www.google.co.uk/maps");}
    
    public void setLocation(String locations) {

        base.driver.findElement(textFld).sendKeys(locations);

    }

    public void clickSearch() {

        new WebDriverWait(base.driver, 80).until(ExpectedConditions.presenceOfElementLocated(searchButton)).click();
    }

    public String getLocation() {

        new WebDriverWait(base.driver, 250).until(ExpectedConditions.presenceOfElementLocated(location));
        base.driver.findElement(location).getText();

        //System.out.println("Location is set as " + location.getText() );
        return null;
    }



}


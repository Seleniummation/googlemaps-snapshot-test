package pages;

import base.BaseUtil;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;


public class LandingPg extends BaseUtil {

    private BaseUtil base;
    private WebElement textFld;
    private WebElement searchBtn;
    private WebElement location;



    public LandingPg(BaseUtil base) {
        this.base = base;
    }


    public LandingPg(WebDriver driver) {
        super();
    }



    public void setLocation(String locations) {

        new WebDriverWait(base.driver, 80).until(ExpectedConditions.titleIs("Google Maps"));
        textFld = base.driver.findElement(By.id("searchboxinput"));
        textFld.clear();
        textFld.sendKeys(locations);
    }

    public void clickSearch() {

        new WebDriverWait(base.driver, 80).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#searchbox-searchbutton"))).click();
        //searchBtn = base.driver.findElement(By.cssSelector("#searchbox-searchbutton"));
        //searchBtn.click();
    }

    public String getLocation() {

        new WebDriverWait(base.driver, 250).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".section-hero-header-title")));
        location = base.driver.findElement(By.cssSelector(".section-hero-header-title"));
        location.getText();

        //System.out.println("Location is set as " + location.getText() );
        return null;
    }



}


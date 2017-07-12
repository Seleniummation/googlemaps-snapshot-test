package steps;

import base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.junit.runners.Parameterized;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


public class ManagedDriver extends BaseUtil {

    private BaseUtil base;


    public ManagedDriver(BaseUtil base) {
        this.base = base;
    }

    @Before()
    public void initializeTest() throws IOException {

        Properties p = new Properties();
        FileInputStream fi = new FileInputStream("src//main//resources//global.properties");
        p.load(fi);
        p.getProperty("browser");

        if (p.getProperty("browser").contains("firefox")) {


            System.setProperty("webdriver.gecko.driver", "src\\test\\java\\browsers\\geckodriver.exe");
            base.driver = new FirefoxDriver();

        } else if (p.getProperty("browser").contains("ie"))

        {

            System.setProperty("webdriver.ie.driver", "src\\test\\java\\browsers\\IEDriverServer.exe");
            base.driver = new InternetExplorerDriver();

        } else if (p.getProperty("browser").contains("chrome"))

        {

            System.setProperty("webdriver.chrome.driver", "src\\test\\java\\browsers\\chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--disable-extensions");
            base.driver = new ChromeDriver();

        }



    }








    @After()
    public void tearDownTest(Scenario scenario) throws IOException {

        if (scenario.isFailed()) {

           File screenshot =((TakesScreenshot)base.driver).getScreenshotAs(OutputType.FILE);
           FileUtils.copyFile(screenshot, new File("C:\\Test Environment\\Images\\screen.png"));

        }


        base.driver.close();
    }


}


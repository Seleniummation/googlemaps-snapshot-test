package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"},



        format = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
        glue="steps",

         //Negation symbol excludes regression tagged scenarios during runtime execution
        tags = "~@regression"

        //AND operator executes scenarios with multiple tags
        //tags =  {"@~acceptance", "@regression"}



        //tags =  "@sanity"


)
public class TestRunner {
}

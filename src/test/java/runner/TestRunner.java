package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"},

        //~ Negation symbol excludes regression tagged scenarios during runtime execution
        //tags = "~@regression",

        format = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
        glue="steps",

        //AND operator executes scenarios within multiple tags
        //tags =  {"@sanity", "@regression"}

        tags =  "@sanity"


)
public class TestRunner {
}

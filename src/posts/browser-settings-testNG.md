---
title: Setting up your browser settings using TestNG annotations
description: testNG introduction
date: 2025-03-11
categories:
  - testNG
  - page object model
  - annotations
published: true
---

# Table of Contents

- [Introduction](#introduction)
   - [Purpose of TestNG Annotations](#purpose-of-testng-annotations)  
   - [Common TestNG Annotations](#common-testng-annotations)  
- [TestNG Annotation Hierarchy](#testng-annotation-hierarchy)
- [Implementation Guide](#implementation-guide)  
   - [Using @BeforeSuite](#using-beforesuite)
   - [Using @BeforeMethod](#using-beforemethod)
   - [Using @AfterMethod](#using-aftermethod)
   - [Helper Methods](#helper-methods)
- [Summary](#summary)

#### Introduction

The idea of this article is to introduce the reader to a practice of separating the TestNG framework annotations (excluding @Test) in a separate file when applying Page Object Model patterns while designing applications. 

Please refer to the [Page Object Model] article if you have not read it already.

To recap, the Page Object Model or POM for short, allows us to separate page elements from test scripts, thus allowing us to focus on the test cases. It makes test suites much easier to maintain and oraganize. 

<br>

#### Purpose of TestNG Annotations

#### Common TestNG Annotations

> Run tests using @Test

> Specify methods to be run before each suite using @BeforeSuite

> Specify methods to be run after each suite using @AfterSuite

> Run methods before each test class using @BeforeClass

> Run methods after each test class using @AfterClass

> Execute methods before each test method using @BeforeMethod

> Execute methods after each test method using @AfterMethod

> Create data-driven tests using @DataProvider

<br>

We could place each of those annotations in our test scripts, however, a much more efficient way to manage and maintain our suite would be to have some of those annotations specified in a separate file and use inheritance in our test scripts and classes.

<br>

If we are to draw a tree chart for the TestNG annotations then we can see a clear correlation and have them paired according to function:

<br>

#### TestNG Annotation Hierarchy

```
┌── @BeforeSuite
│
├── ┌── @BeforeTest
│   │
│   ├── ┌── @BeforeClass
│   │   │
│   │   ├── ┌── @BeforeMethod
│   │   │   │
│   │   │   ├── TEST
│   │   │   │
│   │   │   └── @AfterMethod
│   │   │
│   │   └── @AfterClass
│   │
│   └── @AfterTest
│
└── @AfterSuite
```
<br/><br/>

#### Implementation Guide

Let's start by creating our BrowserSettings.java file first. We could call this file BrowserSettings, Setup, BaseTestConfig or anything to remind us that we will be initiating the WebDriver or PlayWright settings in there as well as any other settings or methods that will be useful when running our tests. We will go over each annotation as we build it, so let's start by declaring our interface (WebDriver):

<br/><br/>

```
<!-- /src/test/java/BaseTestConfig.java -->
public class BaseTestConfig {

    private WebDriver webDriver;
    <!-- private Playwright playWright; -->

}
```
<br/><br/>

Note that we have a variable for Selenium's WebDriver, so we can easily call it when needed.

<br/><br/>

#### Using @BeforeSuite

Starting with `@BeforeSuite` we will create a method named `setBeforeSuite`:

<br/><br/>

``` 
@BeforeSuite
    public void setBeforeSuite () throws IOException {
        makeScreenshotDIR(SCREENSHOTS_DIR);
        deleteScreenshots();
    }
```

Depending on how our project is organized and how tests are ran, we can start thinking of what we need to be started or ran at this stage. For the purposes of this guide, I will only do 2 things:

1. Create a screenshots directory to take evidence when needed
2. Clean evidence before consequent executions of our test suite

<br/><br/>

As you will notice, we have 2 helper methods (`makeScreenshotDIR(); and deleteScreenshots();`). You can see the entire raw file of the application here:

<br/><br/>

[BaseTestConfig.java](https://raw.githubusercontent.com/mimmato/SK17-Automation-Final/refs/heads/master/src/test/java/BaseTestConfig.java) 

<br/><br/>

The idea here is that we first want to collect evidence of our test executions and any failed runs or detected bugs in the process, but first we need a directory to store those. In this case, we name the directory "screenshots", however, those could be configured to store videos, HTML repots etc or any other media that we might need for our project. We do a check for the directory and create it if not present. 

<br>

Next we ensure that the directory is clean and empty using the deleteScreeshots method.

<br>

These are the first 2 steps that I consider neccessary for the @BeforeSuite stage.

<br/><br/>

#### Using @BeforeMethod

<br/><br/>

The @BeforeMethod annotation is triggered before each individual test method runs. In our BaseTestConfig.java file, we use it to initialize the WebDriver depending on the browser type.

<br/><br/>

```
@BeforeMethod
@Parameters("browser")
public void setBeforeMethod(@Optional("chrome") String browser) {
    if (browser.equalsIgnoreCase("chrome")) {
        this.webDriver = new ChromeDriver();
    } else if (browser.equalsIgnoreCase("edge")) {
        this.webDriver = new EdgeDriver();
    }
    this.webDriver.manage().window().maximize();
    this.webDriver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
    this.webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
}
```

<br/>

What happens here:

<br>

>We allow dynamic browser selection via the @Parameters annotation, defaulting to Chrome if none is provided.

>After initializing the appropriate WebDriver instance, we maximize the browser window and set timeouts for page loading and implicit waits.

<br>

This setup ensures that every test method starts with a clean, fresh browser session, helping maintain test isolation and reliability.

<br>

#### Using @AfterMethod

<br>

Immediately after each test method finishes execution, the @AfterMethod annotated method is invoked.

<br>

```
@AfterMethod
protected void tearDownMethod(ITestResult testResult) {
    takeScreenshotOnFailure(testResult);
    quitDriver();
}
```
<br/>

At this stage:

    We attempt to take a screenshot only if the test has failed. This is extremely useful for debugging and tracking failures.

    Regardless of the test outcome, we close and nullify the WebDriver to ensure no leftover sessions remain open.

This practice is important for resource management and for preventing flaky tests that could interfere with each other.

<br/>

#### Helper Methods

<br>

makeScreenshotDIR(), deleteScreenshots(), takeScreenshotOnFailure()

<br>

We have three important helper methods supporting our @BeforeSuite, @BeforeMethod, and @AfterMethod flows:

>makeScreenshotDIR() — creates the screenshots directory if it does not exist.

>deleteScreenshots() — deletes any existing files inside the screenshots directory before a new test suite run.

>takeScreenshotOnFailure(ITestResult testResult) — captures a screenshot with a timestamped filename when a test fails.

<br>

These helper methods keep our suite clean, well-organized, and ready for evidence collection.

<br>

#### Summary

<br/>

In this guide, we demonstrated how to:

<br>

>Organize browser settings and WebDriver initialization logic into a base configuration class.

>Leverage TestNG annotations such as @BeforeSuite, @BeforeMethod, and @AfterMethod for better structure and test reliability.

>Use helper methods to manage artifacts like screenshots systematically.

<br>

By separating configuration concerns into a dedicated class like BaseTestConfig.java, we maintain cleaner test scripts, improve reusability, and lay down a professional foundation for any automation project.

<br/>

**NOTE:** The choice to initiate our WebDriver in @BeforeMethod or close it in @AfterMethod all comes down to personal preference in accordance to other files like the [testng.xml](https://raw.githubusercontent.com/mimmato/SK17-Automation-Final/refs/heads/master/testng.xml) file, for example.
Some teams prefer to initialize and quit the WebDriver at the class or suite level, while others prefer to do it per method to ensure complete isolation between test cases. Both approaches have their merits:

<br>

>Initializing and quitting the driver in @BeforeMethod and @AfterMethod ensures test independence and prevents side effects between tests.

>Initializing the driver once in @BeforeClass or @BeforeSuite can speed up execution when tests are dependent or when startup time is significant.

<br>

In our example, by setting up the WebDriver inside @BeforeMethod, we ensure that each test method starts with a fresh browser instance, reducing the chance of one test affecting another. Moreover, our [testng.xml](https://raw.githubusercontent.com/mimmato/SK17-Automation-Final/refs/heads/master/testng.xml) file is set to execute the test suite in parallel and based on the specified class files. This means that each class is treated as an independent unit, and its corresponding @BeforeMethod and @AfterMethod setups are executed separately for each test method inside that class. Running tests in parallel at the class level combined with per-method WebDriver initialization gives us a good balance between:

>Test isolation — Each test method has its own browser session.

>Parallelism — Multiple classes can be executed at the same time, reducing overall test execution time.



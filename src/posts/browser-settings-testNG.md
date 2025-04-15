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

- [Introduction](#Introduction)
- [Purpose of TestNG Annotations](#purpose-of-testng-annotations)  
- [Common TestNG Annotations](#common-testng-annotations)  
- [TestNG Annotation Hierarchy](#testng-annotation-hierarchy)
- [Implementation Guide](#implementation-guide)  
- [Using @BeforeSuite](#using-beforesuite)

#### Introduction

The idea of this article is to introduce the reader to a practice of separating the TestNG framework annotations (excluding @Test) in a separate file when applying Page Object Model patterns while designing applications. 

Please refer to the [Page Object Model] article if you have not read it already.

To recap, the Page Object Model or POM for short, allows us to separate page elements from test scripts, thus allowing us to focus on the test cases. It makes test suites much easier to maintain and oraganize. 

<br/><br/>

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

Let's start by creating our BrowserSettings.java file first and we will go over each annotation as we build it:

<br/><br/>

```
public class TestObject {

    private WebDriver webDriver;
    private Playwright playWright;

}
```
<br/><br/>

Note that we have a variable for Selenium's WebDriver, so we can easily call it when needed.

<br/><br/>

#### Using @BeforeSuite

Starting with `@BeforeSuite` we will create a method named setupBrowser

<!-- WebDriverManager.chromedriver().setup(); -->


---
title: WebElements in Selenium
description: WebElements in Selenium
date: 2025-03-01
categories:
  - web elements
  - selenium
  - webdriver
published: true
---

## Table of contents:

- [Introduction](#introduction)
- [List of Web Elements:](#list-of-web-elements:)
    - [1. WebElement and WebElements](#1.-WebElement-and-WebElements)
    - [2. Checkboxes](#checkboxes)
    - [3. Radio Buttons](#radio-buttons)
    - [4. Select (dropdown)](#Select-(dropdown))



## Web Elements in Selenium

### Introduction

In this article, we will review Web Elements in the context of Selenium’s WebDriver and as part of the DOM structure. We will go over the following list of web elements and review their limitations, rules, necessary methods, and other considerations when interacting with them.

You may also refer to the [“DOM and locators”](https://mimmato.github.io/posts/DOM-locators/) article for more information about the Document Object Model and locators for finding web elements.

### List of Web Elements:

1. WebElement and WebElements
2. Checkboxes
3. Radio Buttons
4. Select (dropdown)
5. Mouse Hover
6. Tables
7. Alert Boxes
8. Windows and Tabs
9. iFrames

---

## 1. WebElement and WebElements

### What are WebElement and WebElements?

A **WebElement** in Selenium represents an individual HTML element on a web page, allowing interaction such as clicking, sending input, and retrieving attributes.

A **WebElements** list is a collection of multiple WebElements found on a webpage that match a specific locator strategy.

### Locating a WebElement

To locate a single WebElement, use `findElement()`:

<br>

```
WebElement element = webDriver.findElement(By.id("elementID"));
```

### Locating Multiple WebElements

To locate multiple elements, use `findElements()`:

<br>

```
List<WebElement> elements = webDriver.findElements(By.className("elementsClass"));
```

<br>

The difference between `findElement()` and `findElements()` is that `findElement()` returns a single WebElement, while `findElements()` returns a list of matching elements or an empty list if no elements are found.

---

## 2. Checkboxes

<br>

Checkboxes are a type of web element that can be interacted with. Typically, users can select one or multiple checkboxes, which can either be checked or unchecked. Below is an example of an HTML block containing multiple checkboxes:

<br>

```
<form>
    <input type="checkbox" id="option1" name="option1">
    <label for="option1"> Option 1</label><br>

    <input type="checkbox" id="option2" name="option2">
    <label for="option2"> Option 2</label><br>

    <input type="checkbox" id="option3" name="option3">
    <label for="option3"> Option 3</label><br>
</form>
```

### Locating and Interacting with a Checkbox in Selenium

To locate a single checkbox:

<br>

```
WebElement checkbox = webDriver.findElement(By.xpath("//*[@id='option1']"));
checkbox.click();
boolean isChecked = checkbox.isSelected();
```

<br>

To locate multiple checkboxes:

<br>

```
List<WebElement> checkboxes = webDriver.findElements(By.xpath("//input[@type='checkbox']"));
for (WebElement cb : checkboxes) {
    cb.click();
}
```

---

## 3. Radio Buttons

Radio buttons allow users to select only one option from a set. Below is an example:

```
<form>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
</form>
```

### Locating and Selecting a Radio Button in Selenium

```
WebElement radioButton = webDriver.findElement(By.xpath("//input[@value='male']"));
radioButton.click();
```

---

## 4. Select (Dropdown)

Dropdowns allow users to select an option from a list. Selenium provides the `Select` class to interact with them.

<br>

```
<select id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
</select>
```

### Selecting an Option in Selenium

```
Select dropdown = new Select(webDriver.findElement(By.id("dropdown")));
dropdown.selectByValue("option1");
```

---

## 5. Mouse Hover

Mouse hover actions are performed using the `Actions` class in Selenium.

### Example:

```
Actions actions = new Actions(webDriver);
WebElement element = webDriver.findElement(By.id("hoverElement"));
actions.moveToElement(element).perform();
```

---

## 6. Tables

Tables contain structured data and are defined with the `<table>` tag in HTML.

### Example:


```
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
    </tr>
</table>
```

`<th>` - defines a table header cell

<br>

`<tr>` - defines a table row

<br>

`<td>` - defines a table data cell

### Retrieving Table Data

```
List<WebElement> rows = webDriver.findElements(By.xpath("//table/tr"));
for (WebElement row : rows) {
    System.out.println(row.getText());
}
```

---

## 7. Alert Boxes

Alerts are pop-up messages that require user interaction.

### Handling Alerts in Selenium

```
Alert alert = webDriver.switchTo().alert();
alert.accept(); // Clicks OK
alert.dismiss(); // Clicks Cancel
```

---

## 8. Windows and Tabs

Selenium allows switching between multiple windows and tabs.

### Handling Multiple Windows

```
String mainWindow = webDriver.getWindowHandle();
Set<String> allWindows = webDriver.getWindowHandles();
for (String window : allWindows) {
    if (!window.equals(mainWindow)) {
        webDriver.switchTo().window(window);
    }
}
```
<br>
This ensures seamless interaction with pop-up windows or new browser tabs.

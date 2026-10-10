# DOM (Document Object Model) — QA Notes

## 1. What is DOM?

**DOM stands for Document Object Model.**

The DOM is a tree-like representation of an HTML document created by the browser. JavaScript can access and modify this structure.

**Real-world example:** On an e-commerce website, clicking **Add to Cart** updates the cart count by changing the DOM.

### Main points

* HTML defines the page structure.
* The browser parses HTML and creates the DOM.
* JavaScript can read, update, add, and remove DOM elements.
* The live DOM can change without a full-page reload.

## 2. DOM Tree

Example HTML:

```html
<html>
  <body>
    <h1>Login</h1>
    <input id="username">
    <button id="loginBtn">Login</button>
  </body>
</html>
```

Simplified DOM tree:

```text
Document
└── html
    └── body
        ├── h1
        ├── input#username
        └── button#loginBtn
```

### Important terminology

* **Node:** An item in the DOM tree.
* **Element:** An HTML element such as `div`, `input`, or `button`.
* **Parent/Child:** Direct hierarchical relationships.
* **Sibling:** Nodes sharing the same parent.
* **Ancestor/Descendant:** Elements higher or lower in the tree.

**QA example:** If multiple buttons have the same text, use their parent section or a stable locator to identify the correct button.

## 3. HTML vs DOM

| HTML                                        | DOM                                |
| ------------------------------------------- | ---------------------------------- |
| Defines the page markup                     | Represents the document as objects |
| Usually comes from an HTML file or response | Created by the browser             |
| Contains initial markup                     | Reflects runtime changes           |
| Viewable through View Page Source           | Inspectable through DevTools       |

Example:

```html
<p id="status">Pending</p>
```

JavaScript:

```javascript
document.querySelector("#status").textContent = "Approved";
```

The live DOM now contains `Approved`, even if the original HTML source still contains `Pending`.

## 4. Common DOM Methods and Properties

| Method/property      | Purpose                               |
| -------------------- | ------------------------------------- |
| `getElementById()`   | Finds an element by ID                |
| `querySelector()`    | Finds the first matching CSS selector |
| `querySelectorAll()` | Finds all matching elements           |
| `textContent`        | Reads or changes text                 |
| `getAttribute()`     | Reads an HTML attribute               |
| `value`              | Gets the current form input value     |
| `checked`            | Gets the current checkbox state       |
| `classList`          | Reads or modifies CSS classes         |
| `click()`            | Programmatically triggers a click     |

Example:

```javascript
const message = document.querySelector("#errorMessage");
console.log(message.textContent);
```

**QA use:** Check whether the expected error message exists and contains the correct text.

## 5. Attributes vs Properties

An **attribute** generally represents a value declared in HTML. A **property** represents a value exposed by the live DOM object.

```html
<input id="email" value="old@example.com">
```

```javascript
const email = document.querySelector("#email");

console.log(email.getAttribute("value"));
console.log(email.value);
```

After the user changes the email, the attribute may still contain the old value while `.value` contains the new one.

**QA point:** Check `.value` for the current input value and `.checked` for the current checkbox state.

## 6. Static DOM vs Dynamic DOM

* **Static or relatively unchanged DOM:** The structure remains mostly unchanged during an interaction.
* **Dynamic DOM:** Elements, text, attributes, or states change while the application runs.

**Real-world examples:**

* Login displays an error message.
* Selecting a country updates the state dropdown.
* Adding a product updates the cart count.
* Search displays autocomplete suggestions.
* Submitting a form displays a success message.

### Why it matters to QA

Dynamic elements may appear after a delay. Automation should wait for the expected condition instead of using arbitrary delays.

Example using Selenium with Java:

```java
WebDriverWait wait =
    new WebDriverWait(driver, Duration.ofSeconds(10));

wait.until(
    ExpectedConditions.visibilityOfElementLocated(
        By.id("successMessage")
    )
);
```

Prefer explicit waits over fixed delays such as `Thread.sleep(5000)`.

## 7. Inspecting DOM with DevTools

### Steps

1. Open the webpage.
2. Right-click the element and select **Inspect**.
3. Use the Elements panel to inspect the live DOM.
4. Check IDs, classes, attributes, text, and hierarchy.
5. Use the Console to run JavaScript for debugging.
6. Use the Network panel to investigate failed requests.

**Real-world example:** If a Submit button does nothing, check whether it is disabled, covered by another element, associated with JavaScript errors, or followed by a failed network request.

Remember: an element existing in the DOM does not guarantee that it works correctly.

## 8. DOM Locators for QA Automation

Example HTML:

```html
<input id="username" name="username">
<button data-testid="login-button">Login</button>
```

CSS selectors:

```css
#username
[data-testid="login-button"]
input[name="username"]
```

Selenium examples:

```java
driver.findElement(By.id("username"));

driver.findElement(
    By.cssSelector("[data-testid='login-button']")
);
```

### Locator best practices

* Prefer stable test attributes, accessible roles/names, or unique IDs.
* Avoid absolute XPath expressions and unstable positional indexes.
* Ensure the locator identifies the intended element.
* Handle duplicate matches deliberately.
* Re-locate elements when a page re-render makes a reference stale.

## 9. Why DOM Is Important for QA

1. **Element identification:** Find the correct input, button, dropdown, or link.
2. **Automation:** Build reliable locators for Selenium and other frameworks.
3. **Validation:** Verify text, values, enabled states, and error messages.
4. **Debugging:** Investigate missing, hidden, or incorrectly configured elements.
5. **Synchronization:** Understand dynamic elements and implement appropriate waits.

**Important:** DOM checks alone cannot prove that a backend operation succeeded. Verify the actual application behavior and relevant API or network results when needed.

## 10. QA Checklist

* [ ] Confirm the locator identifies the correct element.
* [ ] Check uniqueness where required.
* [ ] Verify visibility and enabled state.
* [ ] Check current input values and checkbox states.
* [ ] Wait for the correct condition when the DOM changes.
* [ ] Verify the outcome after clicking or submitting.
* [ ] Avoid brittle XPath and unstable selectors.
* [ ] Inspect the DOM after interactions.
* [ ] Handle iframes and shadow DOM when applicable.
* [ ] Test actual business behavior, not just element presence.

## 11. Common QA Interview Questions

**Q1. What is DOM?**
A tree-based object representation of an HTML document.

**Q2. What is a dynamic DOM?**
A DOM that changes while the application runs.

**Q3. Why might Selenium fail to find an element?**
The element may not exist yet, the locator may be wrong, or the element may be inside a frame or shadow root.

**Q4. What is the difference between `textContent` and `innerText`?**
`textContent` reads DOM text, including hidden descendant text. `innerText` more closely reflects rendered text.

**Q5. What is a stale element reference?**
A reference to an element that is no longer attached to the current DOM.

**Q6. Does DOM presence mean an element is visible?**
No. An element can exist while hidden, disabled, or obscured.

## 12. Quick Revision Points

* DOM = Document Object Model.
* HTML defines markup; the browser creates the DOM.
* JavaScript can manipulate the DOM.
* DOM elements form a hierarchical tree.
* Attributes and live properties can differ.
* Dynamic DOM changes can affect automation.
* Use stable locators and explicit waits.
* DOM presence does not prove functionality.
* Verify the actual outcome of every important user action.

# JavaScript Arrays: `map()` vs `filter()`

## 1. Basic concept

### `map()`

- **Purpose:** Transform every element in an array.
- **Syntax:** `array.map(callbackFn)`
- **Returns:** A new array with the same length as the original array.
- **Changes the original array?** No, not directly.

```javascript
const nums = [1, 2, 3];
const result = nums.map(n => n * 2);

console.log(result); // [2, 4, 6]
console.log(nums);   // [1, 2, 3]
```

### `filter()`

- **Purpose:** Keep only elements that satisfy a condition.
- **Syntax:** `array.filter(callbackFn)`
- **Returns:** A new array containing matching elements. It may be shorter or empty.
- **Changes the original array?** No, not directly.

```javascript
const nums = [1, 2, 3, 4, 5];
const result = nums.filter(n => n % 2 === 0);

console.log(result); // [2, 4]
console.log(nums);   // [1, 2, 3, 4, 5]
```

---

## 2. Examples with different data types

### A. Numbers

**`map()` — double every number**

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

**`filter()` — select even numbers**

```javascript
const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]
```

### B. Strings

**`map()` — convert every string to uppercase**

```javascript
const fruits = ["apple", "banana"];
const upper = fruits.map(s => s.toUpperCase());

console.log(upper); // ["APPLE", "BANANA"]
```

**`filter()` — select strings starting with `"a"`**

```javascript
const fruits = ["apple", "banana", "grape"];
const startsWithA = fruits.filter(s => s.startsWith("a"));

console.log(startsWithA); // ["apple"]
```

### C. Objects

**`map()` — add a property to every object**

```javascript
const users = [
  { name: "Tom", age: 17 },
  { name: "Sam", age: 21 }
];

const withAdultStatus = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));

console.log(withAdultStatus);
// [
//   { name: "Tom", age: 17, isAdult: false },
//   { name: "Sam", age: 21, isAdult: true }
// ]
```

**`filter()` — keep users aged 18 or above**

```javascript
const users = [
  { name: "Tom", age: 16 },
  { name: "Sam", age: 18 },
  { name: "John", age: 25 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// [
//   { name: "Sam", age: 18 },
//   { name: "John", age: 25 }
// ]
```

---

## 3. Key differences

| Aspect | `map()` | `filter()` |
|---|---|---|
| Purpose | Transform elements | Select elements |
| Callback should return | A transformed value | A truthy/falsy result |
| Return value | New array | New array |
| Output length | Same as input | Same as or shorter than input |
| Changes original array? | No, not directly | No, not directly |
| Preserves order? | Yes | Yes |
| Removes duplicates automatically? | No | No |
| Typical use | Format or calculate data | Find matching data |

### Repeated / duplicate values

Neither method automatically removes duplicates. Each occurrence is processed independently.

```javascript
const nums = [1, 2, 2, 3];

console.log(nums.map(n => n * 2));
// [2, 4, 4, 6]

console.log(nums.filter(n => n === 2));
// [2, 2]
```

---

## 4. Points to remember

- **`map()` = transform every element.**
- **`filter()` = keep only matching elements.**
- Both return a **new array** and do not directly change the original array.
- `map()` returns the same number of elements as the input array.
- `filter()` can return fewer elements, including zero.
- Both preserve the relative order of returned elements.
- Neither method removes duplicates automatically.
- `map()` can be used without a condition; `filter()` is generally used with a condition.
- The callback should return the transformed value for `map()` and a truthy/falsy result for `filter()`.
- Avoid using `push()` inside the callback to build the result. Return the appropriate value instead.

### Important note about objects

The array itself is not changed by `map()` or `filter()`, but object references can be shared. Mutating an object inside a callback can affect the object in the original array. In the `map()` example above, `{ ...user }` creates a shallow copy before adding a property.

---

## 5. When to use them in real life

### Use `map()` to transform data

Examples:
- Convert names to uppercase.
- Calculate prices after tax.
- Extract names from user objects.
- Format API response data for display.
- Add a property to each object.

```javascript
const users = [
  { name: "Asha", age: 22 },
  { name: "Ravi", age: 25 }
];

const names = users.map(user => user.name);

console.log(names); // ["Asha", "Ravi"]
```

### Use `filter()` to select data

Examples:
- Find active users.
- Get products below a price limit.
- Select even numbers.
- Find completed tasks.
- Keep items matching a search.

```javascript
const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
  { name: "Cable", price: 200 }
];

const affordable = products.filter(product => product.price < 600);

console.log(affordable);
// [
//   { name: "Mouse", price: 500 },
//   { name: "Cable", price: 200 }
// ]
```

### In Selenium / Playwright automation with JavaScript

- **`map()`**: transform collected data, extract text values, or format results.
- **`filter()`**: keep values matching a condition, such as text containing `"Log"`.

```javascript
const texts = ["Login", "Home", "Logout"];
const matchingTexts = texts.filter(text => text.includes("Log"));

console.log(matchingTexts); // ["Login", "Logout"]
```

This example demonstrates array filtering only. Checking whether a web element is visible requires the relevant Selenium or Playwright API.

---

## 6. Interview quick revision

| If the task says… | Think of… |
|---|---|
| Transform every item | `map()` |
| Extract one property from each object | `map()` |
| Calculate or format every value | `map()` |
| Keep items matching a condition | `filter()` |
| Find users/products/tasks meeting criteria | `filter()` |
| Remove items that fail a condition | `filter()` |

**Memory trick:** `map()` → change all; `filter()` → keep some.

**Interview answer in one sentence:** Both methods return a new array without directly modifying the original array; `map()` transforms every element and keeps the same length, while `filter()` keeps only elements that pass a condition, so its result can be shorter.

# Coding Style Guidelines

## HTML:

1. **Indentation**: Always indent children elements to show the parent-child relationship and improve readability.
    ```html
    <div>
        <p>This is a paragraph.</p>
    </div>
    ```
2. **Use Lowercase**: HTML is case insensitive but it's a good practice to keep tags in lowercase.
    ```html
    <!-- Not recommended -->
    <DIV><P>Paragraph</P></DIV>

    <!-- Recommended -->
    <div><p>Paragraph</p></div>
    ```
3. **Close All Tags**: Although some tags in HTML are self-closing or optional-closing, it's best to close all tags.
    ```html
    <p>This is a paragraph.</p>
    ```
4. **Quote Attribute Values**: Always quote attribute values, even if it’s possible to leave some unquoted in some cases.
    ```html
    <div class="container"></div>
    ```
5. **Avoid Inline Styles**: Inline styles lead to messy code. Use CSS classes or IDs instead.

## CSS:

1. **Indentation**: Indent all declarations by one tab. Also, group related properties together.
    ```css
    .selector {
        display: block;
        margin: 0 auto;
        color: black;
    }
    ```
2. **Use Lowercase and Hyphens**: Use lowercase and hyphens when naming selectors. Avoid camelCase.
    ```css
    /* Not recommended */
    .mySelector { /* styles */ }

    /* Recommended */
    .my-selector { /* styles */ }
    ```
3. **End with a Semi-colon**: Always end your declarations with a semi-colon.
    ```css
    p {
        color: black;
    }
    ```
4. **0 and Units**: Do not use units after 0 values unless they are required.
    ```css
    margin: 0; 
    ```

## JavaScript:

1. **Use CamelCase**: Use camelCase when naming variables and function names.
    ```javascript
    var myVariable = "value";
    function myFunction() { /* code */ }
    ```
2. **Use Semicolons**: Always end your statements with a semicolon.
    ```javascript
    var myVariable = "value";
    ```
3. **Braces**: Open your braces on the same line as the function definition, if/else clause, etc.
    ```javascript
    if (condition) {
        // code
    } else {
        // code
    }
    ```
4. **Variable Declaration**: Declare variables at the top of your functions to make it clear what variables are function scoped.
    ```javascript
    function myFunction() {
        var firstVar, secondVar;
        // code
    }
    ```
5. **'===' vs '=='**: Always use `===` instead of `==` to avoid type coercion bugs.
    ```javascript
    if (myVar === "value") {
        // code
    }
    ```
6. **Comment Your Code**: Use comments to explain complex sections of code. This makes it easier for others (and future you) to understand what the code is doing.


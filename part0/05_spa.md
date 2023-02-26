```mermaid
sequenceDiagram
participant browser
participant server

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>-browser: HTML Document

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: CSS File (main.css)

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>-browser: JavaScript File (spa.js)

    Note right of browser: The browser executing JavaScript code that fetches the JSON (data.json) from the server

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: [ ..., { "content": "Hello Full Stack Open", "date": "2023-02-26"}, ... ]

    Note right of browser: The browser executes the callback function that renders the notes
```

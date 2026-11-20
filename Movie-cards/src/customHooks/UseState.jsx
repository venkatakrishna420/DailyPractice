// How does useRef work in React?
// In React, `useRef` is a hook that allows you to create a mutable reference that persists across re-renders of a component. It can be used to access and manipulate DOM elements directly or to store any mutable value that you want to keep between renders without causing a re-render when it changes.

// When you call `useRef`, it returns a ref object with a `current` property. You can assign this ref to a DOM element using the `ref` attribute, and React will update the `current` property to point to that DOM element. This allows you to interact with the DOM directly, such as focusing an input field or measuring its dimensions.

// Here's a simple example of how `useRef` works in React:```jsx
import React, { useRef } from 'react';
function TextInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        // Access the input element and focus it
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
// In this example, when the button is clicked, the `focusInput` function is called, which uses the `inputRef` to access the input element and call its `focus` method. This demonstrates how `useRef` can be used to interact with DOM elements directly in a functional component.

# 🚀 Development Tool Manager

A modern, responsive React web application designed to help users efficiently to decided what development tool they should use for any projects. They can keep tracks of which tools they have used so far for any particular project. It'll help them to decide which tools would be ideal for their project requirements.

---

## 🛠️ Technologies Used

- React.js
- Tailwind CSS / CSS3
- React Icons / React toastify
- Vercel
- TypeScript

---

## ✨ Features

1. Users can view a list of development tools they can use.

2. Users can select deselect the tools in a stack. It'll help them to keep tracks what they have or haven't used.

3. Provides helpful visual feedback and clean messages which will make the interactivity smooth.

---

## 💡 React Concept Answers

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension that lets you write HTML-like code inside JavaScript. It makes writing and reading UI structure much easier by combining component logic and visual layout in one place.

---

### 2. What is the difference between `props` and `state`?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. The child component cannot change props directly.
- **State:** Data managed locally *inside* a component that can change over time. When state updates, the component re-renders to reflect the change.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a React component to track local state. When state values update, React automatically updates the visual UI.  
**Where used in this project:** Used to store the fetched list of tickets/items, track selected items added to the task queue, and update remaining counts.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets you perform side effects in components, such as fetching data from an external API or file.  
**Why needed:** It triggers the `fetch()` call once when the component first mounts, preventing infinite fetch loops while ensuring JSON data populates the component state upon loading.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React track each rendered item individually. If items are added, removed, or reordered, React uses unique keys to update only the modified DOM elements rather than re-rendering the entire list, ensuring optimal performance.

---

### 6. What is conditional rendering? Show one place you used it.
**Conditional rendering** means rendering different UI elements based on specific conditions or state values (using ternary operators `? :` or `&&`).  
**Example used:** Displaying an empty message (e.g., *"No items added yet"*) when the selected items array length is zero, and rendering the actual list when items exist.

```jsx
{selectedItems.length === 0 ? (
  <p className="empty-message">No items in your stack!</p>
) : (
  <ItemList items="{selectedItems}"/>
)}

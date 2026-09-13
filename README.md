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
**JSX is a stack where you can write html inside JavaScript expression.

---

### 2. What is the difference between `props` and `state`?
- You can send data's from parent component to child component as information or in which component you want to show the data's where state is being used to change data's or bring some interactivity into the webpage or to handle events in a webpage. If any data changes in a webpage the state updates, the components re-renders to reflect the change.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The useState hook keeps track of the particular change or particular event that will happen. When state update's, React automatically updates the visual UI.  
**Where used in this project:** Used to store the stack a user gonna use .

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets you perform side effects in components, such as fetching data from an external API or file.  
**Why needed:** I did not use it here to fetch data. I used Suspense hook here.
---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The key prop helps React to track each rendered element,which comes from mostly array of objects, individually.
---

### 6. What is conditional rendering? Show one place you used it.
**Conditional rendering** means rendering UI elements differently based on specific conditions.  
**Example used:** in the "Add to Stack" button, in the sidebar when no stack is choosen.
---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- You can send data from parent component to child as a prop. But child component can not directly send any data to parent because in React the data flow is unidirectional. You can only send date from parent to child.   
**Example used:** in the "Add to Stack" button, in the sidebar when no stack is choosen.

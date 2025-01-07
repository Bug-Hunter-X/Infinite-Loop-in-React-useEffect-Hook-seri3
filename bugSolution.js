```javascript
//Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Correct logic. SetCount only runs once after initial render.
    console.log('Effect ran');
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```
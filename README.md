# React useEffect Infinite Loop Bug
This repository demonstrates a common yet subtle bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to incorrect dependency management within the `useEffect` call. 

## Bug Description
The `MyComponent` component uses the `useEffect` hook to update a counter state variable. However, the dependency array is missing or incorrect, leading to an infinite loop.  The component continuously renders, causing `setCount` to be called repeatedly.

## Solution
The solution involves correcting the dependency array of the useEffect hook.  By omitting the `count` from the array, the effect runs only after the initial render, avoiding the infinite loop.
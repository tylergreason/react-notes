# Notes App

## Purpose

A note taking application to quickly get back up to speed with React. Needs to use hooks and state. 

## Features 

- Index of notes that lists their title, time they were updated last, and the first 50 characters of their text. 
- Note view where user edits note. 
- CRUD on notes. 
- Keep note data in store in root of app, which would simulate user having logged in and their notes being returned. 

## Components Needed 

- Index view, holds notes 
- Note view, where user edits note. Navigated to from the index view. 
- EXTRA: Color selector for notes? 
- EXTRA: Tags for notes.
- EXTRA: Search by note text and tags. 


# React State Review Notes 

## Methods for storing data 
1. URL
2. Local/session storage in browser
3. Local state - storing state in one component. Form data, lists, etc. 
4. Lifted state to common parent - lift state to commn parent, then pass down to children. Includes duplicating state in multiple components. This is like what we did during mod 4 at Flatiron. 
5. Derived state - Existing values that are composed to give you the info you need, calculated on each render instead of storing the data. (This doesn't seem like a legitimate way to store anything). 
6. Refs - Useful for managing unconrolled components (forms not controlled by React). Can store values that are not displayed (like if the comonent is mounted, timer data, or any other data that needs to persist *between* renders). 
7. Context - global/broadly used state and functions. Avoids prop drilling. 
8. Third party library - Redux, Mobx, Recoil. Or remote state libraries: React-query, Swr, Relay, Apollo. 

# Managing Complex State with useReducer 

Reducer is a pure function that accepts a state and an action and returns a new state based on the action. 

The first value returned by `useReducer` is the state. 

The dispatch function is the second value returned by `useReducer`. The dispatch function is used to dispatch actions. Actions are how we change state. Dispatch takes an object as an argument with a `type` property, which holds the string that declares what type of action it is. So like `dispatch({type: 'increment'})` is a good example of calling dispatch. 

# React Context
Created in the topmost component, holds state, and gives access to the state to components for consumption. 

```ts
export const cartContext = React.createContext(null);
```

The default value (`null` here) would apply if the component tries to consume the context without a provider in the parent. 

`<CartContext>` will wrap the component that acts as the provider for the context. It accepts one property, `value`, which determines what data and functions are shared in the context. We want to share cart data and dispatch function, so we provide that as the attribute for `value`: 

```ts 
<CartContext.Provider value={{cart, dispatch}}>
...
</CartContext.Provider>
```

Any components under the provider in the app will be able to access the provided value. 

### Consuming Context 


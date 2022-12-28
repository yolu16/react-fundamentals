// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  const refName = React.useRef('')
  const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')
  function handleSubmit(event){
    event.preventDefault()
    console.log(refName)
    const username = refName.current.value//event.target.elements.usernameInput.value
    onSubmitUsername(username)
  }

  function handleChange(event){
    const {value: name} = event.target
    // const isValid = name === name.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
    setUsername(name.toLowerCase())
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={refName} value={username} onChange={handleChange}/>
        <div role='alert'>{error}</div>
      </div>
      <button disabled={!!error} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

import React from 'react'

const App = () => {
  return (
    //Create a list for AI Blogs topic
    <>
    <div>AI Blogs</div>
    <ul>
      <li>AI Education</li>
      <li>AI in Finanace</li>
      <li>AI in HealthCare</li>
      <li>AI in Agriculture</li>
      <li>AI in Transportaion</li>
    </ul>
    <form action="#">
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' />
      <br />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <br />
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosPutRequest = () => {
  const [post, setPost] = useState({
       title: '',
       body: ''
  })
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => 
        console.log(response.data))
  })
  const handleInput = (e) => {
      setPost({...post, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.put('https://jsonplaceholder.typicode.com/posts/1', {post}).then((response) => {
           console.log(response.data)
      })
  }
  return (
    <>
       <h2>Axios Put Request In React JS</h2>
       <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleInput} placeholder='Enter Title'/>  <br/> <br/>
          <input type='text' onChange={handleInput} placeholder='Enter Description'/> <br/> <br/>
          <button onClick={handleSubmit}>Submit</button>
       </form>
    </>
  )
}

export default AxiosPutRequest
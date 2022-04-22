import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState( [])

  // const getLocation = posts.map(post => post.address)
  // const street = getLocation.map( gl => gl.street)
  useEffect(() => {
    fetchData()
  }, [])
  

  const fetchData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    setPosts(data)
  }
  return (
    <div className="App">
      {posts.map( post => 
        <div key={post.id} className="card">
          <h1>{post.name}</h1>

          <h2 className='info-title'>General Info</h2>
          <div className='info'>
            <p><b>Username:</b> {post.username}</p>
            <p><b>Email:</b> {post.email}</p>
            <p><b>Address:</b> {post.address.street}, {post.address.suite}, {post.address.city}, {post.address.zipcode}.</p>
            <p><b>Phone:</b> {post.phone}</p>
            <p><b>Website:</b> <a href="{post.website}">{post.website}</a></p>
            <p><b>Company:</b> {post.company.name}</p>
            <p><b>Company's Catch Phrase:</b> {post.company.catchPhrase}</p>
            <p><b>Company's Function:</b> {post.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

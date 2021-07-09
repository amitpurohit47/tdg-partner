import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import Loader from "./Loader";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="list_wrapper">
        {posts.map((post, i) => (
          <LazyLoad height={200} once offset={[-200, 0]} debounce={500} placeholder={<Loader/>}>
            <Post title={post.title} body={post.body}></Post>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default App;

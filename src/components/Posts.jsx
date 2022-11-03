import React, { useState, useEffect, useRef, useCallback } from "react";
import PlaceHolder from "./PlaceHolder";
import axios from "axios";
const url = "https://dummyjson.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);


  const getNewPosts = async () => { 
    let limit = 5;
    let skip = posts.length;
    let URL = url + `?skip=${skip}&limit=${limit}`;

    let res = await axios.get(URL);
    const newPosts = res.data.posts;
    
    setPosts(oldPosts => [...oldPosts , ...newPosts]);
    
  };


  const handleScroll = (event)=>{
     const scrollTop = event.target.documentElement.scrollTop;
     const scrollHeight = event.target.documentElement.scrollHeight;
     const windowHeight = window.innerHeight;

     if(windowHeight+scrollTop+1 >= scrollHeight)
     {
      getNewPosts()
     }
  }

  useEffect(() => {
    
    getNewPosts();

    window.addEventListener('scroll' , handleScroll);

  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return <PlaceHolder key={index} content={post} />
    })}
    </div>
  );
};

export default Posts;

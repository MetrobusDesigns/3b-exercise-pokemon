import { useState, useEffect } from "react";

const Posts = () => {
    //https://jsonplaceholder.typicode.com/posts

    const [posts, setPosts] = useState([]);
// use the useEffect attribute, function, then const fetchPosts = async ()=>{}, const response or res with has the URI, then const data with wait res.json(). This shows you the format you want the data in, commonly json format
    useEffect(()=> {
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }
        // outside of the fetchPosts function add fetchPosts()
        fetchPosts ()
    }, [])

    return (
        <>
        <h2>Posts</h2>
        {posts.map((post) =>(
            <div><h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p></div>
        ))}
        </>

    )
}

export default Posts; 
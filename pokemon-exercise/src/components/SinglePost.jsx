import { useEffect, useState } from "react";

const SinglePost = () => {
  const [post, setPost] = useState ({});
    useEffect(()=> {

        const fetchPosts = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character/");
            const data = await res.json();
            console.log(data);
            setPost(data);
        }
fetchPosts()
console.log('');
    },[]);

  return (
    <>
      <label>Select an ID number 1-100</label>
      <input type="number" min={1} max={100}></input> 
    </>
  );
};

export default SinglePost;
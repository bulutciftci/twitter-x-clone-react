import {posts as postData} from "~/mock/posts.js";
import Post from "~/components/post/index.jsx";
import {WindowVirtualizer} from "virtua";
import {useState} from "react";


export default function ForYou(){

    const [posts, setPosts] = useState(postData);

    return(
        <WindowVirtualizer

            onRangeChange={(start, end) => {
                console.log('end', end + 1)
                if (end + 1 === posts.length) {
                    setPosts(prev => [...prev, ...postData])
                }
            }}
        >
            {posts.map((post, key) => <Post post={post} key={post.id + key}/>)}
            for you
        </WindowVirtualizer>
    )
}
import './PostDetailPage.css';
import { useParams } from "react-router-dom";
import {useState} from "react";

function PostDetailPage() {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});

    async function fetchPostInfo() {
        try {
                // GET-request om postInfo op te halen
            const response = posts.find((post) => {
                return post.id = postId;
            })
            console.log(response);
            setPostInfo(response);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>
            <h1>PostDetailPage</h1>
            <button onClick={fetchPostInfo}>Haal blogpost hierop!</button>
            {postInfo && <>
                <div>{postId}</div>
            </>}
        </>

    );

}

export default PostDetailPage;
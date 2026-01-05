import './PostDetailPage.css';
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import posts from '../../constants/data.json';
import BlogPostDetail from "../../components/blogPostDetail/BlogPostDetail.jsx";

function PostDetailPage() {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});
    console.log(posts);

    useEffect(() => {
        async function fetchPostInfo() {
            try {
                // hier moet de GET-request om postInfo op te halen
                const response = posts.find((post) => {
                    return post.id === Number(postId);
                })
                console.log(response);
                setPostInfo(response);
            } catch(e) {
                console.log(e);
            }
        }
        fetchPostInfo();
    }, []);


    return (
        <>
            <h1>PostDetailPage</h1>
            {postInfo && postInfo.id && <BlogPostDetail
                title={postInfo.title}
                author={postInfo.author}
                subtitle={postInfo.subtitle}
                content={postInfo.content}
                read={postInfo.readTime}
                comments={postInfo.comments}
                shared={postInfo.shares}
                created={postInfo.created}
            />}
        </>
    );

}

export default PostDetailPage;
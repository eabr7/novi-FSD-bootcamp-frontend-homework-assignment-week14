import './BlogPost.css';
import {Link} from "react-router-dom";


function BlogPost({posts}) {

    return (

        <ul className="blogpost-component">
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                    <p>({post.author})</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </li>
            ))}
        </ul>
    );
}

export default BlogPost;
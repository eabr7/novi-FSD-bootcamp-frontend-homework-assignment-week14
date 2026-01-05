import './BlogPost.css';


function BlogPost({posts}) {

    return (

        <ul className="blogpost-component">
            {posts.map((post) => (
                <li key={post.id}>
                    <p>{post.title} ({post.author})</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </li>
            ))}
        </ul>
    );
}

export default BlogPost;
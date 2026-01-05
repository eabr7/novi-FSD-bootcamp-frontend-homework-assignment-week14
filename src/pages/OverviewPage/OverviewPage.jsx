import './OverviewPage.css';
import BlogPost from "../../components/blogPost/BlogPost.jsx";
import {useEffect, useState} from "react";
import posts from "../../constants/data.json";


function OverviewPage() {

    const [allPosts, setAllPosts] = useState([]);
    const [errorAllPosts, toggleErrorAllPosts] = useState(false);
    const [loadingAllPosts, toggleLoadingAllPosts] = useState(false);


    useEffect(() => {
        async function fetchAllPosts() {
            try {
                toggleLoadingAllPosts(true);
                toggleErrorAllPosts(false);
                const response = posts.map((post) => {
                    return post;
                })
                console.log(response);
                setAllPosts(response);
            } catch (e) {
                console.log(e);
                toggleErrorAllPosts(true);
            } finally {
                toggleLoadingAllPosts(false);
            }
        }
        fetchAllPosts();
    }, []);

    if (loadingAllPosts) {
        return <p>Blogposts worden geladen...</p>;
    }

    if (errorAllPosts) {
        return <p className="error-message">Het ophalen van de blogposts ging mis.</p>;
    }

    if (allPosts.length === 0) {
        return <p>Geen blogposts gevonden.</p>;
    }

    return (
        <>
            <h1>OverviewPage</h1>

            <BlogPost
                posts={allPosts}
            />
        </>
    );
}

export default OverviewPage;
import './OverviewPage.css';
import BlogPost from "../../components/blogPost/BlogPost.jsx";
import {useState} from "react";
import posts from "../../constants/data.json";


function OverviewPage() {

    const [allPosts, setAllPosts] = useState([]);
    const [errorAllPosts, toggleErrorAllPosts] = useState(false);
    const [loadingAllPosts, toggleLoadingAllPosts] = useState(false);

    async function fetchAllPosts() {
        try {
            toggleLoadingAllPosts(true);
            toggleErrorAllPosts(false);
            const response = posts.map((post) => {
                return post;
            })
            console.log(response);
            setAllPosts(response);
        } catch(e) {
            console.log(e);
            toggleErrorAllPosts(true);
        } finally {
            toggleLoadingAllPosts(false);
        }
    }


    return (
        <>
            <h1>OverviewPage</h1>

            <button type='button' onClick={fetchAllPosts} disabled={loadingAllPosts || allPosts.length > 0}>klik hier om de blogposts op te halen</button>

            {allPosts.length > 0 ?
            <BlogPost
                posts={allPosts}
            /> : (<p>Druk op de knop om de blogposts op te halen</p>)
            }
            {errorAllPosts && <p className="error-message">Het ophalen van de blogposts ging mis. Probeer het opnieuw.</p>}
        </>
    );
}

export default OverviewPage;
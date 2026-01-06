import './PostButton.css';

function PostButton({text}) {

    return (
        <>
            <button type="submit" className="post-button">
                {text}
            </button>
        </>
    );
}

export default PostButton;
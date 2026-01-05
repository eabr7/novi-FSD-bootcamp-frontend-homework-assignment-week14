import './BlogPostDetail.css';

function BlogPostDetail({title, author, subtitle, content, read, comments, shared, created}) {

    return (
        <>
            <article className="blogpost-detail-component">
                <h1>{title}</h1>
                <h3> -{author}</h3>
                <h2>{subtitle}</h2>
                <p>{content}</p>
                <p>{read} keer gelezen; {comments} reacties; {shared} keer gedeeld; {created} </p>
            </article>
        </>
    );
}

export default BlogPostDetail;
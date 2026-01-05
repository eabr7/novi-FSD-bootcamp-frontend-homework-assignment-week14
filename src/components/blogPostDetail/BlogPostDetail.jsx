import './BlogPostDetail.css';

function BlogPostDetail({title, author, subtitle, content, readTime, comments, shares, created}) {

    return (
        <>
            <article className="blogpost-detail-component">
                <h1>{title} ({readTime} minuten)</h1>
                <h2>{subtitle}</h2>
                <h4> Geschreven door {author} op {created}</h4>
                <p>{content}</p>
                <h6>{comments} reacties - {shares} keer gedeeld</h6>
            </article>
        </>
    );
}

export default BlogPostDetail;
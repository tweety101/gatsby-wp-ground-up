import React from "react";

export default ({data}) => {
    const post = data.wordpressPost
    return (
    <div>
        <h1>simple post: {post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    );
};

export const query = graphql`
        query BlogPostQuery($slug: String!){
	        wordpressPost(
             slug : {eq: $slug}
             ) {
                featured_media {
                    source_url
                  }
                 title
                 date
                 content
                 }
            }
        `;
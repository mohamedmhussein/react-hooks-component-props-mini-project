import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    //   console.log(posts)
    const articles = posts.map(ar =>
        <Article key={ar.id} title={ar.title} date={ar.date} preview={ar.preview} />)
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList
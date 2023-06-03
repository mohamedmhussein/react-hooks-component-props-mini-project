import React from "react";
import Article from "./Article";

function ArticleList(post) {
    // const list = post.map(ar =>
    //     <article key={ar.id} title={ar.title} date={ar.date} preview={ar.preview} />)
    return (
        <main>
            {post.map(ar =>
        <article key={ar.id} title={ar.title} date={ar.date} preview={ar.preview} />)}
        </main>
    )
}

export default ArticleList
import React from "react";

import { NewsCard } from "./NewsCard";

export const NewsFeed = ({ news }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-fixed-top bg-primary">
                <span className="navbar-brand mb-0 h1">NEWS FEED</span>
            </nav>
            <main className="container-root">
                <div className="grid-container" id="infinite-list">

                    {news.map((newsArticle, i) => {
                        return (

                            <NewsCard
                                cardId={i}
                                key={i}
                                title={newsArticle.title}
                                author={newsArticle.by}
                                text={newsArticle.url}
                                score={newsArticle.score}
                            />


                        )
                    })}
                </div>
            </main>
        </React.Fragment>
    );
}

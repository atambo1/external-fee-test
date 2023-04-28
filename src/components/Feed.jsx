// Feed.js
import React, { useState, useEffect } from 'react';
import './Feed.css';

const FeedItem = ({ post }) => {
  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <img className="feed-item-avatar" src={post.author.picture} alt={post.author.displayName} />
        <div className="feed-item-header-text">
          <h2 className="feed-item-author">{post.author.displayName}</h2>
          <h3 className="feed-item-date">{new Date(post.created).toLocaleString()}</h3>
        </div>
      </div>
      <p className="feed-item-text">{post.text}</p>
      <div className="feed-item-footer">
        <button className="feed-item-like">{post.liked ? 'Unlike' : 'Like'}</button>
      </div>
    </div>
  );
};


const Feed = ({ feed }) => {
  console.log(feed);
  return (
    <div className="container">
      {feed?.map((post) => (
        <FeedItem key={post.postId} post={post} />
      ))}
    </div>
  );
};


export default Feed;

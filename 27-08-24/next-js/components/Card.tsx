import React from "react";
import "./Card.css";

export interface ICard {
  title: string;
  date: string;
  id: number;
  description: string;
  author: { name: string };
}

export function Card({ post }: { post: ICard }) {
  return (
    <div className="card">
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <span> id: {post.id}</span>
      <p>{post.description}</p>
      <h4>{post.author.name}</h4>
    </div>
  );
}

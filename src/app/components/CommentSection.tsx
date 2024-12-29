'use client';

import { useState } from 'react';

export default function CommentSection({ }: { slug: string }) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-indigo-600">Comments</h2>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded-md"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleCommentSubmit}
        >
          Submit
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-md">
            {comment}
          </li>
        ))}
      </ul>
    </section>
  );
}
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
    <section className="mt-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 custom:px-[5%]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-indigo-600 text-center sm:text-left">
        Comments
      </h2>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-blue-600 transition"
          onClick={handleCommentSubmit}
        >
          Submit
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 p-2 rounded-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            {comment}
          </li>
        ))}
      </ul>
    </section>
  );
}

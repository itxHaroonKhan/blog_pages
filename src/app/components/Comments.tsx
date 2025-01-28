'use client';
import { useState, useEffect } from 'react';

interface Comment {
  text: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  flagged: boolean;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Store comments
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // Handle Comment Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && newComment.trim()) {
      const newCommentObject = {
        text: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        flagged: false,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
      setUsername('');
    }
  };

  // Handle Edit
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditText(comments[index].text); // Get only the text of the comment to edit
  };

  // Save the edited comment
  const saveEdit = () => {
    if (editText.trim()) {
      const updatedComments = [...comments];
      updatedComments[editIndex!] = { ...updatedComments[editIndex!], text: editText };
      setComments(updatedComments);
      setEditIndex(null);
      setEditText('');
    }
  };

  // Handle Delete
  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // Store comments in localStorage when updated
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  // Load comments from localStorage on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedComments = localStorage.getItem('comments');
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, []);

  return (
    <div className="text-white p-6 rounded-lg shadow-lg mt-8">
      {/* Comments List */}
      <ul className="space-y-4 mb-6">
        {comments.map((comment, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
            {editIndex === index ? (
              <div className="flex-1">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={saveEdit}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-800 flex-1">{comment.text}</p>
            )}
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add Comment Section */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Add a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows={4}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;

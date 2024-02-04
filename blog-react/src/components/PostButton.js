import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const PostButton = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePostButtonClick = () => {
    setIsInputVisible(true);
  };

  const handlePostSubmit = () => {
    // Generate id and date
    const postId = Math.floor(Math.random() * 1000) + 1; // Logic to generate id
    const currentDate = new Date().toISOString().split('T')[0];

    console.log('Post submitted:', {
      id: postId,
      title: postTitle,
      content: postContent,
      date: currentDate,
    });

    fetch('http://blogger-api-service:8081', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: postId,
        title: postTitle,
        content: postContent,
        date: currentDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        setIsModalOpen(true); // Open the modal when the post is successfully submitted
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // Display success modal
    setIsModalOpen(true);

    // Reset the input and hide it
    setPostContent('');
    setIsInputVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="fixed bottom-20 left-0 w-full bg-gray-200 rounded-full">
        {/* Render post button */}
        {!isInputVisible && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full h-full p-4 rounded-full"
            onClick={handlePostButtonClick}
          >
            Create Post
          </button>
        )}
      </div>

      {/* Render post input if the button is clicked */}
      <div className="fixed bottom-20 left-0 w-full">
        {isInputVisible && (
          <div className="mt-4">
            <input
              type="text"
              className="w-full border p-2 mb-2 rounded-sm transition-all duration-300 ease-in"
              placeholder="Enter post title..."
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              className="w-full h-32 border rounded-sm transition-all duration-300 ease-in"
              placeholder="Write your post..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <button
              className=" bg-green-500 hover:bg-green-700 text-white font-bold w-full p-4 rounded-full"
              onClick={handlePostSubmit}
            >
              Submit Post
            </button>
          </div>
        )}
      </div>
      <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto cursor-pointer"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0" />

            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md text-left">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                Post Submitted
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your post has been successfully submitted.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className=" inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PostButton;

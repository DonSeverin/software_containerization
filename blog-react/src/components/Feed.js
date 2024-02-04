import React from 'react';
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import PostButton from './PostButton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Feed() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [categories, setCategories] = useState({
    Posts: [],
  });
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  useEffect(() => {
    // Fetch posts from the provided API endpoint
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'http://blogger-api-service:8081'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setCategories({ Posts: data.posts });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full h-full bg-black px-2 ">
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-2 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out',
                  selected
                    ? 'bg-white text-black shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={`
                'rounded-xl bg-blue-900/20 p-3',
                'ring-white/60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out'
             `}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className={`relative text rounded-md p-3 text-white hover:bg-white/[0.12]  transition-all duration-300 ease-in-out ${
                      selectedPost === post ? 'text-black' : ''
                    }`}
                    onClick={() => handlePostClick(post)}
                  >
                    <h3 className={`text-lg font-medium leading-5 `}>
                      {post.title}
                    </h3>
                    {selectedPost === post && (
                      <p
                        className={`mt-2 py-3 pl-5 text-base font-normal leading-4 `}
                      >
                        {post.body}
                      </p>
                    )}
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 ">
                      <li>date: {post.date} </li>
                    </ul>

                    <button
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out '
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <PostButton />
    </div>
  );
}

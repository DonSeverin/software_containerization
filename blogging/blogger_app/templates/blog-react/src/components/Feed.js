import React from 'react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Feed() {
    let [categories] = useState({
        Posts: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                content: 'Containerization, also referred as container stuffing or container loading, is the process of unitization of cargoes in exports. Containerization is the predominant form of unitization of export cargoes, as opposed to other systems such as the barge system or palletization. The containers have standardized dimensions.',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                content: 'Containerization, also referred as container stuffing or container loading, is the process of unitization of cargoes in exports. Containerization is the predominant form of unitization of export cargoes, as opposed to other systems such as the barge system or palletization. The containers have standardized dimensions.',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Mine: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                content: 'Containerization, also referred as container stuffing or container loading, is the process of unitization of cargoes in exports. Containerization is the predominant form of unitization of export cargoes, as opposed to other systems such as the barge system or palletization. The containers have standardized dimensions.',
                commentCount: 5,
                shareCount: 2,
            }
        ]
    });


    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    }

    return (
        <div className="w-full h-full bg-black px-2 ">
            <Tab.Group >
                <Tab.List className="flex justify-center space-x-2 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white test-black shadow'
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
                            className={classNames(
                                'rounded-xl bg-blue-900/20 p-3',
                                'ring-white/60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className = {`relative text rounded-md p-3 text-white hover:bg-gray-100 hover:text-black`}
                                        onClick={() => handlePostClick(post)}
                                    >
                                        <h3 className="text-lg font-medium leading-5">
                                            {post.title}
                                        </h3>
                                        {selectedPost === post && (
                                            <p className="mt-2 pl-5 text-base font-normal leading-4">
                                            PostedTime: {post.content}
                                          </p>
                                        )}
                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 ">
                                            <li>{post.commentCount} likes</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} comments</li>
                                        </ul>

                                        <button
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

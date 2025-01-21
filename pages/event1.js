import React, { useState, useEffect } from 'react';
import fredricka from '../components/fonts/fredricka';

const InstagramImages = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual Instagram Basic Display API access token.
    const accessToken = 'IGAAPBsYpwogpBZAE1FdkJRMC1hRlc3aklzS3lTRXNWWW1NaGRlanJPTE5HYUJnTUszQXNWUXNPQ1NvX2VFZAUZAUQ2FJbi1paWQ2bjFRVmtYMkw1NTFKQnRJMFoweUVhbWVXUjJqVWF5d0lOR0daVUxQeVk4MnhKMGZArem5yemdSbwZDZD';
    const userId = 'sahai_india'; // Replace with your Instagram user ID.
    const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url';

    fetch(`https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => {
        setInstagramPosts(data.data);
      })
      .catch((error) => {
        console.error('Error fetching Instagram posts:', error);
      });
  }, []);

  return (
    <div className="flex flex-col px-2 items-center justify-center">
      <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}>Our Events</h1>
      <h2 className="md:text-2x text-lg md:w-2/3 font-bold my-8 text-[#926D65] text-center">
        Sahai frequently hosts both in-person and virtual events to facilitate discussions about mental health. Here are some of our recent events!
      </h2>
      
      <h2 className="text-5xl font-bold mt-20 text-[#926D65] text-center">Online</h2>
      <div className="grid p-8 grid-col-1 md:grid-cols-3 gap-8">
        {instagramPosts.map((post) => (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="p-8 rounded relative">
            <img src={post.media_url} alt={post.caption || 'Instagram post'} className="rounded w-full h-full object-cover" />
            <div className="absolute bottom-10 right-10 m-2">
              <img src="/instagram.svg" alt="Instagram icon" className="h-6 w-6 text-white" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramImages;

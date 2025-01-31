import React, { useState } from "react";
import './VideoGallery.css';

const videos = [
  {
    id: 1,
    title: "Exploring Nature: A Journey Through the Amazon",
    thumbnail: "https://images.unsplash.com/photo-1513652990199-8a52e2313122?w=500&auto=format",
    description: "Join us on an incredible journey through the Amazon rainforest, discovering exotic wildlife and breathtaking landscapes.",
    duration: "15:30",
    views: "1.2M",
    uploadedAt: "2 weeks ago",
    videoUrl: "https://example.com/videos/amazon-journey.mp4"
  },
  {
    id: 2,
    title: "Modern Web Development Techniques",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
    description: "Learn the latest web development techniques and best practices from industry experts.",
    duration: "23:45",
    views: "856K",
    uploadedAt: "5 days ago",
    videoUrl: "https://example.com/videos/web-dev.mp4"
  }
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="p-4">
      {selectedVideo ? (
        <div className="flex flex-col items-center">
          <video controls className="w-full max-w-3xl mb-4">
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => setSelectedVideo(null)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Videos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-auto-fill-300 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="cursor-pointer border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
                <div className="text-gray-500 text-xs mt-2">
                  <span>{video.views} views • {video.uploadedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;

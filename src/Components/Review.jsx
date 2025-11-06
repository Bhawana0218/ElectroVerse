import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Anupan Shah",
      rating: 5,
      comment: "The sound quality of these headphones is absolutely incredible! The bass is deep and rich without overwhelming the mids and highs. Battery life exceeded my expectations.",
      product: "Wireless Headphones Pro X",
      date: "2023-10-15",
      avatar: "https://th.bing.com/th/id/OIP.7ldL7IDCwSzyS6T9WSZPAgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      id: 2,
      name: "Sarad Jha",
      rating: 4,
      comment: "This smartwatch has transformed how I track my fitness. The display is crisp and the health monitoring features are accurate. Only wish the straps were more comfortable for long-term wear.",
      product: "SmartWatch Elite Series",
      date: "2023-10-18",
      avatar: "https://tse1.mm.bing.net/th/id/OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      name: "Manish Fartyal",
      rating: 5,
      comment: "Best camera I've ever owned! The image quality in low light is remarkable. The 4K video capabilities are perfect for my content creation work. Highly recommend to professionals.",
      product: "DSLR Camera Pro HD",
      date: "2023-10-20",
      avatar: "https://th.bing.com/th/id/OIP.K0uIcrqC_07ovmalD25FegHaLG?w=186&h=279&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      id: 4,
      name: "Emma Shah",
      rating: 5,
      comment: "The laptop's performance is outstanding for both work and gaming. The keyboard feels great and the trackpad is very responsive. Battery life is impressive for such a powerful machine.",
      product: "Gaming Laptop Ultra",
      date: "2023-10-22",
      avatar: "https://th.bing.com/th/id/OIP.Jh_F7__r5cWPpWDUnIFXIQHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      id: 5,
      name: "Dev Singh",
      rating: 4,
      comment: "The wireless earbuds deliver excellent sound quality and the noise cancellation works perfectly during my daily commute. Comfortable for extended listening sessions.",
      product: "True Wireless Earbuds",
      date: "2023-10-25",
      avatar: "https://th.bing.com/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
      {/* Main Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what our customers are saying about our premium electronics products
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Review Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Current Review Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Reviewer Info */}
                <div className=" shrink-0">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full border-4 border-white/30"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold">{reviews[currentReview].name}</h3>
                    <span className="text-sm text-gray-300">• {reviews[currentReview].date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {renderStars(reviews[currentReview].rating)}
                    </div>
                    <span className="text-sm text-gray-300 ml-2">
                      {reviews[currentReview].rating}/5
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                    "{reviews[currentReview].comment}"
                  </p>
                  
                  <div className="inline-block bg-linear-to-r from-blue-600/30 to-purple-600/30 px-4 py-2 rounded-full border border-white/20">
                    <span className="text-sm font-medium text-white">
                      {reviews[currentReview].product}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 text-sm line-clamp-3 mb-4">
                  {review.comment}
                </p>
                <div className="text-xs text-gray-400">
                  {review.product}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

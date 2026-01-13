
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-slate-50 py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 serif">Legal Insights</h1>
          <p className="text-xl text-slate-600">Thought leadership and news from the team at Greyline Partners.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="overflow-hidden mb-6 aspect-[16/9]">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 serif leading-tight hover:text-slate-700">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{post.author}</div>
                      <div className="text-xs text-slate-500">{post.date}</div>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-bold text-slate-900 uppercase tracking-widest hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

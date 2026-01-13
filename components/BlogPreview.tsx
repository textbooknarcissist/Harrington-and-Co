
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 serif">Legal Insights</h2>
            <p className="text-slate-600 max-w-xl text-lg">
              Stay informed with our latest articles on evolving legal landscapes and professional best practices.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#/blog" className="inline-block px-6 py-3 border border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all uppercase text-sm tracking-widest">
              View All Articles
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden mb-6 aspect-video bg-slate-100">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors serif leading-snug">
                  <a href={`#/blog`}>{post.title}</a>
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-slate-500 pt-4">
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

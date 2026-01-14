
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-4 serif leading-tight">Resources & Insights</h2>
            <p className="text-[#F7F5F0]/50 max-w-xl text-lg font-light leading-relaxed">
              Stay informed with our latest articles on evolving Nigerian legal landscapes and international best practices.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#/blog" className="inline-flex items-center px-8 py-4 border border-[#F7F5F0]/20 text-[#F7F5F0] font-bold hover:bg-[#C6A75E] hover:text-[#0F1E2E] hover:border-[#C6A75E] transition-all duration-300 uppercase text-[10px] tracking-widest">
              View All Articles
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer p-6 border border-white/10 hover:border-[#C6A75E]/50 transition-all duration-500 bg-white/5">
              <div className="overflow-hidden mb-8 aspect-video bg-white/5 relative">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C6A75E] text-[#0F1E2E] text-[8px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F7F5F0] group-hover:text-[#C6A75E] transition-colors serif leading-tight flex items-start gap-3">
                  {post.title}
                  <ArrowUpRight size={18} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[#F7F5F0]/40 font-light text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[10px] text-white/20 pt-4 tracking-widest uppercase font-bold">
                  <span>{post.author}</span>
                  <span className="mx-3 opacity-30">•</span>
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


import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Transfer Window Updates: Major Signings Expected',
      excerpt: 'Several top clubs are preparing massive bids for star players as the January transfer window approaches.',
      category: 'Transfers',
      date: '2024-12-16',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Champions League Quarter-Final Draw Announced',
      excerpt: 'The draw for the Champions League quarter-finals has been revealed with some exciting matchups.',
      category: 'Champions League',
      date: '2024-12-15',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'World Cup Qualification Updates',
      excerpt: 'Latest results and standings from the ongoing World Cup qualification matches around the globe.',
      category: 'International',
      date: '2024-12-14',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Football </span>
            <span className="text-green-400">News</span>
          </h1>
          <p className="text-gray-400">Stay updated with the latest football news and updates</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card key={article.id} className="bg-gray-800 border-gray-700 hover:border-green-500/50 transition-colors">
              <div className="aspect-video bg-gray-700 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 text-sm font-medium">{article.category}</span>
                  <span className="text-gray-400 text-sm">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 line-clamp-3">{article.excerpt}</p>
                <button className="mt-4 text-green-400 hover:text-green-300 transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;

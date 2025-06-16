
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Transfer Window: Big Moves Expected',
    excerpt: 'Several top clubs are preparing major signings as the transfer window approaches...',
    category: 'Transfers',
    time: '2 hours ago',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Champions League Draw Results',
    excerpt: 'The quarterfinal matchups have been decided with some exciting fixtures ahead...',
    category: 'Champions League',
    time: '4 hours ago',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Injury Update from Premier League',
    excerpt: 'Key players face fitness tests ahead of crucial weekend fixtures...',
    category: 'Premier League',
    time: '6 hours ago',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'World Cup Qualification Update',
    excerpt: 'Latest results from the qualifying rounds across different confederations...',
    category: 'International',
    time: '8 hours ago',
    image: '/placeholder.svg'
  }
];

export const LatestNews = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
      
      <div className="space-y-6">
        {news.map((article) => (
          <Card key={article.id} className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-slate-700 rounded-lg flex-shrink-0"></div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="text-green-400 bg-green-400/10">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.time}
                    </div>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

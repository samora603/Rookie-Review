
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Results = () => {
  const results = [
    {
      id: 1,
      date: '2024-12-15',
      competition: 'Premier League',
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore: 2,
      awayScore: 1,
      status: 'FT'
    },
    {
      id: 2,
      date: '2024-12-14',
      competition: 'Champions League',
      homeTeam: 'PSG',
      awayTeam: 'AC Milan',
      homeScore: 3,
      awayScore: 0,
      status: 'FT'
    },
    {
      id: 3,
      date: '2024-12-13',
      competition: 'La Liga',
      homeTeam: 'Atletico Madrid',
      awayTeam: 'Sevilla',
      homeScore: 1,
      awayScore: 1,
      status: 'FT'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Latest </span>
            <span className="text-green-400">Results</span>
          </h1>
          <p className="text-gray-400">Recent match results from top competitions</p>
        </div>

        <div className="grid gap-6">
          {results.map((result) => (
            <Card key={result.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-green-400 text-sm font-medium mb-2">
                      {result.competition} • {new Date(result.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">{result.homeTeam}</div>
                      <div className="text-2xl font-bold mx-4">
                        {result.homeScore} - {result.awayScore}
                      </div>
                      <div className="text-lg font-semibold">{result.awayTeam}</div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {result.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;

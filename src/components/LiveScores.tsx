
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const matches = [
  {
    id: 1,
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    status: 'FT',
    league: 'Premier League',
    time: '90+3\'',
  },
  {
    id: 2,
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    homeScore: 1,
    awayScore: 3,
    status: 'FT',
    league: 'La Liga',
    time: '90\'',
  },
  {
    id: 3,
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    homeScore: 2,
    awayScore: 2,
    status: 'LIVE',
    league: 'Bundesliga',
    time: '78\'',
  },
  {
    id: 4,
    homeTeam: 'PSG',
    awayTeam: 'Lyon',
    homeScore: null,
    awayScore: null,
    status: 'UPCOMING',
    league: 'Ligue 1',
    time: '20:00',
  },
];

export const LiveScores = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Live Scores</h2>
        <Badge className="bg-green-500 text-black hover:bg-green-600">
          Live
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-gray-400">{match.league}</CardTitle>
                <Badge 
                  variant={match.status === 'LIVE' ? 'default' : 'secondary'}
                  className={match.status === 'LIVE' ? 'bg-red-500 text-white animate-pulse' : ''}
                >
                  {match.status === 'UPCOMING' ? match.time : match.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{match.homeTeam}</span>
                  <span className="text-2xl font-bold text-green-400">
                    {match.homeScore !== null ? match.homeScore : '-'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{match.awayTeam}</span>
                  <span className="text-2xl font-bold text-green-400">
                    {match.awayScore !== null ? match.awayScore : '-'}
                  </span>
                </div>
                
                {match.status === 'LIVE' && (
                  <p className="text-center text-sm text-green-400 mt-2">
                    {match.time}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

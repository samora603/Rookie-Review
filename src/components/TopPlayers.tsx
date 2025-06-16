
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target } from 'lucide-react';

const players = [
  {
    id: 1,
    name: 'Erling Haaland',
    team: 'Manchester City',
    goals: 27,
    assists: 5,
    position: 'Forward'
  },
  {
    id: 2,
    name: 'Kylian Mbappé',
    team: 'PSG',
    goals: 24,
    assists: 8,
    position: 'Forward'
  },
  {
    id: 3,
    name: 'Harry Kane',
    team: 'Bayern Munich',
    goals: 22,
    assists: 6,
    position: 'Forward'
  },
  {
    id: 4,
    name: 'Bukayo Saka',
    team: 'Arsenal',
    goals: 12,
    assists: 15,
    position: 'Winger'
  }
];

export const TopPlayers = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Top Scorers</h2>
      
      <div className="space-y-4">
        {players.map((player, index) => (
          <Card key={player.id} className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-black font-bold rounded-full">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{player.name}</h3>
                    <p className="text-gray-400 text-sm">{player.team}</p>
                    <Badge variant="outline" className="text-green-400 border-green-400 mt-1">
                      {player.position}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="flex items-center text-green-400 mb-1">
                      <Trophy className="w-4 h-4 mr-1" />
                      <span className="font-bold text-lg">{player.goals}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Goals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center text-green-400 mb-1">
                      <Target className="w-4 h-4 mr-1" />
                      <span className="font-bold text-lg">{player.assists}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Assists</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

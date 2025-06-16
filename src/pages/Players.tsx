
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Players = () => {
  const [activeTab, setActiveTab] = useState('scorers');

  const topScorers = [
    { name: 'Erling Haaland', team: 'Manchester City', goals: 24, matches: 20 },
    { name: 'Harry Kane', team: 'Bayern Munich', goals: 22, matches: 18 },
    { name: 'Kylian Mbappe', team: 'PSG', goals: 21, matches: 19 }
  ];

  const topAssists = [
    { name: 'Kevin De Bruyne', team: 'Manchester City', assists: 15, matches: 18 },
    { name: 'Bruno Fernandes', team: 'Manchester United', assists: 12, matches: 20 },
    { name: 'Luka Modric', team: 'Real Madrid', assists: 11, matches: 17 }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Player </span>
            <span className="text-green-400">Statistics</span>
          </h1>
          <p className="text-gray-400">Top performing players across all competitions</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('scorers')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'scorers'
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Top Scorers
          </button>
          <button
            onClick={() => setActiveTab('assists')}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'assists'
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Top Assists
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-6">
          {activeTab === 'scorers' && (
            <>
              {topScorers.map((player, index) => (
                <Card key={player.name} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{player.name}</h3>
                          <p className="text-gray-400">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{player.goals}</div>
                        <div className="text-gray-400">Goals in {player.matches} matches</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}

          {activeTab === 'assists' && (
            <>
              {topAssists.map((player, index) => (
                <Card key={player.name} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{player.name}</h3>
                          <p className="text-gray-400">{player.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{player.assists}</div>
                        <div className="text-gray-400">Assists in {player.matches} matches</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;

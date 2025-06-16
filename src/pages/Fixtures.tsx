
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Fixtures = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-17');

  const fixtures = [
    {
      id: 1,
      date: '2024-12-17',
      time: '20:00',
      competition: 'Premier League',
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      venue: 'Etihad Stadium',
      status: 'upcoming'
    },
    {
      id: 2,
      date: '2024-12-17',
      time: '17:30',
      competition: 'La Liga',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      venue: 'Santiago Bernabéu',
      status: 'upcoming'
    },
    {
      id: 3,
      date: '2024-12-18',
      time: '15:00',
      competition: 'Bundesliga',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      venue: 'Allianz Arena',
      status: 'upcoming'
    }
  ];

  const filteredFixtures = fixtures.filter(fixture => fixture.date === selectedDate);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Upcoming </span>
            <span className="text-green-400">Fixtures</span>
          </h1>
          <p className="text-gray-400">Stay updated with all upcoming matches</p>
        </div>

        {/* Date Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {['2024-12-17', '2024-12-18', '2024-12-19'].map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDate === date
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {new Date(date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </button>
            ))}
          </div>
        </div>

        {/* Fixtures List */}
        <div className="grid gap-6">
          {filteredFixtures.map((fixture) => (
            <Card key={fixture.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 text-sm font-medium">
                        {fixture.competition}
                      </span>
                    </div>
                    <div className="text-xl font-bold mb-2">
                      {fixture.homeTeam} vs {fixture.awayTeam}
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(fixture.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {fixture.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {fixture.venue}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      Upcoming
                    </div>
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

export default Fixtures;


import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Fanzone = () => {
  const [selectedPoll, setSelectedPoll] = useState<string>('');

  const polls = [
    {
      id: 'poll1',
      question: 'Who will win the Champions League this season?',
      options: [
        { id: 'opt1', text: 'Manchester City', votes: 45 },
        { id: 'opt2', text: 'Real Madrid', votes: 38 },
        { id: 'opt3', text: 'Bayern Munich', votes: 25 },
        { id: 'opt4', text: 'PSG', votes: 22 }
      ]
    }
  ];

  const fanComments = [
    {
      id: 1,
      user: 'FootballFan2024',
      comment: 'What a match! That last-minute goal was incredible!',
      time: '2 hours ago',
      likes: 15
    },
    {
      id: 2,
      user: 'SoccerExpert',
      comment: 'The tactics in today\'s game were absolutely brilliant. Love seeing creative play!',
      time: '4 hours ago',
      likes: 8
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-white">Fan </span>
            <span className="text-green-400">Zone</span>
          </h1>
          <p className="text-gray-400">Connect with fellow football fans around the world</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Polls Section */}
          <div>
            <Card className="bg-gray-800 border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-green-400">Fan Polls</CardTitle>
              </CardHeader>
              <CardContent>
                {polls.map((poll) => (
                  <div key={poll.id} className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">{poll.question}</h3>
                    <div className="space-y-3">
                      {poll.options.map((option) => (
                        <div key={option.id} className="flex items-center justify-between">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name={poll.id}
                              value={option.id}
                              onChange={() => setSelectedPoll(option.id)}
                              className="text-green-500"
                            />
                            <span>{option.text}</span>
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="bg-gray-700 h-2 w-20 rounded-full overflow-hidden">
                              <div 
                                className="bg-green-500 h-full"
                                style={{ width: `${(option.votes / 130) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-400">{option.votes}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-4 bg-green-500 hover:bg-green-600">
                      Vote Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Match Predictions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Match Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Man City vs Liverpool</h4>
                      <p className="text-sm text-gray-400">Tomorrow, 8:00 PM</p>
                    </div>
                    <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      Predict
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fan Comments */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400">Fan Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fanComments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-green-400">{comment.user}</span>
                        <span className="text-sm text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-gray-300 mb-2">{comment.comment}</p>
                      <div className="flex justify-between items-center">
                        <button className="text-sm text-gray-400 hover:text-green-400">
                          👍 {comment.likes} likes
                        </button>
                        <button className="text-sm text-gray-400 hover:text-green-400">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <textarea 
                    placeholder="Share your thoughts..."
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    rows={3}
                  />
                  <Button className="mt-2 bg-green-500 hover:bg-green-600">
                    Post Comment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fanzone;

"use client";

import React, { useState, useEffect } from "react";
import "./../../globals.css";
import TopScorer from "./TopScorer";

type MatchResult = { home: number; away: number };

type PlayerPrediction = {
  player: string;
  results: MatchResult[];
};

const realResults: MatchResult[] = [
  { home: 4, away: 0 }, // Add last match to the top of the list
  { home: 0, away: 0 }, //Match 2
  { home: 4, away: 1 }, //Match 3
  { home: 0, away: 4 }, //Match 4
  { home: 0, away: 1 }, //Match 5
  { home: 1, away: 0 }, //Match 6
  { home: 1, away: 1 }, //Match 7
  { home: 2, away: 1 }, //Match 8
  { home: 0, away: 1 }, //Match 9
  { home: 1, away: 1 }, //Match 10
  { home: 0, away: 0 }, //Match 11
  { home: 2, away: 1 }, //Match 12
  { home: 0, away: 0 }, //Match 13
  { home: 2, away: 0 }, //Match 14
];

const predictions: PlayerPrediction[] = [
  {
    player: "Branko",
    results: [
      { home: 3, away: 0 }, //Match 1
      { home: 0, away: 0 }, //Match 2
      { home: 2, away: 0 }, //Match 3
      { home: 0, away: 6 }, //Match 4
      { home: 0, away: 1 }, //Match 5
      { home: 0, away: 0 }, //Match 6
      { home: 0, away: 3 }, //Match 7
      { home: 1, away: 0 }, //Match 8
      { home: 4, away: 0 }, //Match 9
      { home: 0, away: 0 }, //Match 10
      { home: 1, away: 3 }, //Match 11
      { home: 1, away: 0 }, //Match 12
      { home: 0, away: 2 }, //Match 13
      { home: 3, away: 0 }, //Match 14
    ],
  },
  {
    player: "Piko",
    results: [
      { home: 1, away: 0 },
      { home: 1, away: 1 },
      { home: 2, away: 0 },
      { home: 0, away: 3 },
      { home: 0, away: 2 },
      { home: 3, away: 0 },
      { home: 0, away: 3 },
      { home: 3, away: 0 },
      { home: 3, away: 0 },
      { home: 0, away: 2 },
      { home: 1, away: 2 },
      { home: 3, away: 0 },
      { home: 0, away: 1 },
      { home: 2, away: 0 },
    ],
  },
  {
    player: "Antonijo",
    results: [
      { home: 2, away: 0 },
      { home: 1, away: 1 },
      { home: 2, away: 0 },
      { home: 0, away: 5 },
      { home: 1, away: 1 },
      { home: 2, away: 0 },
      { home: 0, away: 3 },
      { home: 2, away: 0 },
      { home: 1, away: 0 },
      { home: 0, away: 2 },
      { home: 0, away: 1 },
      { home: 2, away: 0 },
      { home: 0, away: 2 },
      { home: 2, away: 0 },
    ],
  },
  {
    player: "Ante",
    results: [
      { home: 3, away: 1 },
      { home: 1, away: 2 },
      { home: 3, away: 0 },
      { home: 0, away: 5 },
      { home: 1, away: 2 },
      { home: 2, away: 1 },
      { home: 1, away: 2 },
      { home: 2, away: 0 },
      { home: 2, away: 0 },
      { home: 0, away: 1 },
      { home: 0, away: 2 },
      { home: 2, away: 1 },
      { home: 0, away: 2 },
      { home: 2, away: 0 },
    ],
  },
  {
    player: "Toni",
    results: [
      { home: 4, away: 0 }, //3
      { home: 1, away: 3 }, //0
      { home: 2, away: 1 }, //0
      { home: 0, away: 4 }, //3
      { home: 0, away: 3 }, //0
      { home: 2, away: 1 }, //0
      { home: 0, away: 2 }, //0
      { home: 1, away: 1 }, //1
      { home: 1, away: 1 }, //1
      { home: 2, away: 1 }, //1
      { home: 0, away: 1 }, //1
      { home: 1, away: 0 }, //0
      { home: 0, away: 3 }, //0
      { home: 2, away: 1 }, //1
    ],
  },
  {
    player: "Fran",
    results: [
      { home: 2, away: 0 },
      { home: 0, away: 2 },
      { home: 2, away: 0 },
      { home: 0, away: 4 },
      { home: 1, away: 2 },
      { home: 2, away: 1 },
      { home: 1, away: 2 },
      { home: 1, away: 0 },
      { home: 2, away: 1 },
      { home: 0, away: 1 },
      { home: 0, away: 2 },
      { home: 3, away: 0 },
      { home: 0, away: 2 },
      { home: 3, away: 0 },
    ],
  },
];

// Type for the leaderboard entry
type LeaderboardEntry = {
  player: string;
  points: number;
  threePointCount: number;
};

const calculatePoints = (
  predictions: PlayerPrediction[],
  realResults: MatchResult[]
): LeaderboardEntry[] => {
  return predictions.map((competitor) => {
    let totalPoints = 0;
    let threePointCount = 0;

    competitor.results.forEach((prediction, index) => {
      const realResult = realResults[index];

      if (
        prediction.home === realResult.home &&
        prediction.away === realResult.away
      ) {
        totalPoints += 3;
        threePointCount++;
      } else if (
        Math.abs(prediction.home - realResult.home) === 1 &&
        Math.abs(prediction.away - realResult.away) === 1
      ) {
        totalPoints += 0;
      } else if (
        (Math.abs(prediction.home - realResult.home) <= 1 &&
          Math.abs(prediction.away - realResult.away) === 0) ||
        (Math.abs(prediction.home - realResult.home) === 0 &&
          Math.abs(prediction.away - realResult.away) <= 1)
      ) {
        totalPoints += 1;
      } else {
        totalPoints += 0;
      }
    });

    return { player: competitor.player, points: totalPoints, threePointCount };
  });
};

// Type for the most prognosed result
type PrognosedResult = {
  result: string | null;
  count: number;
};

const getMostPrognosedResult = (
  predictions: PlayerPrediction[]
): PrognosedResult => {
  const resultCount: Record<string, number> = {};

  predictions.forEach((competitor) => {
    competitor.results.forEach((result) => {
      const key = `${result.home}:${result.away}`;
      resultCount[key] = (resultCount[key] || 0) + 1;
    });
  });

  let mostPrognosed: string | null = null;
  let maxCount = 0;

  for (const [key, count] of Object.entries(resultCount)) {
    if (count > maxCount) {
      maxCount = count;
      mostPrognosed = key;
    }
  }

  return { result: mostPrognosed, count: maxCount };
};

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [mostPrognosed, setMostPrognosed] = useState<PrognosedResult>({
    result: null,
    count: 0,
  });

  useEffect(() => {
    const result = calculatePoints(predictions, realResults);
    setLeaderboard(result);

    const { result: prognosedResult, count } =
      getMostPrognosedResult(predictions);
    setMostPrognosed({ result: prognosedResult, count });
  }, []);

  return (
    <div>
      <div className="p-2 bg-white rounded-3xl mb-4">
        <table className="w-full text-sm leaderboard">
          <colgroup>
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th className="text-left pl-9">Igrač</th>
              <th className="text-right pr-4">Bodovi</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard
              .sort((a, b) => b.points - a.points)
              .map((competitor, index) => (
                <tr key={competitor.player}>
                  <td className="text-left">
                    <span className="mr-2 opacity-40">{index + 1}.</span>
                    <span>{competitor.player}</span>
                  </td>
                  <td className="text-right">{competitor.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <TopScorer leaderboard={leaderboard} />
      <div className="bg-red-600 p-4 rounded-3xl">
        <h2 className="uppercase font-bold opacity-60 mb-4">
          Najčešća prognoza
        </h2>
        {mostPrognosed.result ? (
          <>
            <p className="text-2xl">{mostPrognosed.result}</p>
            <p className="text-xs">Prognoziran {mostPrognosed.count} puta</p>
          </>
        ) : (
          <p>No predictions available.</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;

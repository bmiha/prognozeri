"use client";

import React from "react";
import { LiaTrophySolid } from "react-icons/lia";

// Define the type for leaderboard entries
type LeaderboardEntry = {
  player: string;
  points: number;
  threePointCount: number;
};

// Define the props type
type TopScorerProps = {
  leaderboard: LeaderboardEntry[];
};

// TopScorer component
const TopScorer: React.FC<TopScorerProps> = ({ leaderboard }) => {
  // Ensure leaderboard is defined and not empty
  if (!leaderboard || leaderboard.length === 0) {
    return <div>No players found.</div>;
  }

  // Find the player with the maximum points
  const topPlayer = leaderboard.reduce(
    (max, competitor) => (competitor.points > max.points ? competitor : max),
    leaderboard[0]
  );

  return (
    <div className="relative topscorer-wrapper rounded-3xl overflow-hidden mb-4">
      <div className="angle-element"></div>
      <div className="p-4 flex flex-col justify-end topscorer w-[230px]">
        <div className="mb-4">
          <LiaTrophySolid size={24} />
        </div>
        <p className="text-xl text-slate-400 uppercase font-black">
          Najviše točnih prognoza
        </p>
        <p className="text-3xl text-slate-800 uppercase font-black">
          {topPlayer.player} {topPlayer.threePointCount}
        </p>
      </div>
    </div>
  );
};

export default TopScorer;

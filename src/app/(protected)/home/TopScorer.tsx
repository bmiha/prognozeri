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
    <div className="flex items-center justify-between px-5 pt-4 pb-5 mb-10 border-[3px] border-[#434e8e] rounded-2xl">
      <div>
        <h5 className="text-[#7881B2] text-base">Top Clean Sheater</h5>
        <p className="text-[26px] font-black">{topPlayer.player}</p>
      </div>
      <div className="clean-sheater">x{topPlayer.threePointCount}</div>
    </div>
  );
};

export default TopScorer;

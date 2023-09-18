// utils/leaderboard.ts

import { UserMintData } from './types';

export function processAndSortLeaderboardData(tokenClaimEvents: any[]): UserMintData[] {
    const leaderboardMap: { [key: string]: number } = {};

    tokenClaimEvents.forEach(event => {
        const claimer = event.data.claimer;
        const amount = event.data.quantityClaimed.toNumber();

        if (leaderboardMap[claimer]) {
            leaderboardMap[claimer] += amount;
        } else {
            leaderboardMap[claimer] = amount;
        }
    });

    const leaderboardArray = Object.entries(leaderboardMap).map(([address, balance]) => ({ address, balance: Number(balance) }));

    // Sort in descending order
    leaderboardArray.sort((a, b) => b.balance - a.balance);

    return leaderboardArray;
}

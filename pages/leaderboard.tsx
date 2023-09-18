// pages/leaderboard.tsx

import { useEffect, useState } from 'react';
import { 
    useContract,
    useContractEvents
} from "@thirdweb-dev/react";
import { processAndSortLeaderboardData } from '../utils/processAndSortLeaderboardData';
import { myEditionDropContractAddress } from '../const/yourDetails';
import { UserMintData } from '../utils/types';

const LeaderboardPage = () => {
  const { contract } = useContract(myEditionDropContractAddress, "edition-drop");
  const { data: event } = useContractEvents(contract, "TokensClaimed");
  
  const [leaderboard, setLeaderboard] = useState<UserMintData[]>([]);

  useEffect(() => {
      if (contract && event) {
        const processedData =  processAndSortLeaderboardData(event);
        setLeaderboard(processedData);
      }
    }, [event, contract]);


    return (
        <div>
          <h1>Leaderboard</h1>
          <ul>
            {leaderboard.map((user, index) => (
              <li key={user.address}>
                {index + 1}. {user.address}: {user.balance} tokens
              </li>
            ))}
          </ul>
        </div>
      );
}

export default LeaderboardPage;

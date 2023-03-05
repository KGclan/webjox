import React, { useState } from "react";
import { IRenderSeedProps, Seed, SeedItem, SeedTeam } from "react-brackets";

import { APIModels } from "shared/api";

import { winnerSetter } from "./model";

import styles from "./styles.module.css";

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex, rounds }: IRenderSeedProps) => {
  const firstTeamName = seed.teams[0]?.name || "";
  const secondTeamName = seed.teams[1]?.name || "";
  
  const CustomSeedItem = ({ teamName }: { teamName: string }) => {
    const [winner, setWinner] = useState("");

    const clickHandler = () => {
      if (teamName !== "Нет данных") {
        setWinner(teamName);
        winnerSetter(roundIndex, seedIndex, rounds as APIModels.IRound[]);
      }
    };

    return(
      <SeedTeam
        onClick={clickHandler}
        className={styles.seedTeam}
      >
        {teamName}
        { winner ===  teamName ? <p className="text-green-500 font-bold">П</p> : ""}
      </SeedTeam>
    );
  };

  return(
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem>
        <div className={styles.seedCard}>
          <CustomSeedItem teamName={firstTeamName} />
          <CustomSeedItem teamName={secondTeamName} />
        </div>
      </SeedItem>
    </Seed>
  );
};

export default CustomSeed;
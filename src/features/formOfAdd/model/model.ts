import { shuffle } from "shared/lib";

interface IMember { id: number; name: string; }

const membersCreator = (members: string[]) => members.map((item, index) => ({ id: index + 1, name: item }));

const seedsCreator = (members: IMember[] | null, length: number) => {
  let j = 0;
  let seeds = [];

  for (let i = 0; i < (length / 2); i++) {
    seeds.push(
      {
        id: i + 1,
        teams: members ? [members[j], members[j + 1]] : [{ id: 1, name: "Нет данных" }, { id: 1, name: "Нет данных" }]
      }
    );
    j += 2;
  }

  return seeds;
};

const roundsCreator = (members: IMember[]) => {
  let rounds = [];
  let length = members.length;

  for (let i = 0; i < (length / 2); i++) {
    rounds.push(
      {
        id: i,
        title: `Раунд №${i + 1}`,
        seeds: i ? seedsCreator(null, length) : seedsCreator(members, length),
      },
    );

    length /= 2;
  }

  // Пушим фильный раунд
  rounds.push(
    {
      id: rounds.length + 1,
      title: "Финал",
      seeds: seedsCreator(members, 2),
    },
  );

  return rounds;
};

export const tournamentCreator = (title: string, membersArr: string[], isRandomSort: boolean) => {
  const members = isRandomSort ? membersCreator(shuffle(membersArr)) : membersCreator(membersArr);

  
  const tournament = {
    name: title,
    rounds: roundsCreator(members),
  };
  
  return tournament;
};
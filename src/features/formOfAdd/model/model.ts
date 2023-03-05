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
  let i = 0;

  while ((length / 2) >= 2) {
    if ((length / 2) === 2) {
      // Пушим фильный и полуфинальный раунд
      rounds.push(
        {
          id: rounds.length + 1,
          title: "Полуфинал",
          seeds: seedsCreator(null, 4),
        },
        {
          id: rounds.length + 1,
          title: "Финал",
          seeds: seedsCreator(null, 2),
        },
      );
    } else {
      rounds.push(
        {
          id: i,
          title: `Раунд №${i}`,
          seeds: i ? seedsCreator(null, length) : seedsCreator(members, length),
        },
      );
    }

    length = length / 2;
    i++;
  }

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
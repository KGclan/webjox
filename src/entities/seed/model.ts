import { APIModels } from "shared/api";

export const winnerSetter = (roundIndex: number, seedIndex: number, rounds: APIModels.IRound[]) => {
  // А тут должен был быть алгоритм по установке команды в статус победителя
  // Но при помощи самописного/абстрактного API я не смог придумать как организовать patch запрос
  // Мне кажется логика построения сетки и ее обработки должна была быть на бэке

  console.log(rounds[roundIndex + 1].seeds[seedIndex].teams[0]);
};
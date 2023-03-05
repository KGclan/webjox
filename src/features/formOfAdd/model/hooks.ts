import { tournamentModel } from "entities/tournament";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APIRequests } from "shared/api";

import { tournamentCreator } from "./model";

export const useForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [inputError, setInputError] = useState("Обязательное поле");
  const [textareaData, setTextareaData] = useState<string[]>([]);
  const [textareaError, setTextareaError] = useState("Число команд должно быть кратно степени 2");
  const [checkboxData, setCheckboxData] = useState(false);

  const submitButtonClickHandler = async (e: Event) => {
    e.preventDefault();
    const tournament = tournamentCreator(inputData, textareaData, checkboxData);
    APIRequests.addToTournamentsList(tournament)
      .then((responce) => dispatch(tournamentModel.addItemToTournamentsList(responce.data)));
    navigate("/", { replace: true });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.length) setInputError("Обязательное поле");
    else setInputError("");

    setInputData(e.target.value);
  };

  const textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {    
    const countOfTeams = e.target.value
      .split("\n")
      .filter((item) => item)
      .length;

    // Это условие нужно для построения корректной турнирной сетки
    // Тут мы проверяем, является ли число участников степерью 2
    // А соответсвенно гарантируем, что в каждом раунде у участника будет соперник
    if (!(countOfTeams && (countOfTeams & (countOfTeams - 1)) === 0)) {
      setTextareaError("Число команд должно быть кратно степени 2");
    } else if (countOfTeams === 1 || countOfTeams === 2) {
      setTextareaError("Число командо должно быть больше");
    } else setTextareaError("");

    setTextareaData(
      e.target.value
        .split("\n")
        .filter((item) => item)
    );
  };

  const checkboxChangeHandler = () => {
    setCheckboxData((prev) => !prev);
  };

  return {
    inputError,
    textareaError,
    submitButtonClickHandler,
    inputChangeHandler,
    textareaChangeHandler,
    checkboxChangeHandler
  };
};
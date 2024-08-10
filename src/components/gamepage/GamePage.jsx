import React from "react";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  increasePlayerScore,
  playerRockSignAlt,
  playerScissorSignAlt,
  playerPaperSignAlt,
  increaseComputerScore,
  computerRockSignAlt,
  computerPaperSignAlt,
  computerScissorSignAlt,
  resetGame,
} from "../../redux/GameSlice";

const GamePage = () => {
  const dispatch = useDispatch();
  const {
    playerScore,
    playerRockSign,
    playerPaperSign,
    playerScissorSign,
    computerScore,
    computerRockSign,
    computerPaperSign,
    computerScissorSign,
  } = useSelector((store) => store.GameSlice);

  let playerValue;
  let computerValue;

  const setScore = () => {
    if (playerScore === 10 || computerScore === 10) {
      return;
    }
    if (playerValue === computerValue) {
      return;
    }

    if (
      (playerValue === 1 && computerValue === 2) ||
      (playerValue === 2 && computerValue === 3) ||
      (playerValue === 3 && computerValue === 1)
    ) {
      dispatch(increaseComputerScore());
    } else if (
      (playerValue === 1 && computerValue === 3) ||
      (playerValue === 2 && computerValue === 1) ||
      (playerValue === 3 && computerValue === 2)
    ) {
      dispatch(increasePlayerScore());
    }
  };
  const playerRockSelection = () => {
    if (playerScore === 10 || computerScore === 10) {
      return;
    }
    computerValue = Math.floor(Math.random() * 3 + 1);
    dispatch(playerRockSignAlt());
    dispatch(computerRockSignAlt(computerValue));
    dispatch(computerPaperSignAlt(computerValue));
    dispatch(computerScissorSignAlt(computerValue));
    playerValue = 3;
    setScore();
  };
  const playerPaperSelection = () => {
    if (playerScore === 10 || computerScore === 10) {
      return;
    }
    computerValue = Math.floor(Math.random() * 3 + 1);
    dispatch(playerPaperSignAlt());
    dispatch(computerRockSignAlt(computerValue));
    dispatch(computerPaperSignAlt(computerValue));
    dispatch(computerScissorSignAlt(computerValue));
    playerValue = 1;
    setScore();
  };
  const playerScissorSelection = () => {
    if (playerScore === 10 || computerScore === 10) {
      return;
    }
    computerValue = Math.floor(Math.random() * 3 + 1);
    dispatch(playerScissorSignAlt());
    dispatch(computerRockSignAlt(computerValue));
    dispatch(computerPaperSignAlt(computerValue));
    dispatch(computerScissorSignAlt(computerValue));
    playerValue = 2;
    setScore();
  };

  return (
    <div className=" lg:p-8 md:p-6 sm:p-5 xs:p-4">
      <div className="uppercase flex flex-col items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">rock paper scissors</div>{" "}
        <div className=" xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm">(race to 10!)</div>
      </div>
      <div className="grid grid-cols-2 lg:mt-20 sm:mt-14 xs:mt-20">
        <div className="flex flex-col gap-6 items-center justify-center bg-green-300">
          <div className=" xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium">YOU</div>
          <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
            {playerScore === 10 ? (
              <span className="text-green-600">WON</span>
            ) : playerScore < 10 && computerScore === 10 ? (
              <span className="text-red-500">LOST</span>
            ) : (
              playerScore
            )}
          </div>
          <div className="flex flex-col gap-5 items-center justify-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
            <div className="flex gap-10">
              <FaHandRock
                className={`" ${
                  playerRockSign ? " text-blue-950" : " text-blue-200"
                } hover:cursor-pointer "`}
                onClick={playerRockSelection}
              />
              <FaHandPaper
                className={`" ${
                  playerPaperSign ? " text-gray-950" : " text-gray-200"
                } hover:cursor-pointer "`}
                onClick={playerPaperSelection}
              />
            </div>
            <FaHandScissors
              className={`" ${
                playerScissorSign ? " text-red-950" : " text-red-200"
              } hover:cursor-pointer "`}
              onClick={playerScissorSelection}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium ">COMPUTER</div>
          <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">{computerScore}</div>
          <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl relative">
            <FaHandRock
              className={` ${
                computerRockSign
                  ? " opacity-100 visible hover:cursor-pointer text-blue-950"
                  : " opacity-0 invisible"
              } absolute top-3 -left-7 "`}
            />
            <FaHandPaper
              className={` ${
                computerPaperSign
                  ? " opacity-100 visible hover:cursor-pointer text-gray-950"
                  : " opacity-0 invisible"
              } absolute top-3 -left-7 "`}
            />
            <FaHandScissors
              className={` ${
                computerScissorSign
                  ? " opacity-100 visible hover:cursor-pointer text-red-950"
                  : " opacity-0 invisible"
              } absolute top-3 -left-7 "`}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:mt-20 sm:mt-16 xs:mt-14">
        <button
          className="uppercase lg:text-base sm:text-sm xs:text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(resetGame())}
        >
          reset game
        </button>
      </div>
    </div>
  );
};

export default GamePage;

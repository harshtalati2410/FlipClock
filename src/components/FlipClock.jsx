import React from "react";
import FlipBox from "../utils/FlipBox";

function FlipClock(props) {
  setInterval(() => {
    flipAllCards();
  }, 1000);

  function flipAllCards(time) {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    flip(document.getElementById("data-hours-tens"), Math.floor(hours / 10));
    flip(document.getElementById("data-hours-ones"), hours % 10);
    flip(
      document.getElementById("data-minutes-tens"),
      Math.floor(minutes / 10)
    );
    flip(document.getElementById("data-minutes-ones"), minutes % 10);
    flip(
      document.getElementById("data-seconds-tens"),
      Math.floor(seconds / 10)
    );
    flip(document.getElementById("data-seconds-ones"), seconds % 10);
  }

  function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    // topHalf.textContent = startNumber;
    // bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  }

  const idListHours = ["data-hours-tens", "data-hours-ones"];
  const idListMinutes = ["data-minutes-tens", "data-minutes-ones"];
  const idListSeconds = ["data-seconds-tens", "data-seconds-ones"];

  return (
    <div className="grid grid-cols-11 gap-4 h-fit">
      <div className="grid grid-rows-12 gap-2 col-span-3">
        <div className="text-white text-xl row-span-2 text-center">HOURS</div>
        <div className="flex row-span-10">
          {idListHours.map((id, index) => {
            return <FlipBox i={id} key={index} />;
          })}
        </div>
      </div>

      <div className="text-white text-[150px] col-span-1 text-center grid grid-rows-12">
        <div className="row-start-3 row-end-13">:</div>
      </div>

      <div className="grid grid-row-12 gap-2 col-span-3">
        <div className="text-white text-xl row-span-2 text-center">
          MINUTES
        </div>
        <div className="flex row-span-10">
          {idListMinutes.map((id, index) => {
            return <FlipBox i={id} key={index} />;
          })}
        </div>
      </div>

      <div className="text-white text-[150px] col-span-1 text-center grid grid-rows-12">
        <div className="row-start-3 row-end-13">:</div>
      </div>

      <div className="grid grid-rows-12 gap-2 col-span-3">
        <div className="text-white text-xl row-span-2 text-center">
          SECONDS
        </div>
        <div className="flex row-span-10">
          {idListSeconds.map((id, index) => {
            return <FlipBox i={id} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FlipClock;

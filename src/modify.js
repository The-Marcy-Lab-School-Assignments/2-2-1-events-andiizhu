const body = document.querySelector("body");
const keyboardTracker = document.querySelector("#keydown-tracker");

const clickCounterHandler = (event) => {
  //Get the button element from the target;
  const button = event.target;
  let clickCount = button.dataset.clicks;
  clickCount++;
  event.target.dataset.clicks = clickCount;
  if (clickCount === 1) {
    event.target.textContent = "I've been clicked 1 time.";
  } else {
    event.target.textContent = `I've been clicked ${clickCount} times!`;
  }
};

const handleKeydown = (event) => {
  //This is because inside of the event, there is a class of code equal to the stirng that we need.
  let letter = event.code;
  keyboardTracker.textContent = `You pressed ${letter}`;
};

const resultSpan = document.querySelector("#delegation-result");
const delegationlist = document.querySelector("#delegation");
const handleDelegation = (event) => {
  if (event.target && event.target.matches(".grid-item")) {
    resultSpan.textContent = event.target.textContent;
  }
};

const ulRandom = document.querySelector("#random-numbers");
const addNewRandomNumber = (event) => {
  const li = document.createElement("li");
  li.textContent = Math.random();
  ulRandom.append(li);
};

const itemToRemove = document.querySelector(`#remove`);
itemToRemove.addEventListener("click", (e) =>
  delegationContainer.removeEventListener("click", handleDelegation)
);
const delegationContainer = document.querySelector("#delegation");
const main = () => {
  delegationContainer.addEventListener("click", handleDelegation);

  const clickedButton = document.querySelector("#click-button");
  clickedButton.addEventListener("click", clickCounterHandler);

  const clickedButtonInline = document.querySelector("#inline-example");
  clickedButtonInline.addEventListener("click", clickCounterHandler);

  const addNewRandomNum = document.querySelector("#add-random-num");
  addNewRandomNum.addEventListener("click", addNewRandomNumber);

  body.addEventListener("keydown", handleKeydown);
  resultSpan.addEventListener("click", handleDelegation);
  // grab the click button
  // assign the event listener
};

main();

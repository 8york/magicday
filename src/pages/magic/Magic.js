import { useEffect, useState } from "react";
import Eightball from "./Eightball";
import Question from "./Question";
import Answer from "./Answer";

export default function Magic() {
  const answers = [
    "Yes, definitely.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Yes.",
    "Reply hazy, try again.",
    "Ask again later",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't bet on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  const catAnswers = [
    "meow",
    "mewon meow.",
    "meow meow meow.",
    "meow meow meow meow.",
    // "You may rely on it.",
    // "As I see it, yes.",
    // "Most likely.",
    // "Outlook good.",
    // "Signs point to yes.",
    // "Yes.",
    // "Reply hazy, try again.",
    // "Ask again later",
    // "Better not tell you now.",
    // "Cannot predict now.",
    // "Concentrate and ask again.",
    // "Don't bet on it.",
    // "My reply is no.",
    // "My sources say no.",
    // "Outlook not so good.",
    // "Very doubtful.",
  ];

  const [query, setQuery] = useState("");
  const [asked, setAsked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [shaking, setShaking] = useState(false);
  const [useCatAnswer, setUseCatAnswer] = useState(false);

  const showQuestion = (e) => {
    if (e.target && e.target.value) {
      setQuery(e.target.value);
      setAsked(true);
      // setSubmited(true);
    }
  };

  // initially checks url path
  useEffect(() => {
    if (window.location.pathname.includes("cat/magic")) {
      setUseCatAnswer(true);
    }
  }, []);

  const getRandom = () => {
    // if (submited) {
    const selectedAnswer = useCatAnswer ? catAnswers : answers;
    const randomIndx = Math.floor(Math.random() * selectedAnswer.length);
    const randomAnswer = selectedAnswer[randomIndx];
    setAnswer(randomAnswer);
    // console.log(randomAnswer);

    setQuery("");
  };

  const handleQuestionSubmit = () => {
    setAsked(true);
    setShaking(true);

    setTimeout(() => {
      getRandom();
      setShaking(false);
    }, 500);
  }; // };

  return (
    <main>
      <Eightball
        getRandom={getRandom}
        shaking={shaking}
        setShaking={setShaking}
        // useCatAnswer={useCatAnswer}
      />
      <Question
        showQuestion={showQuestion}
        value={query}
        onSubmit={handleQuestionSubmit}
        shaking={shaking}
      />
      {asked && <Answer answer={answer} />}
    </main>
  );
}

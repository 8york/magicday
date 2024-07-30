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
    "mewon meow",
    "meow meow meow",
    "meow meow meow meow",
    "mewo purrpurr",
    "meaowwww scratch",
    "purrpurrr",
    "feed the cat first",
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
  const [answered, setAnswered] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [useCatAnswer, setUseCatAnswer] = useState(false);

  const showQuestion = (e) => {
    const enquery = e.target.value;
    setQuery(enquery);
    setAsked(true);
    setAnswered(false);
  };

  // initially checks url path
  useEffect(() => {
    if (window.location.pathname.includes("cat/magic")) {
      setUseCatAnswer(true);
    }
  }, []);

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (asked && !answered) {
      getRandom();
    }
  };

  const getRandom = () => {
    if (asked) {
      const selectedAnswer = useCatAnswer ? catAnswers : answers;
      const randomIndx = Math.floor(Math.random() * selectedAnswer.length);
      const randomAnswer = selectedAnswer[randomIndx];
      setAnswer(randomAnswer);
      setAnswered(true);
    }
  };

  useEffect(() => {
    if (answered) {
      setQuery("");
      setAsked(false);
    }
  }, [asked, answered]);
  return (
    <main>
      <Eightball
        getRandom={getRandom}
        shaking={shaking}
        setShaking={setShaking}
      />
      <Question
        showQuestion={showQuestion}
        query={query}
        onSubmit={handleQuestionSubmit}
        shaking={shaking}
      />
      {answered && <Answer answer={answer} />}
    </main>
  );
}

import React, { useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: "1",
      question: "Where is sahara desert located?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "Statue of liberty",
        },
        {
          value: "2",
          option: "Australia",
        },
        {
          value: "3",
          option: "Egypt",
        },
        {
          value: "4",
          option: "Africa",
        },
      ],
    },
    {
      id: "2",
      question: "What is the weather like in sahara desert, Africa?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "hot",
        },
        {
          value: "2",
          option: "sunny",
        },
        {
          value: "3",
          option: "rainy",
        },
        {
          value: "4",
          option: "dry",
        },
      ],
    },
    {
      id: "3",
      question: "There are no cactus in the sahara desert.",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "True",
        },
        {
          value: "2",
          option: "False",
        },
        {
          value: "3",
          option: "maybe",
        },
        {
          value: "4",
          option: "I dont know",
        },
      ],
    },
    {
      id: "4",
      question: "What is mostly found in the desert?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "Cactus",
        },
        {
          value: "2",
          option: "Sand",
        },
        {
          value: "3",
          option: "Camel",
        },
        {
          value: "4",
          option: "All of the above",
        },
      ],
    },
    {
      id: "5",
      question: "How many square kilometers does the sahara desert covers?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "10,000,000",
        },
        {
          value: "2",
          option: "9,000,000",
        },
        {
          value: "3",
          option: "8,000,000",
        },
        {
          value: "4",
          option: "7,000,000.5",
        },
      ],
    },
    {
      id: "6",
      question: "There are long endless miles of sand runes?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "Right",
        },
        {
          value: "2",
          option: "true",
        },
        {
          value: "3",
          option: "false",
        },
        {
          value: "4",
          option: "Maybe",
        },
      ],
    },
    {
      id: "7",
      question: "What animal is mostly found in the sahara desert?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "alligators",
        },
        {
          value: "2",
          option: "racoons",
        },
        {
          value: "3",
          option: "hippos",
        },
        {
          value: "4",
          option: "camels",
        },
      ],
    },
    {
      id: "8",
      question: "What plants are mostly found in the sahara desert?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "Pine tree",
        },
        {
          value: "2",
          option: "oak tree",
        },
        {
          value: "3",
          option: "cactus",
        },
        {
          value: "4",
          option: "all of the above",
        },
      ],
    },
    {
      id: "9",
      question: "What language is mostly spoken in sahara?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "chinese",
        },
        {
          value: "2",
          option: "english",
        },
        {
          value: "3",
          option: "arabic",
        },
        {
          value: "4",
          option: "hindi",
        },
      ],
    },
    {
      id: "10",
      question: "Sahara is one of the smallest deserts in the world?",
      flagged: false,
      answer: "",
      options: [
        {
          value: "1",
          option: "False",
        },
        {
          value: "2",
          option: "True",
        },
        {
          value: "3",
          option: "Maybe",
        },
        {
          value: "4",
          option: "None",
        },
      ],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]); // for showing the current question
  const [showQuiz, setShowQuiz] = useState(true); // for showing quiz
  const [showResult, setShowResult] = useState(false); // for showing result

  // for clearing the selected option
  const clearSelection = (id) => {
    let ele = document.getElementsByName(`${questions[id].question}`);

    setTimeout(()=>{
      console.log(typeof questions[id].answer, '253')

      if(questions[id].answer == ""){
        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
      } 
      else{
        // console.log(currentQuestion.id)
        ele[parseInt(questions[id].answer)-1].checked = true;
        // console.log(ele[parseInt(questions[id].answer)-1].checked)
      }
    },1000)
    // console.log(ele.length, '253')
    
    
  };

  // function for next question
  const onNext = () => {
    if (parseInt(currentQuestion.id) < 10) {
      setCurrentQuestion(questions[parseInt(currentQuestion.id)]);
       clearSelection(parseInt(currentQuestion.id));
    }

  };

  // function for prev question
  const onPrev = () => {
    if (parseInt(currentQuestion.id) != 1) {
      setCurrentQuestion(questions[parseInt(currentQuestion.id) - 2]);
      clearSelection(parseInt(currentQuestion.id) - 2);
    }
  };

  // when flag/unflag button is clicked
  const onFlagUnflag = () => {
    let temp = questions;
    temp.map((j) => {
      if (j.id === currentQuestion.id) {
        j.flagged = !j.flagged;
      }
    });
    setQuestions(temp);
    console.log(questions);
    setCurrentQuestion(questions[parseInt(currentQuestion.id) - 1]);
    console.log(currentQuestion.flagged);
  };

  // when question number is clicked
  const onQuestionChange = (id) => {
    setCurrentQuestion(questions[parseInt(id) - 1]);
    clearSelection(parseInt(id) - 1);
  };

  // when an option is clicked
  const onOptionClicked = (value) => {
    console.log(value);

    let temp = questions;
    temp.map((j) => {
      if (currentQuestion.id === j.id) {
        j.answer = value;
      }
    });

    setQuestions(temp);
  };

  return (
    <div className="p-4">
      <div className="Heading flex justify-center">
        <h2
          className="text-3xl font-semibold underline text-indigo-500
                underline-offset-1"
        >
          Sahara quiz
        </h2>
      </div>

      {showQuiz ? (
        <div>
          <div className="grid md:grid-cols-4 gap-2 py-10">
            <div className="question-list p-4 border border-indigo-500 rounded-lg">
              <p className="text-lg font-semibold">Questions</p>
              <div className="grid grid-cols-4 gap-3 py-3">
                {questions.map((j) => {
                  return (
                    <button
                      key={j.id}
                      onClick={() => onQuestionChange(j.id)}
                      className={`${
                        j.flagged
                          ? "bg-yellow-300"
                          : j.answer != ""
                          ? "bg-green-400"
                          : "bg-gray-300"
                      } 
                      p-3 text-gray-500 rounded-full cursor-pointer hover:bg-indigo-400 transform duration-300
                    focus:text-white focus:bg-indigo-600
                      `}
                    >
                      {j.id}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-span-3">
              <div className="question p-4 border border-indigo-500 rounded-lg">
                <h4 className="text-left text-lg font-semibold">
                  Question {currentQuestion.id}
                </h4>
                <p className="text-left text-lg py-3">
                  Q. {currentQuestion.question}
                </p>

                <div className="options py-4">
                  <form className="grid grid-cols-2 gap-8 justify-start text-left">
                    {currentQuestion.options.map((j) => {
                      return (
                        <div key={j.value} className="space-x-2">
                          <input
                            type="radio"
                            onClick={(e) => onOptionClicked(e.target.value)}
                            id={j.option}
                            name={currentQuestion.question}
                            value={j.value}
                          />
                          <label htmlFor={j.option}>{j.option}</label>
                        </div>
                      );
                    })}
                  </form>
                </div>
              </div>

              {/* action section */}
              <div className="action p-4">
                <div className="flex justify-start space-x-5 items-center">
                  <button
                    className="hover:bg-indigo-500 hover:text-white outline-none px-4 py-2 rounded-md
                  text-indigo-500 transform duration-300
                  "
                    onClick={() => onPrev()}
                  >
                    Prev
                  </button>
                  <button
                    className="hover:bg-indigo-500 hover:text-white outline-none px-4 py-2 rounded-md
                  text-indigo-500 transform duration-300
                  "
                    onClick={() => onNext()}
                  >
                    Next
                  </button>
                  <button
                    className="hover:bg-yellow-500 hover:text-white outline-none px-4 py-2 rounded-md
                  text-yellow-500 transform duration-300
                  "
                    onClick={() => onFlagUnflag()}
                  >
                    {currentQuestion.flagged ? "Unflag" : "Flag"}
                  </button>
                  <button
                    className="hover:bg-red-500 hover:text-white outline-none px-4 py-2 rounded-md
                  text-red-500 transform duration-300
                  "
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Quiz;

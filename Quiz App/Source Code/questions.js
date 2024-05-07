const questions = [
    {
        question: "What is the output of the following code snippet?\n\nconsole.log(typeof null);",
        answers: [
            {text: "object", correct: true},
            {text: "null", correct: false},
            {text: "undefined", correct: false},
            {text: "string", correct: false}
        ]
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        answers: [
            {text: "Compares both value and type", correct: true},
            {text: "Compares only value", correct: false},
            {text: "Compares only type", correct: false},
            {text: "None of the above", correct: false}
        ]
    },
    {
        question: "What does 'NaN' stand for?",
        answers: [
            {text: "Not a Number", correct: true},
            {text: "No Answer Needed", correct: false},
            {text: "Not a Null", correct: false},
            {text: "Not a Node", correct: false}
        ]
    },
    {
        question: "What is the result of 1 + '1' in JavaScript?",
        answers: [
            {text: "'11'", correct: true},
            {text: "2", correct: false},
            {text: "11", correct: false},
            {text: "Error", correct: false}
        ]
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            {text: "forEach()", correct: true},
            {text: "loop()", correct: false},
            {text: "each()", correct: false},
            {text: "forAll()", correct: false}
        ]
    },
    {
        question: "What will the code '3' + 4 + 5 evaluate to?",
        answers: [
            {text: "'345'", correct: true},
            {text: "12", correct: false},
            {text: "39", correct: false},
            {text: "Error", correct: false}
        ]
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        answers: [
            {text: "var", correct: true},
            {text: "int", correct: false},
            {text: "let", correct: false},
            {text: "const", correct: false}
        ]
    },
    {
        question: "What will the code '5' == 5 evaluate to?",
        answers: [
            {text: "true", correct: true},
            {text: "false", correct: false},
            {text: "Error", correct: false},
            {text: "Undefined", correct: false}
        ]
    },
    {
        question: "What does the 'map()' method do in JavaScript?",
        answers: [
            {text: "Creates a new array with the results of calling a function for every array element", correct: true},
            {text: "Iterates over an array's elements", correct: false},
            {text: "Checks if all elements in an array pass a test", correct: false},
            {text: "Returns the value of the first element in an array that pass a test", correct: false}
        ]
    }
];
const questions = [
    {
      question: "What is Node.js?",
      answers: [
        "A programming language",
        "A front-end framework",
        "A JavaScript runtime environment on the server side"
      ],
      correct: 2
    },
    {
      question: "What is the main goal of Node.js?",
      answers: [
        "Developing user interfaces",
        "Running JavaScript code in the browser",
        "Performing server-side operations efficiently"
      ],
      correct: 3
    },
    {
      question: "Which module in Node.js is used to handle file system operations?",
      answers: [
        "fs",
        "http",
        "path"
      ],
      correct: 1
    },
    {
      question: "What does npm mean in the context of Node.js?",
      answers: [
        "Node Package Manager, used to manage software packages in JavaScript",
        "Node Programming Module, an essential part of the Node.js core",
        "New Programming Method, a modern approach to Node.js development"
      ],
      correct: 1
    },
    {
      question: "What is the main characteristic of Node.js's non-blocking I/O model?",
      answers: [
        "Blocks the execution of operations until completion",
        "Allows multiple operations to occur simultaneously without blocking",
        "Uses only synchronous operations"
      ],
      correct: 2
    },
    {
      question: "What is Express in the context of Node.js?",
      answers: [
        "A NoSQL database",
        "A web framework for Node.js",
        "A library for string manipulation"
      ],
      correct: 2
    },
    {
      question: "What is the purpose of the 'http' module in Node.js?",
      answers: [
        "Handling file system operations",
        "Manipulating HTTP requests and responses",
        "Managing JavaScript packages"
      ],
      correct: 2
    },
    {
      question: "What does the term 'callback' mean in the context of Node.js?",
      answers: [
        "A function executed immediately after declaration",
        "A common syntax error in JavaScript code",
        "A function passed as an argument to another function and called later"
      ],
      correct: 3
    },
    {
      question: "What is the purpose of the 'npm init' command in Node.js?",
      answers: [
        "Initiating a new Node.js project and creating a package.json file",
        "Installing Node.js on the system",
        "Starting the Node.js web server"
      ],
      correct: 1
    },
    {
      question: "How would you install an external package in your Node.js project using npm?",
      answers: [
        "npm add package-name",
        "npm install package-name",
        "node install package-name"
      ],
      correct: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const hits = new Set()
const questionTotal = questions.length
const showTotal = document.querySelector('#hits span')
showTotal.textContent = hits.size + ' of ' + questionTotal

// loop ou laço de repetição
for (const item of questions) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.question

  for (let answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = answer
    dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item))
    dt.querySelector('input').value = item.answers.indexOf(answer)
    dt.querySelector('input').onchange = (event) => {
      const itsCorrect = event.target.value == item.correct

      hits.delete(item)
      if (itsCorrect) {
        hits.add(item)
      }

      showTotal.textContent = hits.size + ' of ' + questionTotal
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
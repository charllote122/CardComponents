
import Card from "./components/Card"
import reactjs from "./assets/reactjs.png"
import reactnative from "./assets/reactnative.png"
import js from "./assets/js.png"
import css from "./assets/css.png"
import tailwind from "./assets/tailwind.png"
import html from "./assets/html.jpeg"
import express from "./assets/express.png"
import nodejs from "./assets/nodejs.png"

const App = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap " >
      <Card
        image={reactjs}
        title="React JS"
        description="A JavaScript library for building user interfaces."
      />
      <Card
        image={reactnative}
        title="React Native"
        description="A framework for building native apps using React."
      />
      <Card
        image={nodejs}
        title="Node.js"
        description="A runtime environment that lets you run JavaScript on the server side."
      />
      <Card
        image={express}
        title="Express.js"
        description="A minimal and flexible Node.js web application framework."
      />

      <Card
        image={tailwind}
        title="Tailwind CSS"
        description="A utility-first CSS framework for rapid UI development."
      />
      <Card
        image={css}
        title="CSS"
        description="Stylesheet language used for describing the look of a document."
      />
      <Card
        image={js}
        title="JavaScript"
        description="A programming language for web development."
      />
      <Card
        image={html}
        title="HTML"
        description="Standard markup language for creating web pages."
      />
    </div>
  )
}

export default App

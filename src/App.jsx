import React, { useState } from "react";

import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      icon: "🔘",
      title: "Button Component",
      description:
        "Reusable buttons with different styles, sizes and click events."
    },
    {
      icon: "🃏",
      title: "Card Component",
      description:
        "Flexible cards to display information with icons and action buttons."
    },
    {
      icon: "🪟",
      title: "Modal Component",
      description:
        "Interactive popup windows with open and close functionality."
    }
  ];

  return (
    <div className="app">

      <header className="header">
        <h2>ComponentKit</h2>
        <span>React UI Library</span>
      </header>

      <main>

        <section className="hero">
          <span className="badge">
            REACT COMPONENT LIBRARY
          </span>

          <h1>
            Build Better Interfaces
            <br />
            With Reusable Components
          </h1>

          <p>
            A simple and modern UI component library
            built with React.js.
          </p>

          <Button onClick={() => setIsModalOpen(true)}>
            Explore Modal
          </Button>
        </section>

        <section className="buttons-section">
          <h2>Button Components</h2>

          <p>Different button styles and sizes.</p>

          <div className="button-group">
            <Button variant="primary">Primary</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="outline">Outline</Button>

            <Button size="small">Small</Button>

            <Button size="large">Large</Button>

            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className="cards-section">
          <h2>Reusable Card Components</h2>

          <p>Flexible cards for different purposes.</p>

          <div className="card-container">
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onAction={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </section>

        <section className="modal-section">
          <h2>Modal Component</h2>

          <p>
            Click below to test the interactive popup.
          </p>

          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </section>

      </main>

      <footer>
        <p>© 2026 ComponentKit | Built with React.js</p>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to ComponentKit!"
      >
        <p>
          This is a reusable React Modal component.
          You can use it to display messages and information.
        </p>

        <Button onClick={() => setIsModalOpen(false)}>
          Got It
        </Button>
      </Modal>

    </div>
  );
}

export default App;
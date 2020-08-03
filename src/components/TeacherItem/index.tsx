import React from 'react'

import wppIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header className="flex items-center">
        <img src="https://avatars3.githubusercontent.com/u/42685889?s=460&u=4c5bfba6945756f05367849c5185ddb1e0ca4605&v=4" alt="Gustavo Vargas" />
        <div>
          <strong>Gustavo Vargas</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellat maxime quasi ipsum fuga assumenda earum eligendi<br /><br />
        ut molestias nihil, natus libero, voluptatibus harum,
        expedita a minus! Iste molestias, quo autem?
      </p>

      <footer className="flex items-center">
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button className="flex items-center" type="button">
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;

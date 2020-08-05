import React from 'react'

import api from "../../services/api"
import wppIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

interface TeachetItemProps {
  teacher: {
    id: Number;
    avatar: string;
    bio: string;
    cost: Number;
    name: string;
    subject: string;
    whatsapp: string
  }
}

const TeacherItem: React.FC<TeachetItemProps> = ({teacher}) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header className="flex items-center">
        <img src={teacher.avatar} alt="Gustavo Vargas" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer className="flex items-center">
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} className="flex items-center" href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;

import React, { useState, FormEvent } from 'react'
import { useHistory } from "react-router-dom"

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from "../../assets/images/icons/warning.svg"

import api from "../../services/api"

import "./styles.css"


function TeacherForm() {
  const history = useHistory()
  
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [bio, setBio] = useState("")

  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState("")

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: ""
    },
  ])

  function addScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: "", to: "" }
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post("/classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert("Cadastro sucedido!")
      history.push("/")
    }).catch(() => {
      alert("Error")
    })
  }

  function setScheduleItemValue(i: number, field: string, value: string) {
    setScheduleItems(
      scheduleItems.map((scheduleItem, idx) => {
        if (idx === i) {
          return { ...scheduleItem, [field]: value }
        }

        return scheduleItem
      })
    )
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input name="name" label="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
            <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
            <Textarea name="bio" label="biografia" value={bio} onChange={(e) => setBio(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Materia"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Física', label: 'Física' },
                { value: 'Química', label: 'Química' },
                { value: 'Português', label: 'Português' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'História', label: 'História' },
              ]}
            />
            <Input name="cost" label="Custo da hora/aula" value={cost} onChange={(e) => setCost(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
            <button type="button" onClick={addScheduleItem}>
                + Novo horário
            </button>
            </legend>

            {scheduleItems.map((item, i) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={item.week_day}
                    onChange={e => setScheduleItemValue(i, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },

                    ]}
                  />
                  <Input name="from" label="Das" type="time" value={item.from} onChange={e => setScheduleItemValue(i, 'from', e.target.value)} />
                  <Input name="to" label="Até" type="time" value={item.to} onChange={e => setScheduleItemValue(i, 'to', e.target.value)} />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p className="flex justify-center items-center">
              <img src={warningIcon} alt="warning" />
              Importante! <br />
              Preencha todos os dados
          </p>
            <button className="flex justify-center items-center" type="submit">
              Salvar cadastro
          </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm

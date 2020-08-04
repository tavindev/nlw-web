import React from 'react'

import { Link } from 'react-router-dom'

import Switcher from "../../components/Switcher"

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
  return (
    <div id="page-landing" className="flex justify-center items-center">
      <Switcher />
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo"/>
          <h2>Sua plataforma de Estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="landing"
          className="hero-image"
        />

        <div className="buttons-container flex justify-center">
          <Link to={"/study"} className="study flex justify-center items-center">
            <img src={studyIcon} alt="study"/>
            Estudar
          </Link>

          <Link to={"/teach"} className="give-classes flex justify-center items-center">
            <img src={giveClassesIcon} alt="give classes"/>
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections flex justify-center items-center">
          Total de x conexões já realizadas.{" "}
          <img src={purpleHeartIcon} alt="purple heart"/>
        </span>
      </div>
    </div>
  )
}

export default Landing

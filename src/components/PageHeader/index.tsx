import React from 'react'

import { Link } from 'react-router-dom'

import "./styles.css"

import logoImg from '../../assets/images/logo.svg'
import backIcon from "../../assets/images/icons/back.svg"

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header flex">
      <div className="top-bar-container flex justify-between items-center">
        <Link to={"/"}>
          <img src={backIcon} alt="back" />
        </Link>
        <img src={logoImg} alt="logo" />
      </div>

      <div className="header-content relative">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader;

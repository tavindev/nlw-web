import React from 'react'
import Switch from 'react-switch'

import { AppContextConsumer } from '../../utils/context';

import "./styles.css"


const Switcher: React.FC = () => {
  return (
    <AppContextConsumer>
      {ctx => ctx && (
        <div className="switcher">
          <Switch
            onChange={() => ctx.setIsOn(!ctx.isOn)}
            checked={true}
            checkedIcon={false}
            uncheckedIcon={false}
            width={45}
            height={18}
            handleDiameter={22}
          />
        </div>
      )}

    </AppContextConsumer>
  )
}

export default Switcher;

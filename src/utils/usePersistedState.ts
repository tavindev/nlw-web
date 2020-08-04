import React, { useState, useEffect } from 'react'

export default function F(key: string, initialState: boolean) {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key)

    return value ? JSON.parse(value) : initialState
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState] as const
}

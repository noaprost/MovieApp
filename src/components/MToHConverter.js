import React, { useState } from 'react'

function MToHConverter() {
  const [amount, setAmount] = useState(0)
  const [inverted, setInverted] = useState(false)

  const onReset = () => {
    setAmount(0)
  }

  const onChange = (event) => {
    setAmount(event.target.value)
  }

  const onInvert = () => {
    setInverted((current) => !current)
  }

  return (
    <div>
      <label id="minutes">Minutes</label>
      <input
        value={inverted ? amount * 60 : amount}
        htmlFor="minutes"
        placeholder="input minutes"
        type="number"
        onChange={onChange}
        disabled={inverted}
      />
      <br />
      <label id="hours">Hours</label>
      <input
        value={inverted ? amount : Math.round(amount / 60)}
        htmlFor="hours"
        placeholder="input hours"
        type="number"
        onChange={onChange}
        disabled={!inverted}
      />
      <br />
      <button onClick={onReset}>Reset</button>
      <button onClick={onInvert}>{inverted ? 'return' : 'swap'} </button>
    </div>
  )
}

export default MToHConverter

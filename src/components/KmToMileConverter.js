import React, { useState } from 'react'

function KmToMileConverter() {
  const [amount, setAmount] = useState(0)
  const [inverted, setInverted] = useState(false)

  const onReset = () => {
    setAmount(0)
  }

  const onChange = (event) => {
    setAmount(event.target.value)
  }

  const onInvert = () => {
    setAmount(0)
    setInverted((current) => !current)
  }

  return (
    <div>
      <label id="Km">Km</label>
      <input
        value={inverted ? amount * 1.609344 : amount}
        htmlFor="Km"
        placeholder="input km"
        type="number"
        onChange={onChange}
        disabled={inverted}
      />
      <br />
      <label id="mile">Mile</label>
      <input
        value={inverted ? amount : amount / 1.609344}
        htmlFor="mile"
        placeholder="input mile"
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

export default KmToMileConverter

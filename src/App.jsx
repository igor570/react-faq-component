import { useState } from 'react'
import './App.scss'

const textData = [
  {
    id: crypto.randomUUID,
    text: 'An adult heart beats about 60 to 80 times per minute',
  },
  {
    id: crypto.randomUUID,
    text: 'IBM released their first laptop, the PC Convertible, in 1986',
  },
  {
    id: crypto.randomUUID,
    text: 'We can only see about 2,000 stars in the sky',
  },
]

function Button({ buttonText, setTextBlock }) {
  function handleClick(event) {
    if (event.target.innerHTML === '❤️') {
      setTextBlock(textData[0].text)
    } else if (event.target.innerHTML === '💫') {
      setTextBlock(textData[1].text)
    } else if (event.target.innerHTML === '💻') {
      setTextBlock(textData[2].text)
    } else {
      return
    }
    //One liner solution for IF statement: setTextBlock(textData[index].text), add index prop to each button
  }

  return (
    <button className='btn' onClick={handleClick}>
      {buttonText}
    </button>
  )
}

function TextBlock({ textBlock }) {
  return textBlock ? (
    <div className='textBlock'>{textBlock}</div>
  ) : (
    <div className='textBlock'>Click a button!</div>
  )
}

function App() {
  const [textBlock, setTextBlock] = useState()
  const buttons = ['❤️', '💫', '💻']

  return (
    <>
      <div className='contentWrapper'>
        <div className='buttonWrapper'>
          {buttons.map((icon, index) => (
            <Button
              key={index}
              buttonText={icon}
              index={index}
              setTextBlock={setTextBlock}
            />
          ))}
        </div>
        <div className='textBlockWrapper'>
          <TextBlock textBlock={textBlock} />
        </div>
      </div>
    </>
  )
}

export default App

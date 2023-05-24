import './App.css';
import useSound from 'use-sound';
import marimbaNote from './partch-marimba-G.mp3'
import { useState } from 'react';

function App() {

  const array = [2,5,1,2,3,4,5,1,2,4,1,3]

  let myMap = {}

  for (let i = 0; i < array.length; i++) {
    if (myMap[array[i]]) {
      console.log(array[i])
      break
    } else myMap[array[i]] = 1
  }

  const [note] = useSound(marimbaNote)

  const [elevenEight] = useSound(marimbaNote, { volume: .6, playbackRate: (11 / 4) })

  const [nineEight] = useSound(marimbaNote, { volume: .6, playbackRate: (9 / 4) })
  const [elevenTen] = useSound(marimbaNote, { volume: .6, playbackRate: (11 / 5) })

  const [sevenFour] = useSound(marimbaNote, { volume: .6, playbackRate: (7 / 4) })
  const [nineFive] = useSound(marimbaNote, { volume: .6, playbackRate: (9 / 5) })
  const [elevenSix] = useSound(marimbaNote, { volume: .6, playbackRate: (11 / 6) })

  const [threeTwo] = useSound(marimbaNote, { volume: .6, playbackRate: (3 / 2) })
  const [sevenFive] = useSound(marimbaNote, { volume: .6, playbackRate: (7 / 5) })
  const [elevenSeven] = useSound(marimbaNote, { volume: .6, playbackRate: (11 / 7) })

  const [fiveFour] = useSound(marimbaNote, { volume: .6, playbackRate: (5 / 4) })
  const [sixFive] = useSound(marimbaNote, { volume: .6, playbackRate: (6 / 5) })
  const [sevenSix] = useSound(marimbaNote, { volume: .6, playbackRate: (7 / 6) })
  const [nineSeven] = useSound(marimbaNote, { volume: .6, playbackRate: (9 / 7) })
  const [elevenNine] = useSound(marimbaNote, { volume: .6, playbackRate: (11 / 9) })

  const [eightFive] = useSound(marimbaNote, { volume: .6, playbackRate: (4 / 5) })
  const [fiveThree] = useSound(marimbaNote, { volume: .6, playbackRate: (5 / 6) })
  const [twelveSeven] = useSound(marimbaNote, { volume: .6, playbackRate: (12 / 14) })
  const [fourteenNine] = useSound(marimbaNote, { volume: .6, playbackRate: (7 / 9) })
  const [eighteenEleven] = useSound(marimbaNote, { volume: .6, playbackRate: (9 / 11) })

  const [fourThree] = useSound(marimbaNote, { volume: .6, playbackRate: (2 / 3) })
  const [tenSeven] = useSound(marimbaNote, { volume: .6, playbackRate: (5 / 7) })
  const [fourteenEleven] = useSound(marimbaNote, { volume: .6, playbackRate: (7 / 11) })

  const [eightSeven] = useSound(marimbaNote, { volume: .6, playbackRate: (4 / 7) })
  const [tenNine] = useSound(marimbaNote, { volume: .6, playbackRate: (5 / 9) })
  const [twelveEleven] = useSound(marimbaNote, { volume: .6, playbackRate: (6 / 11) })

  const [sixteenNine] = useSound(marimbaNote, { volume: .6, playbackRate: (4 / 9) })
  const [twentyEleven] = useSound(marimbaNote, { volume: .6, playbackRate: (5 / 11) })

  const [sixteenEleven] = useSound(marimbaNote, { volume: .6, playbackRate: (4 / 11) })

  const [clickOrHover, setClickOrHover] = useState('click')

  function handleClickOrHover() {

    if (clickOrHover === 'click') {
      console.log('to mouseover')
      setClickOrHover('hover')
    }
    else if (clickOrHover === 'hover') {
      console.log('to click')
      setClickOrHover('click')
    }
  }

  function HoverInstrument() {
    return (
      <section id='instrument'>
        <div className='one-row'>
          <button id='elevenEight' onMouseOver={elevenEight}>11/8</button>
        </div>
        <div className='one-row'>
          <button id='nineEight' onMouseOver={nineEight}>9/8</button>
          <button id='elevenTen' onMouseOver={elevenTen}>11/10</button>
        </div>
        <div className='one-row'>
          <button id='sevenFour' onMouseOver={sevenFour}>7/4</button>
          <button id='nineFive' onMouseOver={nineFive}>9/5</button>
          <button id='elevenSix' onMouseOver={elevenSix}>11/6</button>
        </div>
        <div className='one-row'>
          <button id='threeTwo' onMouseOver={threeTwo}>3/2</button>
          <button id='sevenFive' onMouseOver={sevenFive}>7/5</button>
          <button id='threeTwo' onMouseOver={threeTwo}>3/2</button>
          <button id='elevenSeven' onMouseOver={elevenSeven}>11/7</button>
        </div>
        <div className='one-row'>
          <button id='fiveFour' onMouseOver={fiveFour}>5/4</button>
          <button id='sixFive' onMouseOver={sixFive}>6/5</button>
          <button id='sevenSix' onMouseOver={sevenSix}>7/6</button>
          <button id='nineSeven' onMouseOver={nineSeven}>9/7</button>
          <button id='elevenNine' onMouseOver={elevenNine}>11/9</button>
        </div>
        <div className='one-row'>
          <button id='one' onMouseOver={note}>1/1</button>
          <button id='five' onMouseOver={note}>5/5</button>
          <button id='three' onMouseOver={note}>3/3</button>
          <button id='seven' onMouseOver={note}>7/7</button>
          <button id='nine' onMouseOver={note}>9/9</button>
          <button id='eleven' onMouseOver={note}>11/11</button>
        </div>
        <div className='one-row'>
          <button id='eightFive' onMouseOver={eightFive}>8/5</button>
          <button id='fiveThree' onMouseOver={fiveThree}>5/3</button>
          <button id='twelveSeven' onMouseOver={twelveSeven}>12/7</button>
          <button id='fourteenNine' onMouseOver={fourteenNine}>14/9</button>
          <button id='eighteenEleven' onMouseOver={eighteenEleven}>18/11</button>
        </div>
        <div className='one-row'>
          <button id='fourThree' onMouseOver={fourThree}>4/3</button>
          <button id='tenSeven' onMouseOver={tenSeven}>10/7</button>
          <button id='fourThree' onMouseOver={fourThree}>4/3</button>
          <button id='fourteenEleven' onMouseOver={fourteenEleven}>14/11</button>
        </div>
        <div className='one-row'>
          <button id='eightSeven' onMouseOver={eightSeven}>8/7</button>
          <button id='tenNine' onMouseOver={tenNine}>10/9</button>
          <button id='twelveEleven' onMouseOver={twelveEleven}>12/11</button>
        </div>
        <div className='one-row'>
          <button id='sixteenNine' onMouseOver={sixteenNine}>16/9</button>
          <button id='twentyEleven' onMouseOver={twentyEleven}>20/11</button>
        </div>
        <div className='one-row'>
          <button id='sixteenEleven' onMouseOver={sixteenEleven}>16/11</button>
        </div>
      </section>
    )
  }

  function ClickInstrument() {
    return (
      <section id='instrument'>
        <div className='one-row'>
          <button id='elevenEight' onClick={elevenEight}>11/8</button>
        </div>
        <div className='one-row'>
          <button id='nineEight' onClick={nineEight}>9/8</button>
          <button id='elevenTen' onClick={elevenTen}>11/10</button>
        </div>
        <div className='one-row'>
          <button id='sevenFour' onClick={sevenFour}>7/4</button>
          <button id='nineFive' onClick={nineFive}>9/5</button>
          <button id='elevenSix' onClick={elevenSix}>11/6</button>
        </div>
        <div className='one-row'>
          <button id='threeTwo' onClick={threeTwo}>3/2</button>
          <button id='sevenFive' onClick={sevenFive}>7/5</button>
          <button id='threeTwo' onClick={threeTwo}>3/2</button>
          <button id='elevenSeven' onClick={elevenSeven}>11/7</button>
        </div>
        <div className='one-row'>
          <button id='fiveFour' onClick={fiveFour}>5/4</button>
          <button id='sixFive' onClick={sixFive}>6/5</button>
          <button id='sevenSix' onClick={sevenSix}>7/6</button>
          <button id='nineSeven' onClick={nineSeven}>9/7</button>
          <button id='elevenNine' onClick={elevenNine}>11/9</button>
        </div>
        <div className='one-row'>
          <button id='one' onClick={note}>1/1</button>
          <button id='five' onClick={note}>5/5</button>
          <button id='three' onClick={note}>3/3</button>
          <button id='seven' onClick={note}>7/7</button>
          <button id='nine' onClick={note}>9/9</button>
          <button id='eleven' onClick={note}>11/11</button>
        </div>
        <div className='one-row'>
          <button id='eightFive' onClick={eightFive}>8/5</button>
          <button id='fiveThree' onClick={fiveThree}>5/3</button>
          <button id='twelveSeven' onClick={twelveSeven}>12/7</button>
          <button id='fourteenNine' onClick={fourteenNine}>14/9</button>
          <button id='eighteenEleven' onClick={eighteenEleven}>18/11</button>
        </div>
        <div className='one-row'>
          <button id='fourThree' onClick={fourThree}>4/3</button>
          <button id='tenSeven' onClick={tenSeven}>10/7</button>
          <button id='fourThree' onClick={fourThree}>4/3</button>
          <button id='fourteenEleven' onClick={fourteenEleven}>14/11</button>
        </div>
        <div className='one-row'>
          <button id='eightSeven' onClick={eightSeven}>8/7</button>
          <button id='tenNine' onClick={tenNine}>10/9</button>
          <button id='twelveEleven' onClick={twelveEleven}>12/11</button>
        </div>
        <div className='one-row'>
          <button id='sixteenNine' onClick={sixteenNine}>16/9</button>
          <button id='twentyEleven' onClick={twentyEleven}>20/11</button>
        </div>
        <div className='one-row'>
          <button id='sixteenEleven' onClick={sixteenEleven}>16/11</button>
        </div>
      </section>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diamond Marimba</h1>
      </header>
      <main>
        <section id='slider'>
          <h2>Click</h2>
          <label className="switch">
            <input type="checkbox" onClick={handleClickOrHover} />
            <span className="slider round"></span>
          </label>
          <h2>Hover</h2>
        </section>
        {clickOrHover === 'click' ? ClickInstrument() : HoverInstrument()}
      </main>
    </div>
  );
}

export default App;

'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TypingGame() {
  const word = "Hello"
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(10)
  
  const typeRef = useRef(null)


  // 단어입력
  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(typeRef.current.value)
    if (word.toLowerCase() === typeRef.current.value.toLowerCase()) {
      setScore(score + 1)
      typeRef.current.value = ""
      setTime(10);
    }
    // console.log(score)
  }

  // 게임시작 버튼
  const gameStart = () => {
    setTime(10)
    setScore(0)
    setIsPlaying(true)
  }

  // 카운트다운 이부분 잘 모르겠음...
  useEffect(() => {
    if (isPlaying){
      if (time > 0) {
        if (timer) {
          clearTimeout(timer);
        }
        setTimer(setTimeout(() => setTime(time - 1), 1000))
      }

      time === 0 && setIsPlaying(false) 
    }
  },[time, isPlaying])


  return(
    <div className="flex flex-col items-center space-y-40">
      <div className="w-full">
        <Link href={"./"}>뒤로가기</Link>
        <div className="flex justify-center"><h1>Typing game</h1></div>
      </div>

      <div className="flex flex-col space-y-10">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-center space-y-20">
            <h1>{word}</h1>
            <input className="text-black" type="text" ref={typeRef} disabled={!isPlaying} />
            <div className="flex space-x-10">
              <h1>
                남은시간: {time} 초
              </h1>
              <h1>
                획득점수: {score} 점
              </h1>
            </div>
          </div>
        </form>

        <button disabled={isPlaying} onClick={gameStart}>
          {isPlaying ? <h1>게임중</h1> : <h1>게임시작</h1>}
        </button>
      </div>
    </div>
  )
}
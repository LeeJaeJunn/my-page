import Link from "next/link";

export default function Game() {
  return(
    <div className="flex flex-col items-center space-y-40">
      <div className="w-full">
        <Link href={"./"}>홈</Link>
        <div className="flex justify-center"><h1>Game</h1></div>     
      </div>
      <Link href={"/game/typing_game"}>Typing Game</Link>
    </div>
  )
}
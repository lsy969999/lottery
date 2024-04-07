import { Suspense, lazy } from "react"
import { balls } from "../components/lottery/const"
import { useTexture } from "@react-three/drei"

const LotteryLazy = lazy(() => import('../components/lottery/Lottery'))

const Home = () => {
  return (
    <div>
        <Suspense fallback={<div>loading...</div>}>
            <LotteryLazy/>
        </Suspense>
    </div>
  )
}

export default Home



balls.forEach(item=>{
    useTexture.preload(item.texture);
})
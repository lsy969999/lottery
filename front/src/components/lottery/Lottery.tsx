import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import Game from "./Game"
import styled from 'styled-components'
import { Perf } from 'r3f-perf';

const CanvasStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`;

const Lottery = () => {
  return (
    <CanvasStyle>
        <Canvas
            onCreated={(state)=>{
                state.camera.position.set(0, 1, -5);
            }}
        >
            {/* <axesHelper args={[5]} /> */}
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <Game />
        </Canvas>
    </CanvasStyle>
  )
}

export default Lottery
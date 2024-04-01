import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import Game from "./Game"
import styled from 'styled-components'
import { Perf } from 'r3f-perf';

const CanvasStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const Lottery = () => {
  return (
    <CanvasStyle>
        <Canvas
            style={{
                border: '1px solid black',
                width: '100vw',
                height: '100vh'
            }}
            camera={ {
                position: [ 0, 8, 8 ]
            } }
        >
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <Game />
        </Canvas>
    </CanvasStyle>
  )
}

export default Lottery
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
            // style={{
            //     border: '1px solid black',
            //     width: '100vw',
            //     height: '100vh'
            // }}
            camera={ {
                position: [ 14, 2, 0 ],
                rotation: [ 0, Math.PI /2, 0 ]
            } }
        >
            <axesHelper args={[5]} />
            <Perf position="top-left" />
            <OrbitControls  />
            <Game />
        </Canvas>
    </CanvasStyle>
  )
}

export default Lottery
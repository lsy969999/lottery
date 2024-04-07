import {  useTexture } from "@react-three/drei"
import {  Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
import {  useMemo, useRef } from "react";
import { ballInjectorPosRef, balls } from "./const";
import { Machine } from "./Machine";
import { getRandomBetween } from "../../utils/math";
import { button, useControls } from "leva";
const Game = () => {
    const randomBalls = useMemo(()=>{
        const rBalls = ballRandomPosGenerate();
        return rBalls;
    }, []);

    const { rapierDebug } = useControls('setting',{
        rapierDebug: false,
        ballFixed: false,
        reset: button(() => {
            console.log('todo')
        }),
        start: button(()=>{
            console.log('start');
        })
    })
    return (
        <Physics debug={ rapierDebug } timeStep={1/300} maxCcdSubsteps={1}>
            <directionalLight
                position={ [ 4, 4, 1 ] }
                intensity={ 4.5 }
            />
            <ambientLight intensity={ 1.5 } />

            <Machine />

            {
                randomBalls.map((item) => {
                    return (
                        <Ball
                            key={ item.num }
                            ballNum={ item.num }
                            ballTexture={ item.texture }
                            pos={ item.pos }
                        />
                    )
                })
            }

            {/* <Text
                position={ [ 0, -1.5, -1.5 ] }
                rotation={ [ Math.PI / 180 * 30, Math.PI, 0] }
            >
                O, O, O, O, O, O / O 
            </Text> */}
        </Physics>
    )
}

export default Game


interface BallProp {
    ballNum: number,
    ballTexture: string,
    pos: { x: number, y: number, z: number },
}


const Ball = ({ ballNum, ballTexture, pos }: BallProp) => {
    const ballRef = useRef<RapierRigidBody>(null);
    const texture = useTexture(ballTexture);

    const { ballFixed } = useControls('setting',{
        ballFixed: true,
    })

    const posX = pos.x 
    const posY = pos.y 
    const posZ = pos.z 
    return (
        <RigidBody
            userData={ { ballNum } }
            ref={ ballRef }
            type={ ballFixed ? 'fixed' : 'dynamic' }
            colliders='ball'
            position={ [ posX, posY, posZ ] }
            scale={ [ 0.09, 0.09, 0.09 ] }
            ccd={ false }
        >
            <mesh>
                <sphereGeometry  />
                <meshBasicMaterial map={texture}/>
            </mesh>
        </RigidBody>
    )
}

function ballRandomPosGenerate(){
    const posRef = [...ballInjectorPosRef];
    const vBalls = balls;
    return vBalls.map(b=>{
        const rVal = getRandomBetween(0, posRef.length - 1);
        const sp =  posRef.splice(rVal, 1)
        console.log(sp)
        return {...b, pos: {...sp[0]}}
    });
}
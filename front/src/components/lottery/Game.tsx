import { useGLTF, useTexture } from "@react-three/drei"
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier";
import * as THREE from 'three'
// import { getRandomBetween } from "../../utils/math";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { balls } from "./const";
import { button, useControls } from "leva";

const Game = () => {
    const ballCases = useGLTF('public/models/ball_case.gltf');
    //temp todo: gltfjsx
    ballCases.scene.traverse(child => {
        if (child instanceof THREE.Mesh && child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 0.01;
            child.material.side = THREE.DoubleSide;
        }
    })

    const { mixstep1, mixstep2, rapierDebug } = useControls({
        rapierDebug: true,
        mixstep1: false,
        mixstep2: false,
        reset: button(() => {
            console.log('todo')
        })
    })
    return (
        <Physics debug={ rapierDebug }>
            <directionalLight
                position={ [ 0, 1, 1 ] }
                intensity={ 4.5 }
            />
            {/* <ambientLight intensity={ 1.5 } /> */}
            {/* <mesh>
                <boxGeometry/>
                <meshBasicMaterial/>
            </mesh> */}

            {/* temp cover */}
            <RigidBody
                type="fixed"
                position={ [0, 4, 0] }
                rotation={ [0, 0, 0] }
                scale={ [3, 1, 3] }
            >
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial side={THREE.DoubleSide} />
                </mesh>
            </RigidBody>

            {/* ball case  */}
            <RigidBody type="fixed" colliders='trimesh'>
                <primitive object={ ballCases.scene } scale={4} position={ [ 0, 0, 0] }>
                </primitive>
            </RigidBody>

            {
                balls.map((item) => {
                    return (
                        <Ball
                            key={ item.num }
                            ballNum={ item.num }
                            ballTexture={ item.texture }
                            pos={ item.pos }
                            mixstep1={ mixstep1 }
                            mixstep2={ mixstep2 }
                        />
                    )
                })
            }

            {/* <InstancedBalls /> */}
            {/* <Text3D
                font={'public/font/gt.json'}
                position={ [0, 0, 0] }
                quaternion={ new THREE.Quaternion().setFromEuler(new THREE.Euler(1, 0, 0))}
            >
                asdfsdf
            </Text3D> */}
        </Physics>
    )
}

export default Game


interface BallProp {
    ballNum: number,
    ballTexture: string,
    pos: { x: number, y: number, z: number },
    mixstep1: boolean,
    mixstep2: boolean,
}


const Ball = ({ ballNum, ballTexture, pos, mixstep1, mixstep2 }: BallProp) => {
    const ballRef = useRef<RapierRigidBody>(null);
    const texture = useTexture(ballTexture);
    useFrame(() => {
        const curt = ballRef.current;
        const origin = curt?.translation()
        const x = origin?.x;
        const y = origin?.z;
        const z = origin?.z;
        if (ballNum) {
            // console.log(x, y, z)
        }
        if (
                curt
                && mixstep1
                && x && y && z
                && x < 1 && x > -2
                && y < 1 && y > -2
                && z < 1 && z > -2
            )
        {
            // const rotX = getRandomBetween(-0.01, -0.01, false)
            // const rotY = getRandomBetween(-0.01, -0.01, false)
            // const rotZ = getRandomBetween(-0.01, -0.01, false)
            // const posR = getRandomBetween(-0.1, 0.1, false)
            // console.log(posR)
            // const posR2 = getRandomBetween(-0.1, 0.1, false)
            // console.log(posR)
            curt.applyImpulse({ x: 0, y: 0.1, z: 0 }, true)

            // curt.applyTorqueImpulse({ x: rotX/ 100, y: rotY/ 100, z: rotZ / 100}, true)
        }

        if (
            curt
            && mixstep2
            && x && y && z
            && x < 2 && x > -2
            && y < -0.5
            && z < 2 && z > -2
        )
    {
        // const rotX = getRandomBetween(-0.01, -0.01, false)
        // const rotY = getRandomBetween(-0.01, -0.01, false)
        // const rotZ = getRandomBetween(-0.01, -0.01, false)
        // const posR = getRandomBetween(-1, 1, false)
        // const posR2 = getRandomBetween(-1, 1, false)
        // console.log(posR)
        curt.applyImpulse({ x: 0, y: 0.04, z: 0 }, true)

        // curt.applyTorqueImpulse({ x: rotX/ 100, y: rotY/ 100, z: rotZ / 100}, true)
    }
    })
    const posX = pos.x 
    const posY = pos.y 
    const posZ = pos.z 
    return (
        <RigidBody
            ref={ ballRef }
            type="dynamic"
            colliders='ball'
            position={ [ posX, posY, posZ ] }
            scale={ [ 0.4, 0.4, 0.4 ] }
        >
            <mesh>
                <sphereGeometry  />
                <meshBasicMaterial map={texture}/>
            </mesh>
            {/* <Text>a</Text> */}
            {/* <Text fontSize={ 1 } position={ [1, 0, 0] } rotation-y={ Math.PI / 2 }>13</Text> */}
            
        </RigidBody>
    )
}
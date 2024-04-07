/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { BallCollider, CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { button, useControls } from 'leva'
import gsap from 'gsap'

type GLTFResult = GLTF & {
  nodes: {
    BallCatcherGuider1: THREE.Mesh
    BallCatcherGuider2: THREE.Mesh
    ResultCase: THREE.Mesh
    MainSupport: THREE.Mesh
    ResultGuider: THREE.Mesh
    BallCase: THREE.Mesh
    BallInjector3: THREE.Mesh
    BallInjector2: THREE.Mesh
    BallInjecter1: THREE.Mesh
    BallInjector4: THREE.Mesh
    BallInjector5: THREE.Mesh
    BallInjector6: THREE.Mesh
    BallCaseBallInjectorCap: THREE.Mesh
    BallCaseUpperCap: THREE.Mesh
    BallCatcher1: THREE.Mesh
    BallCatcher2: THREE.Mesh
    BallCatcher3: THREE.Mesh
    BallCatcher4: THREE.Mesh
  }
  materials: {}
}

export function Machine(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF('models/ballcase2.glb') as GLTFResult
  const { nodes }= gltf
  nodes.BallCatcher1.material.transparent = true;
  nodes.BallCatcher1.material.opacity = 0.4;

//   const catcherMove = () => {
//     isCatcherStop = false
//   }

//   const catcherStop = () => {
//     isCatcherStop = true
//   }

//   const capBlock = () => {
//     isCapBlcok = true;
//     upperCapRef.current?.setTranslation({x: 0, y: 0, z: 0}, true);
//   }

//   const capRelease = () => {
//     isCapBlcok = false;
//     upperCapRef.current?.setTranslation({x: 0, y: 0.5, z: 0}, true);
//   }

//   let isCatcherStop = true;
//   let isCapBlcok = false;

  useFrame((state) => {
    // const origin = catcher1Ref.current!.rotation()    
    // const time = state.clock.getElapsedTime();
    // const rotation = new THREE.Quaternion();
    
    // const test = new THREE.Euler()
    // test.setFromQuaternion(new THREE.Quaternion(origin.x, origin.y, origin.z, origin.w));
    // const rad = test.z * 180 / Math.PI
    // // console.log(test.z)
    // const j = Math.round(Math.abs(rad ))% 90

    // /**
    //  * 90도 마다
    //  * 캐쳐는 멈추고 캡은 열어준다.
    //  * 90도가 아닐때마다
    //  * 
    //  * step1
    //  *  90도가 되어 캐쳐가가 멈춘다.
    //  *  캡은 열어준다.
    //  * step2
    //  *  공이 들어가서 캡이 닫혔다.
    //  *  1초뒤에 캐쳐를 움직여준다.
    //  */

    // if (!catcherStopIgnore) {
    //     // console.log(j)
    //     if (j === 0) {
    //         catcherStop()
    //         if (!capReleaseIgnore){
    //             capRelease()
    //             capReleaseIgnore = true
    //         }
    //     }
    // }
    

    // // 캐쳐 움직여주기
    // if (!isCatcherStop){
    //     rotation.setFromEuler(new THREE.Euler(test.x, test.y, test.z + (0.01)));
    //     catcher1Ref.current?.setNextKinematicRotation(rotation);
    // }

    // ////////////
    // const rhOrigin = resultHelperRef.current?.translation()
    // // console.log(rhOrigin)
    // const tmp = Math.sin(time *2) * 0.001
    // resultHelperRef.current?.setNextKinematicTranslation({x: rhOrigin.x, y: rhOrigin.y, z: rhOrigin.z + tmp});
  })

//   let catcherStopIgnore = false
//   let capReleaseIgnore = true

//   const checkStart = () => {
//     setTimeout(()=>{
//         catcherMove()
//         catcherStopIgnore = true
//         // isBallIn = false
//         setTimeout(()=>{
//             catcherStopIgnore = false
//             capReleaseIgnore = false
//             // capRelease();
//         }, 1000)
//     }, 1500)
//   }

//   useEffect(()=>{
//     setTimeout(()=>{
//         injectorCapRef.current?.setTranslation({ x: 0, y: 0, z: 0 }, true);
//     }, 5000)
//   }, [])
  return (
    <group {...props} dispose={null} >
      <group >
        <Injectors gltf={ gltf } />
        <BallCase gltf={ gltf } />
        <Catchers gltf={ gltf }/>
        <BallResult gltf={ gltf } />
        <MainSupport gltf={ gltf } />
      </group>
    </group>
  )
}

useGLTF.preload('models/ballcase2.glb')


///
///
///

/** 당첨볼 가이더  */
const Catchers = ({ gltf }: { gltf: GLTFResult }) => {
    const { nodes } = gltf;
    const catcher1Ref = useRef<RapierRigidBody>(null);
    useFrame((state) => {
        const origin = catcher1Ref.current!.rotation()    
        const delta = state.clock.getDelta();
        const rotation = new THREE.Quaternion();
        
        const euler = new THREE.Euler()
        euler.setFromQuaternion(new THREE.Quaternion(origin.x, origin.y, origin.z, origin.w));
        rotation.setFromEuler(new THREE.Euler(euler.x, euler.y, euler.z + (delta * 20)));
        catcher1Ref.current?.setNextKinematicRotation(rotation);
    })
    return (
        <>
            <RigidBody
                ref={ catcher1Ref }
                type='kinematicPosition'
                colliders='trimesh'
                ccd={true}
            >
                <mesh
                    geometry={nodes.BallCatcher1.geometry}
                    material={nodes.BallCatcher1.material}
                    position={[0, 1.1, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.15, 0.3, 0.15]}
                />
            
                <mesh
                    geometry={nodes.BallCatcher2.geometry}
                    material={nodes.BallCatcher2.material}
                    position={[1.1, 0, 0]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.15, 0.3, 0.15]}
                />
                <mesh
                    geometry={nodes.BallCatcher3.geometry}
                    material={nodes.BallCatcher3.material}
                    position={[0, -1.1, 0]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[0.15, 0.3, 0.15]}
                />
                <mesh
                    geometry={nodes.BallCatcher4.geometry}
                    material={nodes.BallCatcher4.material}
                    position={[-1.1, 0, 0]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    scale={[0.15, 0.3, 0.15]}
                />
            </RigidBody>

            <RigidBody
                type='fixed'
                colliders='trimesh'
            >
                <mesh
                    geometry={nodes.BallCatcherGuider1.geometry}
                    material={nodes.BallCatcherGuider1.material}
                    position={[0, 0, -0.16]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.5}
                />
                <mesh
                    geometry={nodes.BallCatcherGuider2.geometry}
                    material={nodes.BallCatcherGuider2.material}
                    position={[0, 0, 0.16]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.5}
                />
            </RigidBody>
        </>
    )
}

/** 공 통 */
const BallCase = ({ gltf } : { gltf: GLTFResult }) => {
    const { nodes } = gltf;

    const upperCapRef = useRef<RapierRigidBody>(null);
    return (
        <>
            <RigidBody
                ref={ upperCapRef }
                type='kinematicPosition'
                colliders='trimesh'
                ccd={true}
                position={ [ 0, 0.5, 0 ] }
            >
                <mesh
                geometry={nodes.BallCaseUpperCap.geometry}
                material={nodes.BallCaseUpperCap.material}
                />
            </RigidBody>
            <RigidBody
                type='fixed'
                colliders='trimesh'
            >
                <mesh geometry={nodes.BallCase.geometry} material={nodes.BallCase.material} />
            </RigidBody>
        </>
    )
}

/** 공 주입기 */
const Injectors = ({ gltf } : { gltf: GLTFResult }) => {
    const { nodes } = gltf;
    const injectorCapRef = useRef<RapierRigidBody>(null);
    const injectorRef = useRef<RapierRigidBody>(null);

    useControls('machine', {
        isInjectorCapBlocked: {
            value: false,
            onChange: (value) => {
                if (value)
                    handleInjectorCapBlock()
                else 
                    handleInjectorCapRelease()
            }
        },
        isInjectorDown: {
            value: false,
            onChange: (value) => {
                if (value)
                    handleInJectorDown()
                else 
                    handleInejctorUp()
            }
        }
    })

    const handleInjectorCapBlock = () => {
        const trs = injectorCapRef.current!.translation();
        const pos = {
            z: trs.z,
        }
        gsap.to(pos, { duration: 1, z: 0,  ease: 'power1.inOut', onUpdate: () => {
            injectorCapRef.current?.setTranslation({ x: 0, y: 0, z: pos.z }, true);
        }})
    }

    const handleInjectorCapRelease = () => {
        const trs = injectorCapRef.current!.translation();
        const pos = {
            z: trs.z,
        }
        gsap.to(pos, { duration: 1, z: 1,  ease: 'power1.inOut', onUpdate: () => {
            injectorCapRef.current?.setTranslation({ x: 0, y: 0, z: pos.z }, true);
        }})
    }

    const handleInJectorDown = () => {
        const trs = injectorRef.current!.translation();
        const pos = {
            y: trs.y,
        }
        gsap.to(pos, { duration: 1, y: -1,  ease: 'power1.inOut', onUpdate: () => {
            injectorRef.current?.setTranslation({ x: 0, y: pos.y, z: 0 }, true);
        }})
    }

    const handleInejctorUp = () => {
        const trs = injectorRef.current!.translation();
        const pos = {
            y: trs.y,
        }
        gsap.to(pos, { duration: 1, y: 0,  ease: 'power1.inOut', onUpdate: () => {
            injectorRef.current?.setTranslation({ x: 0, y: pos.y, z: 0 }, true);
        }})
    }
    
    return (
        <>
            <RigidBody
                ref={ injectorCapRef }
                type='kinematicPosition'
                colliders='trimesh'
                position={ [ 0, 0, 1 ] }
            >
                <mesh
                    geometry={nodes.BallCaseBallInjectorCap.geometry}
                    material={nodes.BallCaseBallInjectorCap.material}
                />
            </RigidBody>
            <RigidBody
                ref={ injectorRef }
                type='kinematicPosition'
                colliders='trimesh'
            >
                <mesh
                    geometry={nodes.BallInjector3.geometry}
                    material={nodes.BallInjector3.material}
                    position={[0.2, 1.15, 1.2]}
                    scale={[0.11, 1, 0.11]}
                />
                <mesh
                    geometry={nodes.BallInjector2.geometry}
                    material={nodes.BallInjector2.material}
                    position={[0.43, 1.16, 1.1]}
                    scale={[0.11, 1, 0.11]}
                />
                <mesh
                    geometry={nodes.BallInjecter1.geometry}
                    material={nodes.BallInjecter1.material}
                    position={[0.66, 1.19, 1]}
                    scale={[0.11, 1, 0.11]}
                />
                <mesh
                    geometry={nodes.BallInjector4.geometry}
                    material={nodes.BallInjector4.material}
                    position={[-0.2, 1.15, 1.2]}
                    scale={[0.11, 1, 0.11]}
                />
                <mesh
                    geometry={nodes.BallInjector5.geometry}
                    material={nodes.BallInjector5.material}
                    position={[-0.43, 1.16, 1.1]}
                    scale={[0.11, 1, 0.11]}
                />
                <mesh
                    geometry={nodes.BallInjector6.geometry}
                    material={nodes.BallInjector6.material}
                    position={[-0.66, 1.19, 1]}
                    scale={[0.11, 1, 0.11]}
                />
            </RigidBody>
        </>
    )
}

/** 당첨볼 결과대 */
const BallResult = ({ gltf }: { gltf: GLTFResult }) => {
    const { nodes } = gltf;
    return (
        <>
            <RigidBody
                type='fixed'
            >
                <BallCollider
                    args={ [ 0.1 ] }
                    position={ [ 0, 1.22, 0 ] }
                    sensor
                    onIntersectionEnter={() => {
                        console.log('onIntersectionEnter')
                        // console.log("Goal!", payload)
                        
                        // payload.target.rigidBody?.applyImpulse({ x: 0, y: 0.01, z: 0 }, true)
                        // payload.other.rigidBody?.applyImpulse({ x: 0, y: 0.04, z: 0 }, true)
                        // upperCapRef.current?.setTranslation({x: 0, y: 0, z: 0}, true)
                        ;
                        // capBlock()
                        // checkStart();
                        

                        // isCatcherStop = false;
                    }}
                    onIntersectionExit={() => {
                        console.log('onIntersectionExit')
                        // upperCapRef.current?.setTranslation({x: 0, y: 0, z: 0}, true)
                        // nodes.BallCaseUpperCap.geometry.posi
                        // capRelease();
                        // isBallIn = false;
                    }}
                />
            </RigidBody>
            <RigidBody
                type='fixed'
                colliders='trimesh'
            >
                <mesh
                geometry={nodes.ResultCase.geometry}
                material={nodes.ResultCase.material}
                position={[0, -1.65, -0.75]}
                rotation={[0, 0, -1.676]}
                scale={[0.12, 1, 0.12]}
                />
            </RigidBody>
            <RigidBody
                type='fixed'
                colliders='trimesh'
            >
                <mesh
                geometry={nodes.ResultGuider.geometry}
                material={nodes.ResultGuider.material}
                position={[1.434, -1.123, -0.288]}
                rotation={[-Math.PI / 9, Math.PI / 2, 0]}
                scale={[0.15, 0.15, 1]}
                />
            </RigidBody>
        </>
    )
}

/** 하단 지지대 */
const MainSupport = ({ gltf } : { gltf: GLTFResult }) => {
    const { nodes } = gltf;
    return (
        <>
        <mesh
            geometry={nodes.MainSupport.geometry}
            material={nodes.MainSupport.material}
            position={[0.027, -3.59, -0.003]}
            scale={[1, 1.7, 1]}
        />
        </>
    )
}
import { InstancedRigidBodies, InstancedRigidBodyProps, RapierRigidBody } from "@react-three/rapier";
import { getRandomBetween } from "../../utils/math";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const InstancedBalls = () => {
    const iprop: (num: number, index: number) => InstancedRigidBodyProps = (num: number, index: number) => ({
        key: `instance${num}_` + index,
        position: [
            getRandomBetween(-0.3, 0.3, false),
            getRandomBetween(-0.3, 0.3, false),
            getRandomBetween(-0.3, 0.3, false),
        ],
        rotation: [
            Math.random(),
            Math.random(),
            Math.random(),
        ],
        scale: [ 0.35, 0.35, 0.35 ],
    })

    const ballCount1 = 10
    const ballInstances_1 = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []
        for(let i = 0; i < ballCount1; i++) {
            instances.push(iprop(1, i))
        }
        return instances
    }, [])

    const ballCount2 = 10
    const ballInstances_2 = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []
        for(let i = 0; i < ballCount2; i++) {
            instances.push(iprop(2, i))
        }
        return instances
    }, [])

    const ballCount3 = 10
    const ballInstances_3 = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []
        for(let i = 0; i < ballCount3; i++) {
            instances.push(iprop(3, i))
        }
        return instances
    }, [])

    const ballCount4 = 10
    const ballInstances_4 = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []
        for(let i = 0; i < ballCount4; i++) {
            instances.push(iprop(4, i))
        }
        return instances
    }, [])

    const ballCount5 = 5
    const ballInstances_5 = useMemo(() => {
        const instances: InstancedRigidBodyProps[] = []
        for(let i = 0; i < ballCount5; i++) {
            instances.push(iprop(5, i))
        }
        return instances
    }, [])
    const rigid1 = useRef<RapierRigidBody[]>(null);
    const rigid2 = useRef<RapierRigidBody[]>(null);
    const rigid3 = useRef<RapierRigidBody[]>(null);
    const rigid4 = useRef<RapierRigidBody[]>(null);
    const rigid5 = useRef<RapierRigidBody[]>(null);
    const rigids = [ rigid1, rigid2, rigid3, rigid4, rigid5 ]

    useFrame(() => {
        rigids.forEach(rigid => {
            rigid.current?.forEach(element => {
                // console.log(element)
                const origin = element.translation()
                const x = origin?.x;
                const y = origin?.z;
                const z = origin?.z;
                if (
                        element
                        && x
                        && y
                        && z
                        && x < 1 && x > -1
                        && y < 0// * -1
                        && z < 1 && z > -1
                    )
                {
                    // const posR = getRandomBetween(-1, 1, false)
                    // const posR2 = getRandomBetween(-1, 1, false)
                    element.applyImpulse({ x: 0, y: 0.4, z: 0 }, false)
                }
            });
        })
    })
    return (
        <>
            <InstancedRigidBodies ref={ rigid1 } instances={ ballInstances_1 } colliders='ball' ccd>
                <instancedMesh args={ [ undefined, undefined, ballCount1 ] } >
                    <sphereGeometry />
                    <meshBasicMaterial color={ 'yellow' } />
                </instancedMesh>
            </InstancedRigidBodies>
            <InstancedRigidBodies ref={ rigid2 } instances={ ballInstances_2 } colliders='ball' ccd>
                <instancedMesh args={ [ undefined, undefined, ballCount2 ] } >
                    <sphereGeometry />
                    <meshBasicMaterial color={ 'blue' } />
                </instancedMesh>
            </InstancedRigidBodies>
            <InstancedRigidBodies ref={ rigid3 } instances={ ballInstances_3 } colliders='ball' ccd>
                <instancedMesh args={ [ undefined, undefined, ballCount3 ] } >
                    <sphereGeometry />
                    <meshBasicMaterial color={ 'red' } />
                </instancedMesh>
            </InstancedRigidBodies>
            <InstancedRigidBodies ref={ rigid4 } instances={ ballInstances_4 } colliders='ball' ccd>
                <instancedMesh args={ [ undefined, undefined, ballCount4 ] } >
                    <sphereGeometry />
                    <meshBasicMaterial color={ 'gray' } />
                </instancedMesh>
            </InstancedRigidBodies>
            <InstancedRigidBodies ref={ rigid5 } instances={ ballInstances_5 } colliders='ball' ccd>
                <instancedMesh args={ [ undefined, undefined, ballCount5 ] } >
                    <sphereGeometry />
                    <meshBasicMaterial color={ 'green' } />
                </instancedMesh>
            </InstancedRigidBodies>
        </>
    )
};
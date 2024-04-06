export const ballInjector1Vec2 = { x: 0.2, z: 1.2 };
export const ballInjector2Vec2 = { x: 0.43, z: 1.1 };
export const ballInjector3Vec2 = { x: 0.65, z: 1 };
export const ballInjector4Vec2 = { x: -0.2, z: 1.2 };
export const ballInjector5Vec2 = { x: -0.43, z: 1.1 };
export const ballInjector6Vec2 = { x: -0.65, z: 1 };

export const ballInjectorY = [ 2, 1.8, 1.6, 1.4, 1.2, 1, 0.8, 0.6, 0.4, 0.2 ]

export const ballInjectorPosRef = [
    ...ballInjectorY.map( y => ({ ...ballInjector1Vec2, y }) ),
    ...ballInjectorY.map( y => ({ ...ballInjector2Vec2, y }) ),
    ...ballInjectorY.map( y => ({ ...ballInjector3Vec2, y }) ),
    ...ballInjectorY.map( y => ({ ...ballInjector4Vec2, y }) ),
    ...ballInjectorY.map( y => ({ ...ballInjector5Vec2, y }) ),
    ...ballInjectorY.map( y => ({ ...ballInjector6Vec2, y }) ),
]

export const balls = [
    { num: 1,  texture: 'texture/ball/1.png',  pos: { x: 0.2, y:  0.2, z: 1.2  } },
    { num: 2,  texture: 'texture/ball/2.png',  pos: { x: 0.2, y:  0.4, z: 1.2 } },
    { num: 3,  texture: 'texture/ball/3.png',  pos: { x: 0.2, y:  0.6, z: 1.2 } },
    { num: 4,  texture: 'texture/ball/4.png',  pos: { x: 0.2, y: 0.8, z: 1.2 } },
    { num: 5,  texture: 'texture/ball/5.png',  pos: { x: 0.2, y: 1, z: 1.2 } },
    { num: 6,  texture: 'texture/ball/6.png',  pos: { x: 0.2, y:   1.2, z: 1.2 } },
    { num: 7,  texture: 'texture/ball/7.png',  pos: { x: 0.2, y: 1.4, z: 1.2 } },
    { num: 8,  texture: 'texture/ball/8.png',  pos: { x: 0.2, y: 1.6, z: 1.2 } },
    { num: 9,  texture: 'texture/ball/9.png',  pos: { x: 0.2, y: 1.8, z: 1.2 } },
    { num: 10, texture: 'texture/ball/10.png', pos: { x: 0.2, y: 2, z: 1.2 } },

    { num: 11, texture: 'texture/ball/11.png', pos: { x: 0.43, y:   0.2, z: 1.1 } },
    { num: 12, texture: 'texture/ball/12.png', pos: { x: 0.43, y: 0.4, z: 1.1 } },
    { num: 13, texture: 'texture/ball/13.png', pos: { x: 0.43, y: 0.6, z: 1.1 } },
    { num: 14, texture: 'texture/ball/14.png', pos: { x: 0.43, y: 0.8, z: 1.1 } },
    { num: 15, texture: 'texture/ball/15.png', pos: { x: 0.43, y: 1, z: 1.1 } },
    { num: 16, texture: 'texture/ball/16.png', pos: { x: 0.43, y:   1.2, z: 1.1 } },
    { num: 17, texture: 'texture/ball/17.png', pos: { x: 0.43, y: 1.4, z: 1.1 } },
    { num: 18, texture: 'texture/ball/18.png', pos: { x: 0.43, y: 1.6, z: 1.1 } },
    { num: 19, texture: 'texture/ball/19.png', pos: { x: 0.43, y: 1.8, z: 1.1 } },
    { num: 20, texture: 'texture/ball/20.png', pos: { x: 0.43, y: 2, z: 1.1 } },

    { num: 21, texture: 'texture/ball/21.png', pos: { x: 0.65, y: 0.2, z: 1 } },
    { num: 22, texture: 'texture/ball/22.png', pos: { x: 0.65, y: 0.4, z: 1 } },
    { num: 23, texture: 'texture/ball/23.png', pos: { x: 0.65, y: 0.6, z: 1 } },
    { num: 24, texture: 'texture/ball/24.png', pos: { x: 0.65, y: 0.8, z: 1 } },
    { num: 25, texture: 'texture/ball/25.png', pos: { x: 0.65, y: 1, z: 1 } },
    { num: 26, texture: 'texture/ball/26.png', pos: { x: 0.65, y: 1.2, z: 1 } },
    { num: 27, texture: 'texture/ball/27.png', pos: { x: 0.65, y: 1.4, z: 1 } },
    { num: 28, texture: 'texture/ball/28.png', pos: { x: 0.65, y: 1.6, z: 1 } },
    { num: 29, texture: 'texture/ball/29.png', pos: { x: 0.65, y: 1.8, z: 1 } },
    { num: 30, texture: 'texture/ball/30.png', pos: { x: 0.65, y: 2, z: 1 } },

    { num: 31, texture: 'texture/ball/31.png', pos: { x: -0.2, y:  0.2, z: 1.2  } },
    { num: 32, texture: 'texture/ball/32.png', pos: { x: -0.2, y: 0.4, z: 1.2 } },
    { num: 33, texture: 'texture/ball/33.png', pos: { x: -0.2, y: 0.6, z: 1.2 } },
    { num: 34, texture: 'texture/ball/34.png', pos: { x: -0.2, y: 0.8, z: 1.2 } },
    { num: 35, texture: 'texture/ball/35.png', pos: { x: -0.2, y: 1, z: 1.2 } },
    { num: 36, texture: 'texture/ball/36.png', pos: { x: -0.2, y: 1.2, z: 1.2 } },
    { num: 37, texture: 'texture/ball/37.png', pos: { x: -0.2, y: 1.4, z: 1.2 } },
    { num: 38, texture: 'texture/ball/38.png', pos: { x: -0.2, y: 1.6, z: 1.2 } },
    { num: 39, texture: 'texture/ball/39.png', pos: { x: -0.2, y: 1.8, z: 1.2 } },
    { num: 40, texture: 'texture/ball/40.png', pos: { x: -0.2, y: 2, z: 1.2 } },

    { num: 41, texture: 'texture/ball/41.png', pos: { x: -0.43, y:   0.2, z: 1.1 } },
    { num: 42, texture: 'texture/ball/42.png', pos: { x: -0.43, y: 0.4, z: 1.1 } },
    { num: 43, texture: 'texture/ball/43.png', pos: { x: -0.43, y: 0.6, z: 1.1 } },
    { num: 44, texture: 'texture/ball/44.png', pos: { x: -0.43, y: 0.8, z: 1.1 } },
    { num: 45, texture: 'texture/ball/45.png', pos: { x: -0.43, y: 1, z:1.1 } },
]
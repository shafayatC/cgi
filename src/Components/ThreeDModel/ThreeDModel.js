import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

const ThreeDModel = () => {
    const { nodes, materials } = useGLTF('/L.glb')

    return (
        <>
            <Canvas className='bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 '>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <group rotation={[90, 0, 0]} scale={[12, 12, 12]} >
                    <mesh geometry={nodes['IF4923-L'].geometry} material={materials.defaultMat} />
                </group>
            </Canvas>
        </>


    );
};

export default ThreeDModel;
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

const ChairModel = () => {
    const { nodes, materials } = useGLTF('/chair.glb')


    const renderNodes = (nodes) => {
        return Object.values(nodes).map((node, index) => {
          if (node.type === 'Mesh') {
            const { geometry, material } = node;
            return (
              <mesh
                key={index}
                geometry={geometry}
                material={materials[material.name]}
              />
            );
          }
          return null;
        });
      };
    return (
        <>
            {console.log(nodes)}
            <Canvas className='bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 '>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <group scale={[2, 2, 2]}>
                {renderNodes(nodes)}
                 </group>
            </Canvas>
        </>
    );
};

export default ChairModel;
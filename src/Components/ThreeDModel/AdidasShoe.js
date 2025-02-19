import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

const AdidasShoe = () => {
    const { nodes, materials } = useGLTF('/vans_shoe.glb')

    return (
        <>
            {console.log(nodes)}
            <Canvas className='cursor-grab w-full h-full bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900' >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <group rotation={[5,0,5]}  scale={[1, 1, 1]} >
                    {/* {
                        Object.keys(nodes).forEach(function(key, index) {
                            // myObject[key] *= 2;
                            nodes[key].type == 'Mesh' &&  <mesh geometry={ nodes[nodes[key].name].geometry} material={materials[nodes[nodes[key].material.name]]} />
                            nodes[key].type == 'Mesh' &&  console.log(nodes[key].type)
                          })
                          
                    } */}
                    <mesh geometry={nodes['Object_2'].geometry} material={materials.Blue_Vans_Shoe} />

                </group>
            </Canvas>
        </>


    );
};

export default AdidasShoe;
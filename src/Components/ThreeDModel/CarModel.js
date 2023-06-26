import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

const CarModel = () => {
    const { nodes, materials } = useGLTF('/car.glb')


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
          }else if (node.type === 'Object3D'){
            const {name} = node; 
            return (
              <primitive object={nodes[name]} />

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
                <group scale={[0.2, 0.2, 0.2]}>
                {renderNodes(nodes)}

                        {/* {
                        Object.keys(nodes).forEach(function(key, index) {
                            // myObject[key] *= 2;
                            nodes[key].type == 'Mesh' &&  <mesh geometry={ nodes[`${nodes[key].name}`].geometry} material={materials[`${nodes[key].material.name}`]} />
                            // nodes[key].type == 'Mesh' &&  console.log('mesh: ' + nodes[key].name + ' metarial: ' + nodes[key].material.name)
                          })
                          
                    } */}
                    {/* <mesh geometry={nodes['forMayaAOpolySurface29_forMayaAOblinn6_0'].geometry} material={materials['forMayaAOblinn6']} />
                    <mesh geometry={nodes['forMayaAOpolySurface29_forMayaAOblinn7_0'].geometry} material={materials['forMayaAOblinn7']} />
                    <mesh geometry={nodes['forMayaAOpolySurface45_forMayaAOmi_car_paint_phen2_0'].geometry} material={materials['forMayaAOmi_car_paint_phen2']} />
                    <mesh geometry={nodes['forMayaAOpolySurface317_forMayaAOmi_car_paint_phen2_0'].geometry} material={materials['forMayaAOmi_car_paint_phen2']} />
                    <mesh geometry={nodes['forMayaAOpolySurface318_forMayaAOmi_car_paint_phen2_0'].geometry} material={materials['forMayaAOmi_car_paint_phen2']} /> */}
                </group>
            </Canvas>
        </>
    );
};

export default CarModel;
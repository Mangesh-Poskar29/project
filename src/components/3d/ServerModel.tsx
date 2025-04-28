import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple server rack model with improvements
const ServerModel = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Server rack base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#333336" roughness={0.5} metalness={0.7} />
      </mesh>
      
      {/* Server units */}
      {[-1, -0.5, 0, 0.5, 1].map((y, index) => (
        <mesh key={index} position={[0, y, 0.55]}>
          <boxGeometry args={[1.8, 0.4, 0.2]} />
          <meshStandardMaterial color="#222" roughness={0.4} metalness={0.8} />
          
          {/* Server lights */}
          <mesh position={[0.8, 0, 0.06]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#00ff00" : "#ff0000"} emissive={index % 2 === 0 ? "#00ff00" : "#ff0000"} emissiveIntensity={1} />
          </mesh>
          
          <mesh position={[0.65, 0, 0.06]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color={index % 3 === 0 ? "#00ff00" : "#ffff00"} emissive={index % 3 === 0 ? "#00ff00" : "#ffff00"} emissiveIntensity={1} />
          </mesh>
        </mesh>
      ))}
      
      {/* Connection cables */}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((x, index) => (
        <mesh key={index} position={[x, -1.2, 0.55]}>
          <cylinderGeometry args={[0.05, 0.05, 0.2]} />
          <meshStandardMaterial color={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#6366F1'][index]} />
        </mesh>
      ))}
      
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} />
    </group>
  );
};

export default ServerModel;

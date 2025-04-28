import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const KonkanMap = () => {
  // Simplified 3D map of Konkan region
  return (
    <group>
      {/* Land mass */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[8, 4, 32, 32]} />
        <meshStandardMaterial color="#54b947" />
      </mesh>
      
      {/* Water/Ocean */}
      <mesh position={[4, 0, -0.1]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3, 4, 16, 16]} />
        <meshStandardMaterial color="#0072ff" />
      </mesh>
      
      {/* Hills */}
      <mesh position={[-2, 0, 0.5]}>
        <coneGeometry args={[1, 2, 16]} />
        <meshStandardMaterial color="#2e7d32" />
      </mesh>
      
      <mesh position={[-1, 1.5, 0.3]}>
        <coneGeometry args={[0.8, 1.5, 16]} />
        <meshStandardMaterial color="#388e3c" />
      </mesh>
      
      {/* Beaches */}
      <mesh position={[2.5, 0, 0.1]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.5, 4, 16, 16]} />
        <meshStandardMaterial color="#f8d49f" />
      </mesh>
      
      {/* Office location marker */}
      <group position={[0, 0, 0.5]}>
        <mesh position={[0, 0, 0.5]}>
          <boxGeometry args={[0.2, 0.2, 1]} />
          <meshStandardMaterial color="#f44336" />
        </mesh>
        <mesh position={[0, 0, 1.1]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#f44336" />
        </mesh>
      </group>
    </group>
  );
};

const MapSection: React.FC = () => {
  return (
    <div className="h-80 rounded-xl overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <KonkanMap />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default MapSection;
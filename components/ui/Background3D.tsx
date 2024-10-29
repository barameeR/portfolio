"use client";

import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";

interface StarBackgroundProps {
  positions?: Float32Array;
  stride?: number;
  frustumCulled?: boolean;
  transparent?: boolean;
  color?: string;
  size?: number;
  sizeAttenuation?: boolean;
  depthWrite?: boolean;
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<{}> = () => (
  <div className="w-full h-auto fixed inset-0 z-[1] bg-black-100">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
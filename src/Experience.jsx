import { useFrame } from "@react-three/fiber"
import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  Sky,
  SoftShadows,
  Stage,
  useHelper,
} from "@react-three/drei"
import { useRef } from "react"
import { Perf } from "r3f-perf"
import * as THREE from "three"
import { button, useControls } from "leva"

export default function Experience() {
  const cube = useRef()
  const directionalLight = useRef()
  const lightFormer = useRef()
  //
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1) // 1 => size
  const contactShadowTweaks = useControls("Contact shadows", {
    blur: {
      value: 2.8,
      min: 0,
      max: 10,
    },
    opacity: {
      value: 0.4,
      min: 0,
      max: 1,
    },
    color: "#4b2709",
  })

  const skyTweaks = useControls("Sky", {
    sunPosition: {
      value: [1, 2, 3],
    },
  })

  const environmentTweaks = useControls("Environment", {
    intensity: {
      value: 3.5,
      min: 0,
      max: 12,
    },
    height: {
      value: 7,
      min: 0,
      max: 100,
    },
    radius: {
      value: 20,
      min: 10,
      max: 1000,
    },
    scale: {
      value: 100,
      min: 10,
      max: 1000,
    },
  })

  //
  useFrame((state, delta) => {
    // console.log(state.clock.elapsedTime)
    const time = state.clock.elapsedTime
    cube.current.rotation.y += delta * 0.2
    // cube.current.position.x = 2 + Math.sin(time)
    // cube.current.position.z = Math.cos(angle)
  })

  return (
    <>
      {/* 
			the color tag will be attached to the "background"
      attribute of the parent (scene in the canvas)
    	*/}
      {/* <color args={["#282C35"]} attach={"background"} /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <Sky
        sunPosition={skyTweaks.sunPosition} // should use Spherical coordinates
      /> */}

      {/* 
			calculate shadows only once and reuse forever
			works well for static objects
			*/}
      {/* <BakeShadows /> */}

      {/* 
			watch out for perfomance hit
			don't use togethor with baking
			*/}
      {/* <SoftShadows /> */}

      {/* 
			a cool mix of multiple shadows cast by RandomLight
			creates baked shadows by default
			does not work well with animated scenes
			*/}
      {/* <AccumulativeShadows
        scale={10}
        position-y={-0.99}
        color="#316d39"
        opacity={0.8}
        frames={Infinity} // will cause a freeze if you use high values without temporal
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          intensity={1}
          ambient={0.5}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* 
			Does not use Three JS shadow system
			It is a drei helper
			Only comes from the floor, it is not phyisically accurate eg when light comes from the side
			*/}

      {/* <ContactShadows
        position-y={0}
        scale={10}
        resolution={512}
        far={5}
        color={contactShadowTweaks.color}
        opacity={contactShadowTweaks.opacity}
        blur={contactShadowTweaks.blur}
        frames={1} // bake the shadow - only for static scenes
      /> */}

      {/* <directionalLight
        ref={directionalLight}
        position={skyTweaks.sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <mesh position-x={-2} castShadow position-y={1}>
        <sphereGeometry />
        <meshStandardMaterial
          color="salmon"
          envMapIntensity={environmentTweaks.intensity}
        />
      </mesh> */}

      {/* <mesh ref={cube} position-x={2} scale={1.5} castShadow position-y={1}>
        <boxGeometry />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={environmentTweaks.intensity}
        />
      </mesh> */}

      <Stage
        shadows={{
          type: "contact",
          opacity: 0.2,
          blur: 3,
        }}
        environment={"city"}
        intensity={0.7}
      >
        <mesh position-x={-2} castShadow position-y={1}>
          <sphereGeometry />
          <meshStandardMaterial
            color="salmon"
            envMapIntensity={environmentTweaks.intensity}
          />
        </mesh>

        <mesh ref={cube} position-x={2} scale={1.5} castShadow position-y={1}>
          <boxGeometry />
          <meshStandardMaterial
            color="orange"
            envMapIntensity={environmentTweaks.intensity}
          />
        </mesh>
      </Stage>

      {/* <mesh
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        // receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial
          color="yellowgreen"
          envMapIntensity={environmentTweaks.intensity}
        />
      </mesh> */}
    </>
  )
}

import { Environment } from "@react-three/drei"

export default function CustomEnv() {
  return (
    <>
      {/* 
			Enviromnents emit their own light esp if they are bright colours
			*/}
      <Environment
        // files={[
        //   "./environmentMaps/2/px.jpg",
        //   "./environmentMaps/2/nx.jpg",
        //   "./environmentMaps/2/py.jpg",
        //   "./environmentMaps/2/ny.jpg",
        //   "./environmentMaps/2/pz.jpg",
        //   "./environmentMaps/2/nz.jpg",
        // ]}
        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        preset="sunset"
        // background // activates the cube map
        ground={{
          height: environmentTweaks.height,
          radius: environmentTweaks.radius,
          scale: environmentTweaks.scale,
        }}
      >
        {/* <color args={["#000000"]} attach={"background"} /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={"salmon"} />
        </mesh> */}
        {/* <Lightformer
          ref={lightFormer}
          position-z={-5}
          // scale={3}
          scale={[4, 1]}
          color={"lightblue"}
          intensity={5}
          // form={"ring"}
        /> */}
      </Environment>
    </>
  )
}

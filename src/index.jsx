import "./style.css"
//
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
//
import Experience from "./Experience.jsx"

const root = ReactDOM.createRoot(document.querySelector("#root"))

// function onCreated({ gl, scene }) {
//   //   gl.setClearColor("skyblue", 0.7)
//   scene.background = new THREE.Color("skyblue")
// }

root.render(
  <Canvas
    // shadows
    // onCreated={onCreated}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <Experience />
  </Canvas>
)

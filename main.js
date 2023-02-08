import * as THREE from 'three'
import './style.css'

//variables:
const sizes = {
  height : window.innerHeight,
  width : window.innerWidth
}

//scene
const scene = new THREE.Scene();

//object
const geometry = new THREE.SphereGeometry(3,64,64);
const material = new THREE.MeshStandardMaterial({
  color:'#00ff00'
})

const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//light
const light = new THREE.PointLight('#ffffff',1,100)
light.position.set(0,10,10)
scene.add(light);

//camera

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width/ sizes.height,
  1,
  1000
)

camera.position.z = 20;
scene.add(camera)

//renderer

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera,renderer.domElement)

//resize

window.addEventListener('resize',()=>{
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
})
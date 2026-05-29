import * as THREE from 'https://unpkg.com/three@0.179.1/build/three.module.js';
import { OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls,skybox;
let sun,mercury,jupiter,venus,mars,earth,saturn,neptune,uranus;

let mercury_r = 70
let jupiter_r = 130
let venus_r = 80
let mars_r = 90
let earth_r =90
let saturn_r = 150
let uranus_r = 160
let neptune_r = 180

let mercury_rev = 2
let venus_rev = 1.5
let earth_rev = 1
let mars_rev = 0.8
let jupiter_rev = 0.7
let saturn_rev = 0.6
let uranus_rev = 0.5
let neptune_rev= 0.4

function bg(){
    const bgpath = [
        './skybox/space_rt.png',
        './skybox/space_lf.png',
        './skybox/space_up.png',
        './skybox/space_dn.png',
        './skybox/space_ft.png',
        './skybox/space_bk.png'
    ];

    
    const bgarray = bgpath.map((image) => {
        let texture = new THREE.TextureLoader().load(image);
        return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    });
    
    return bgarray;
}

function setSkyBox(){
    const bgarray =bg();
    let skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
    skybox = new THREE.Mesh(skyboxGeo, bgarray);
    scene.add(skybox);

}
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        85,
        window.innerWidth/ window.innerHeight,
        0.1,
        1000
    )
    setSkyBox()

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.id = "c";
    controls = new OrbitControls(camera,renderer.domElement);
    controls.minDistance = 12;
    controls.maxDistance = 1000;
    camera.position.z = 100;
    
}
function animation(time){
    requestAnimationFrame(animation)
    renderer.render(scene,camera)
}

init()
animation(0);


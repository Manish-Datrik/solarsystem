import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls;
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


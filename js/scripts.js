import * as THREE from "./three.module.min.js";
import {OrbitControls} from "/js/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 30 ); 
const material = new THREE.MeshBasicMaterial( { color: 0x003300, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;

}
animate();


// var CANVAS_WIDTH = window.innerWidth;
// // var CANVAS_HEIGHT = 100
// var canvasHeight = window.innerHeight;
// document.documentElement.style.setProperty("--three-canvas-h", canvasHeight);

// var threeCanvas = document.getElementById("mainText");
// var renderer = new THREE.WebGLRenderer({alpha: true});
// renderer.setSize(CANVAS_WIDTH, canvasHeight)
// threeCanvas.appendChild(renderer.domElement);

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / canvasHeight, 0.01, 10000 );

// scene.background = new THREE.Color("#e3dcc1");


// // const controls = new OrbitControls(camera, renderer.domElement)


// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// // camera.lookAt(cube.position);

// // camera.position.z = 2;

// var planeGeometry = new THREE.PlaneBufferGeometry(1000, 1000, 200, 200);
// var planeMaterial = new THREE.MeshBasicMaterial({color: 0xab09f6, wireframe: true});
// planeMaterial.wireframeLinewidth = 5;
// var plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.material.transparent = true;
// plane.material.opacity = 1;

// plane.rotation.x = -0.5 * Math.PI;
// plane.position.set(0, 0, 0);
// scene.add(plane);

// // camera.position.set(0, 100, 10)
// camera.position.set(0, 100, 75)
// camera.lookAt(scene.position);


// // function animate() {
// // 	requestAnimationFrame( animate );

// // 	renderer.render( scene, camera );
// // }
// // // SINE WAVE REPEL GENERATOR EFFECT: https://codepen.io/gbnikolov/pen/QwjGPg?editors=0010

// // animate();
// var animation;
// (function drawFrame(ts){
//   camera.position.y = document.getElementsByClassName("mainText").scrollTop
//     // var center = new THREE.Vector2(0,0);
//     // animation = requestAnimationFrame(drawFrame);
//     // var v = plane.geometry.attributes.position.array
//     // var vLength = v.length;
    
//     // for (var i = 0; i < vLength; i+=3) {
//     //   var dist = new THREE.Vector2(v[i], v[i+1]).sub(center);
//     //   var size = 15.0;
//     //   var magnitude = 10;
//     //   v[i+2] = Math.sin(dist.length()/-size + (ts/500)) * magnitude;
//     // }
//     // // plane.rotation.z +=0.01
//     // // plane.rotation.z = document.getElementsByClassName("mainText").scrollTop
//     // let scrollElement = document.querySelector('html');
//     // if(scrollElement.scrollTop != 0){
//     //   console.log(scrollElement.scrollTop)
//     //   // plane.rotation.x = 1-(scrollElement.scrollTop-0)/(document.documentElement.scrollHeight - window.innerHeight); //normalise b/w 0 to 1 val - min / max - min
//     //   // plane.rotation.z = (scrollElement.scrollTop-0)/(document.documentElement.scrollHeight - window.innerHeight); //normalise b/w 0 to 1 val - min / max - min
//     //   // planeMaterial.color.r = 0.3+(scrollElement.scrollTop-0)/(document.documentElement.scrollHeight - window.innerHeight);
//     //   // planeMaterial.color.b = 2*(scrollElement.scrollTop-0)*0.2/(document.documentElement.scrollHeight - window.innerHeight);
//     //   // planeMaterial.color.g = 0.6-(scplane.rotation.x = 1-(scrollElement.scrollTop-0)/(document.documentElement.scrollHeight - window.innerHeight); //normalise b/w 0 to 1 val - min / max - min
//     //   plane.rotation.z = document.documentElement.scrollTop/100; //normalise b/w 0 to 1 val - min / max - min
//     //   plane.rotation.x = document.documentElement.scrollTop/100; //normalise b/w 0 to 1 val - min / max - min
//     //   // planeMaterial.color.r = 0.4-document.documentElement.scrollTop/100;
//     //   // planeMaterial.color.b = 0.3-document.documentElement.scrollTop/100;
//     //   // planeMaterial.color.g = 0.6-(scrollElement.scrollTop-0)*0.5/(document.documentElement.scrollHeight - window.innerHeight);
//     //   planeMaterial.color.setHSL((scrollElement.scrollTop-0)/(document.documentElement.scrollHeight - window.innerHeight), 1.0, 0.3);

//     // }
    
//     // // console.log(document.getElementsByClassName("mainText").scrollTop);
//     camera.attributes.position.needsUpdate = true;
//     renderer.render(scene, camera);
//   }());

//   function onResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );
//     // requestAnimationFrame(render);
//     console.log("FIRED")
//   }

//   function randomMeshColour() {
//       planeMaterial.color.r = Math.random();
//       planeMaterial.color.g = Math.random();
//       planeMaterial.color.b = Math.random();
//   }

//   var timeoutFunction;

//   window.onresize = function() {
//     clearTimeout(timeoutFunction);

//     timeoutFunction = setTimeout(function(){
//       onResize();
//     }, 100);
//   }

//   function sigmoid(z) {
//     return 1 / (1 + Math.exp(-z/2));
//   }

//   var scrollTimeout;
//   window.onscroll = function() {
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(function() {
//       // randomMeshColour();
//     }, 100);
//   }

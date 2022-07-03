import * as THREE from "/js/three.module.min.js";

var CANVAS_WIDTH = document.body.clientWidth
var CANVAS_HEIGHT = 100
document.documentElement.style.setProperty("--three-canvas-h", CANVAS_HEIGHT);

var threeCanvas = document.getElementById("threeCanvas");
document.body.appendChild(threeCanvas);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT)
threeCanvas.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 0.01, 10000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
// camera.lookAt(cube.position);

// camera.position.z = 2;

var planeGeometry = new THREE.PlaneBufferGeometry(100, 100, 20, 20);
var planeMaterial = new THREE.MeshBasicMaterial({color: 0xab09f6, wireframe: true});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.material.transparent = true;
plane.material.opacity = 0.1;

plane.rotation.x = -0.5 * Math.PI;
plane.position.set(0, 0, 0);
scene.add(plane);

camera.position.set(0, 0, 10)
camera.lookAt(scene.position);

// function animate() {
// 	requestAnimationFrame( animate );

// 	renderer.render( scene, camera );
// }
// // SINE WAVE REPEL GENERATOR EFFECT: https://codepen.io/gbnikolov/pen/QwjGPg?editors=0010

// animate();

(function drawFrame(ts){
    var center = new THREE.Vector2(0,0);
    window.requestAnimationFrame(drawFrame);
    var v = plane.geometry.attributes.position.array
    var vLength = v.length;
    
    for (var i = 0; i < vLength; i+=3) {
      var dist = new THREE.Vector2(v[i], v[i+1]).sub(center);
      var size = 5.0;
      var magnitude = 4;
      v[i+2] = Math.sin(dist.length()/-size + (ts/500)) * magnitude;
    }
    plane.rotation.z +=0.01
    plane.rotation.x +=0.01
    plane.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }());
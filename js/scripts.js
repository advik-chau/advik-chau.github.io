/*!
* Start Bootstrap - Grayscale v7.0.2 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// -------------------------------------------------

import * as THREE from "/js/three.module.min.js";

//Creates scene and camera



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Creates renderer and adds it to the DOM

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var threeCanvas = document.getElementById("threeCanvas");
var threeCanvas = document.getElementById("threeCanvas");
renderer.setSize(threeCanvas.offsetHeight, threeCanvas.offsetWidth);
document.body.appendChild(threeCanvas)
threeCanvas.appendChild(renderer.domElement);

//The Box!

//BoxGeometry (makes a geometry)
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//Material to apply to the cube (green)
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//Applies material to BoxGeometry
var cube = new THREE.Mesh( geometry, material );
//Adds cube to the scene
scene.add( cube );

//Sets camera's distance away from cube (using this explanation only for simplicity's sake - in reality this actually sets the 'depth' of the camera's position)

camera.position.z = 5;

//Rendering

function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  cube.rotation.x +=0.01;
}
render();


// const renderer = new THREE.WebGLRenderer({antialias: true});
// var threeCanvas = document.getElementById("threeCanvas");
// renderer.setSize(threeCanvas.clientHeight, threeCanvas.clientWidth);
// document.body.appendChild(threeCanvas)
// threeCanvas.appendChild(renderer.domElement);


// const renderer = new THREE.WebGLRenderer({antialias: true});
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 1, 1000);

// threeCanvas = document.getElementById("threeCanvas");
// renderer.setSize(window.innerHeight, window.innerWidth);
// document.body.appendChild(threeCanvas)
// threeCanvas.appendChild(renderer.domElement);
// // -
// // const meshBasic = new THREE.LineBasicMaterial({color: 0x0000ff})
// const meshBasic = new THREE.MeshLambertMaterial({color: 0x00000})
// const meshBasic2 = new THREE.MeshNormalMaterial();

// // const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), meshBasic)
// // const cube = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), meshBasic)


// // light.position.set( 50, 50, 50 );
// const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), meshBasic2)
// scene.add(cube)
// camera.position.z = 5;
// camera.position.y = 2;
// //cube.material.color.g = 1;

// // const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), meshBasic)
// // scene.add(cube2)
// // cube2.material.color.g = 1;
// // cube2.material.color.transparent = true;
// // cube2.material.color.opacity = 0.1;
// // cube2.position.y = -1;

// // const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), meshBasic)
// // scene.add(cube3)
// // cube3.material.color.g = 1;
// // cube3.material.color.transparent = true;
// // cube3.material.color.opacity = 0.1;
// // cube3.position.y = -2;

// var light = new THREE.DirectionalLight(0xffffff);
// light.position.z = 5;
// scene.add(light);

// var deltaColour = 0.01;
// var clock = new THREE.Clock();
// clock.start();
// function animate() {
//     requestAnimationFrame(animate);
//     // renderer.render(scene, camera);

//     // if (cube.material.color.r >= 1) {
//     //     deltaColour = -0.01;
//     // } else if (cube.material.color.r <= 0) {
//     //     deltaColour = 0.01;
//     // } 

//     // cube.material.color.r += deltaColour;
//     // cube.material.color.b += deltaColour*2;
//     // cube.material.color.g += -deltaColour;
//     cube.position.x = 1*Math.sin(new Date().getTime()*0.002);
//     // cube2.position.x = 1*Math.sin(new Date().getTime()*0.002 - 0.05);
//     // cube3.position.x = 1*Math.sin(new Date().getTime()*0.002 - 0.15);


//     // cube.rotation.y += 0.01
//     // cube.rotation.z += 0.01
// }
// animate();
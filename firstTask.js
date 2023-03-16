import * as THREE from './node_modules/three/build/three.module';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from './node_modules/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from './node_modules/three/examples/jsm/geometries/TextGeometry.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load(
    'cms.gltf',
    function (gltf) {

        scene.add(gltf.scene);

        const textGeometry = new TextGeometry('Hello World Hello World Hello World', {
            font: new FontLoader().load('node_modules/three/examples/fonts/helvetiker_regular.typeface.json'),
            size: 1,
            height: 0.2
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(0, 2, -2); // TODO: Adjust position 
        scene.add(textMesh);

    },
    undefined,
    function (error) {

        console.error(error);

    }
);

camera.position.z = 5;

function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}

animate();

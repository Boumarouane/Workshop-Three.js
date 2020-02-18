
// Variables
let scene, camera, renderer, material, geometry, mesh;

// ! initialisation
const init = () => {

    let canvas = document.querySelector('#c');

    // Configuration renderer
    renderer = new THREE.WebGLRenderer({canvas, antialias : true});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas = renderer.domElement;

    // Configuration Scene
    scene = new THREE.Scene();
    
    // Configuration camera
    let fov = 60;
    let aspect = 2;
    let near = 0.1;
    let far = 2000;
    camera = new THREE.PerspectiveCamera(fov,aspect, near, far);
    camera.position.set(0, 1, 20);  // (x, y, z)
    camera.lookAt(0, 0, 0);

    // Configuration material
    material = new THREE.MeshPhongMaterial({color:0x098765});
    
    //Configuration geometry 
    geometry = new THREE.BoxGeometry(6, 6, 6);

    // Configuration mesh et ajout dans la scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //  Configuration de la lumière
    let lightTop = new THREE.DirectionalLight(0xFFFFFF, 1);
    lightTop.position.set(0, 10, 0);
    scene.add(lightTop);

    let lightBottom = new THREE.DirectionalLight(0xFFFFFF, 1);
    lightBottom.position.set(0, -10, 0);
    scene.add(lightBottom);

    // Configuration du controleur
    let control = new THREE.OrbitControls(camera, renderer.domElement);
}


// ! Animation
const animate = () => {
    
    mesh.rotation.x += 0.2;
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
animate();
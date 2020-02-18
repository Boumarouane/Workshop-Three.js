# Workshop-Three.js

Bienvenue dans notre workshop sur Three.js on essayera de vous apprendre a :

+ Créer une geometrie dans le navigateur et pouvoir l'animer.

+ Implémenter des modeles 3D à partir de sketchfab

+ Implémenter un effet hover dans un site.

+ Utliser l'AR.

Ici nous allons détailler les étapes de chaque atelier pour que vous puissier suivre et pouvoir checker si le code corespond.


Présentation générale
========================

Three.js
--------

Three.js est une bibliothèque javascript qui permet la gestion de la 3D dans un navigateur web, elle permet de créer des rendus en WebGL, CSS2D , CSS3D, et SVG.  
Bien Sûr, utiliser WebGL sera plus efficace puisqu’il utilise l’accélération matérielle de la carte graphique.

Il a été publié pour la première fois par Ricardo Cabello sous le surnom de Mr.doob sur github en 2010, et maintenant nous en sommes à la version 113.

WebGL
--------

Webgl est baser OpenGl et javascript

C'est un langage de très bas niveau, il est très puissant mais mega compliquer à apprendre

Webgl ne fonctionne que grace à deux choses:
l'espace de projection (l'endroit ou la camera regarde)
les couleurs
Et c avec ses 2données là qu'on fait tout en webGL

Et pour ses 2 on utilise les shaders.
C quoi les shaders? bah c un truc bcp trop complexe donc j'aurai du mal à vous expliquer précisement ce que c'est mais en gros
sa pixelise tout ce que voit la caméra et sa qui nous permet de faire de la 3D.
D'ailleurs c tellement complexe qu'il utilise un logiciel pour la simplicté

Donc en gros
WebGL n'est qu'une API de Rastéraisation dans des termes plus simple(pixelisation)
Du coup pour pouvoir faire de la 3d il faut des connaissance énorme en mathématique 3D

Je vais vous donner un aperçu de ce qu'il faut connaitre en webgl pour pouvoir faire de la 3d

Vous devez connaître les mathématiques matricielles, les coordonnées normalisées, les troncs, les produits croisés, les produits scalaires, l'interpolation variable, les calculs spéculaires d'éclairage et toutes sortes d'autres choses qui prennent souvent des mois ou des années à comprendre pleinement.

C'est pour sa qu'on utilise des bibliothèque 3D, car pour faire de la 3d dans le web bah tout les calculs complexe devrait etre effectuer pour nous, dans la mesure ou l'on devrait ne "devoir" passer que des paramètres pour gerer la matière, lumière, etc.. et que la bibliothèque s'occupe de dessiner le reste pour nous. P/ainsi pouvoir réellement se focaliser sur la 3d dans le web si non ça prendrait trop de temps

Biensur WebGL possède des fonctionnalitésqui vous aident à implémenter la 3D. Mais WebGl n'est qu'une bibliothèque de mathématique, Vous devez lui fournir des coordonnées qui représentent ce que vous voulez dessiner.


Installation
--------

Vous pouvez cloner le code source et chercher les fichier dont vous avez besoins [github](https://github.com/mrdoob/three.js/),
à la base vous aurez besoin du fichier "three.min.js" et le charger dans votre HTML via un script pour pouvoir commencer votre projet.

Création d'un cube
========================

```
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="cube.css">
    <title>Three.js</title>
</head>
<body>

    <canvas id="c"></canvas>

    <script src="three.min.js"></script>
    <script src="OrbitControls.js"></script>
    <script src="cube.js"></script>
</body>
</html>
```
```
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
}
```
```
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
}
```
```
    // Configuration material
    material = new THREE.MeshNormalMaterial();
    
    //Configuration geometry 
    geometry = new THREE.BoxGeometry(6, 6, 6);

    // Configuration mesh et ajout dans la scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer.render(scene, camera);
}
```
```
// ! Animation
const animate = () => {
    
    mesh.rotation.x += 0.2;
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
init();
animate();
```
```
// Configuration material
    material = new THREE.MeshPhongMaterial({color:0x098765});
```
```
    //  Configuration de la lumière
    let lightTop = new THREE.DirectionalLight(0xFFFFFF, 1);
    lightTop.position.set(0, 10, 0);
    scene.add(lightTop);

    let lightBottom = new THREE.DirectionalLight(0xFFFFFF, 1);
    lightBottom.position.set(0, -10, 0);
    scene.add(lightBottom);
}
```
```
    // Configuration du controleur
    let control = new THREE.OrbitControls(camera, renderer.domElement);
}
```







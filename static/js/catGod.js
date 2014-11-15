var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.PointLight(0xffffff);
light.position.set(-100,200,100);
scene.add(light);

renderer.setClearColorHex(0xdddddd, 1); //sets background color and opacity

controls = new THREE.OrbitControls(camera, renderer.domElement); //drag controls using orbitcontrol


var loader = new THREE.JSONLoader();

loader.load( 'cat/cat.json', function(geometry){
	var material = new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, ambient: 0x000000, shininess: 10, shading: THREE.SmoothShading, transparent: true } );
	var cat = new THREE.Mesh(geometry, material);
	console.log(cat.scale);
	cat.scale.x = cat.scale.y = cat.scale.z = 1;
	scene.add(cat);
});

camera.position.z = 5;

//render is kinda like the draw loop
function render() {
	requestAnimationFrame( render );

	// cube.rotation.x += 0.001;
	// cube.rotation.y += 0.005;

	renderer.render(scene, camera);
};

render();
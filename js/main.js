window.onload = function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add('bg')
  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  })

  var geometry = new THREE.BoxGeometry(-1, -1, -1);
  colors = [0x36a2eb, 0x4bc0c0, 0xff9f40, 0x9966ff, 0xff6384, 0xffcd56, 0xc9cbcf ]
  geometry.faces.forEach((face, i) => {
    face.color.setHex(colors[Math.floor(i/2)%6]);
  })
  var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors});
  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.0025;
    cube.rotation.y += 0.00125;
    renderer.render(scene, camera);
  };

  render();

  document.querySelector('.down').addEventListener('click', function() {
    document.querySelector('.projects').classList.add('show')
  })
  document.querySelector('.up').addEventListener('click', function() {
    document.querySelector('.projects').classList.remove('show')
  })
}

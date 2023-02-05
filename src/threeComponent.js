import THREE from "three.js";

export default function ThreeFragment() {
  if (!document.getElementById("canvas")) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 300, 0.1, 1000);

    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(500, 300);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }

  return (
    <div>
      <h2> Three.js </h2>
      <canvas id="canvas"></canvas>
      <script src="./assets/build/three.js"></script>
    </div>
  );
}

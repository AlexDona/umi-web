import React from 'react';

import * as THREE from '@/build/three.module.js';
import './less/Bg.less';
// import Stats from './jsm/libs/stats.module.js';

class Bg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: null,
    };
  }

  componentDidMount() {
    this.renderBackground();
  }

  componentWillUnmount() {
    try {
      // console.log(this.state.renderer.context);
      this.state.renderer.getContext().getExtension('WEBGL_lose_context').loseContext();
    } catch (e) {
      console.error(e);
    }
    // setTimeout(() => {
    //
    //
    // }, 100);
    // gl.getExtension('WEBGL_lose_context').loseContext();
  }

  renderBackground() {
    const SEPARATION = 80; const AMOUNTX = 170; const
      AMOUNTY = 165;

    let container;
    // let stats = Stats;
    let camera; let scene;

    let particles;
    let count = 0;

    let mouseX = 0;
    // let mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    // let windowHalfY = window.innerHeight / 2;

    const that = this;

    function renderCancas() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y = -430; // += ( - mouseY - camera.position.y ) * .05
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      let i = 0;
      let j = 0;

      for (let ix = 0; ix < AMOUNTX; ix += 1) {
        for (let iy = 0; iy < AMOUNTY; iy += 1) {
          positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50)
            + (Math.sin((iy + count) * 0.5) * 50);

          scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20
            + (Math.sin((iy + count) * 0.5) + 1) * 8;

          i += 3;
          j += 1;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      that.state.renderer.render(scene, camera);

      count += 0.1;
    }

    function animate() {
      requestAnimationFrame(animate);

      renderCancas();
      // stats.update();
    }

    function init() {
      // container = document.createElement( 'div' );
      // document.body.appendChild( container );
      container = document.querySelector('.canvas');
      container.addEventListener('webglcontextlost', () => {
        init();
      }, false);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      scene = new THREE.Scene();

      //

      const numParticles = AMOUNTX * AMOUNTY;

      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0; let
        j = 0;

      for (let ix = 0; ix < AMOUNTX; ix += 1) {
        for (let iy = 0; iy < AMOUNTY; iy += 1) {
          positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

          scales[j] = 1;

          i += 3;
          j += 1;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({

        uniforms: {
          color: { value: new THREE.Color('#4185b8') },
        },
        vertexShader: document.getElementById('vertexshader').textContent,
        fragmentShader: document.getElementById('fragmentshader').textContent,

      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      function onPointerMove(event) {
        if (event.isPrimary === false) return;

        mouseX = event.clientX - windowHalfX;
        // mouseY = event.clientY - windowHalfY;
      }

      function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        // windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        that.state.renderer.setSize(window.innerWidth, window.innerHeight);
      }

      that.state.renderer = new THREE.WebGLRenderer({ antialias: true });
      particles.position.set(0, -600, -600);
      that.state.renderer.setPixelRatio(window.devicePixelRatio);
      that.state.renderer.setClearColor('#02164f', 0.5);
      that.state.renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(that.state.renderer.domElement);

      // stats = new Stats();
      // container.appendChild( stats.dom );

      container.style.touchAction = 'none';
      that.props.context().banner.dom.addEventListener('pointermove', onPointerMove, false);
      container.addEventListener('pointermove', onPointerMove, false);

      //

      window.addEventListener('resize', onWindowResize, false);
    }

    init();
    animate();
  }

  render() {
    // const { dataSource, isMobile, ...props } = this.props;

    return (
      <div className="canvas">
        <div className="img" style={{ backgroundImage: `url(${require('../../../img/earth.gif')})` }} alt="" />
      </div>
    );
  }
}

export default Bg;

import React, {Component} from "react";
import * as THREE from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import styled from "styled-components";

const Rocket = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

class ThreeLogo extends Component {
    state = {
        tick: 1,
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        //ADD SCENE
        this.scene = new THREE.Scene()

        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 4

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        // Adding Light
        const light = new THREE.PointLight(0xff0000, 1, 100);
        light.position.set(5, 5, 5);
        this.scene.add(light);
        this.light = light;

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.z = 3;
        directionalLight.position.y = 3;
        directionalLight.position.x = 3;
        this.scene.add(directionalLight);

        // Adding Star as a Background
        const starsGeometry = new THREE.Geometry();

        for (let i = 0; i < 10000; i++) {
	        const star = new THREE.Vector3();
	        star.x = THREE.Math.randFloatSpread(1500);
	        star.y = THREE.Math.randFloatSpread(1500);
            star.z = THREE.Math.randFloatSpread(1500);

	        starsGeometry.vertices.push(star);
        }

        const starsMaterial = new THREE.PointsMaterial({color: 0xffff00});
        const starField = new THREE.Points(starsGeometry, starsMaterial);

        this.starField = starField;

        this.scene.add(starField);

        // Loading Rocket
        const loader = new OBJLoader();
        const mtlLoader = new MTLLoader();

        mtlLoader.load("/static/rocket.mtl", rocketMaterials => {
            rocketMaterials.preload();
            loader.setMaterials(rocketMaterials)

            loader.load("/static/rocket.obj", rocket => {
                this.scene.add(rocket);
                rocket.scale.x = 0.15;
                rocket.scale.y = 0.15;
                rocket.scale.z = 0.15;

                this.rocket = rocket;
            })
        });

        //ADD CUBE
        this.start()
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    animate = () => {
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)

        // Rocket Rotation
        this.rocket.rotation.x = Math.cos(this.state.tick) * 0.05;
        this.rocket.rotation.y = - this.state.tick / 10;
        this.rocket.rotation.z = Math.sin(this.state.tick) * 0.05;

        // Light
        this.light.intensity = Math.cos(this.state.tick) + 0.3;

        // Star Animation
        this.starField.rotation.y = this.state.tick / 50;
        this.starField.rotation.z = -this.state.tick / 100;

        this.setState({tick: this.state.tick + 0.05});
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <Rocket>
                <div
                    style={{width: `${window.innerWidth}px`, height: `${window.innerHeight}px`}}
                    ref={(mount) => {this.mount = mount}} />
            </Rocket>
        )
    }
  }

  export default ThreeLogo;
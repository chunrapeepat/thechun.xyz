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
        light.position.set(10, 10, 10);
        this.scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.z = 4;
        directionalLight.position.y = -2;
        directionalLight.position.x = 3;
        this.scene.add(directionalLight);

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
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <Rocket>
                <div
                    style={{width: '1000px', height: '800px'}}
                    ref={(mount) => {this.mount = mount}} />
            </Rocket>
        )
    }
  }

  export default ThreeLogo;
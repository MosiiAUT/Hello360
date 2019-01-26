// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import * as THREE from 'three';

import {ReactInstance, Location, Module, Surface} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";


function init(bundle, parent, options = {}) {

    class MyModule extends Module {
        constructor() {
            super('MyModule');
        }

        //Bewegt die komplette Location wo alles gemountet ist, kann somit in index.js aufgerufen werden
        setWorld(x, y, z) {
            myLocation.setWorldPosition(x, y, z);
        }

        deleteTitlescreen() {
            console.log('in delete');
            r360.detatchRoot("titlescreen");
        }

        ////////TELEPORT UI/////////
        moveTeleport(yaw, pitch) {
            teleportSurface.setAngle(
                yaw,
                pitch,
            );
        }

        closeTeleport() {
            teleportSurface.resize(0, 0);
        }

        openTeleport() {
            teleportSurface.resize(200, 200);
        }


        ////////WATCH UI/////////
        moveWatchButton(yaw, pitch) {
            watchButtonSurface.setAngle(
                yaw,
                pitch,
            );
        }

        closeWatchButton() {
            watchButtonSurface.resize(0, 0);
        }

        openWatchButton() {
            watchButtonSurface.resize(300, 300);
        }


        ////DESCRIPTION UI///////
        moveDescription(yaw, pitch) {
            descriptionSurface.setAngle(
                yaw,
                pitch,
            );
        }

        closeDescription() {
            descriptionSurface.resize(0, 0);
        }

        openDescription() {
            descriptionSurface.resize(900, 600);
        }
    }

    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        cursorVisibility: "visible",
        ...options,
        // Register custom modules at init time
        nativeModules: [
            new MyModule(),
        ]

    });

    // r360.renderToSurface(
    //     r360.createRoot('titlescreen'),
    //     r360.getDefaultSurface()
    // );


    // SimpleRaycaster.

    ////////DESCRIPTION UI/////////
    const descriptionSurface = new Surface(
        0,
        0,
        Surface.SurfaceShape.Flat,
    );

    r360.renderToSurface(
        r360.createRoot('DescriptionUI'),
        descriptionSurface,
    );

    descriptionSurface.setAngle(
        -Math.PI / 2.5,
        0,
    );



    ////////TELEPORT UI/////////
    const teleportSurface = new Surface(
        200,
        200,
        Surface.SurfaceShape.Flat,
    );

    r360.renderToSurface(
        r360.createRoot('TeleportUI'),
        teleportSurface,
    );

    teleportSurface.setAngle(
        -Math.PI / 6,
        0,
    );


    ////////WATCH UI/////////
    const watchButtonSurface = new Surface(
        0,
        0,
        Surface.SurfaceShape.Flat,
    );

    r360.renderToSurface(
        r360.createRoot('WatchButton'),
        watchButtonSurface,
    );

    watchButtonSurface.setAngle(
        -Math.PI / 4.8,
        -Math.PI / 6.5,
    );


    ////////LOCATION UI/////////
    const myLocation = new Location([0, 0, 0]);

    r360.renderToLocation(
        r360.createRoot('Models'),
        myLocation,
    );


    let scene = r360.compositor._scene;

    let light = new THREE.AmbientLight(0x2aabea);
    light.intensity = 0.5;

    scene.add(light);

    let fogColor = new THREE.Color(0x42f4e2);
    r360.compositor.setBackground(r360.getAssetURL('skynew.png'));
    r360.compositor._scene.fog = new THREE.FogExp2(fogColor, 0.0015);
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);



    /*
    let dotSystem = new THREE.Group();

    function drawDotSystem() {
        scene.add(dotSystem);

        const system1 = new DotSystem({
            intensity: 6000,
            color: 0x42f4e2,
            xSpread: 1000,
            ySpread: 1000,
            zSpread: 1000,
        });
        dotSystem.add(system1.group);

        // const system2 = new DotSystem({
        //     intensity: 2000,
        //     color: 0xE1FEA4,
        //     xSpread: 500,
        //     ySpread: 500,
        //     zSpread: 500,
        //     size: 3,
        // });
        // system2.group.position.set(-100, -80, 0);
        // dotSystem.add(system2.group);
    }

    class DotSystem {
        constructor({
                        intensity = 5000,
                        color = 0xffffff,
                        xSpread = 1000,
                        ySpread = 1000,
                        zSpread = 1000,
                        size = 6,
                    }) {
            this.group = new THREE.Group();

            this.intensity = intensity;
            this.color = color;
            this.xSpread = xSpread;
            this.ySpread = ySpread;
            this.zSpread = zSpread;
            this.size = size;

            this.draw();
        }

        draw() {
            const geometry = new THREE.Geometry();
            const colors = [];

            const loader = new THREE.TextureLoader();
            loader.crossOrigin = false;
            loader.load('https://res.cloudinary.com/dta92sz5c/image/upload/v1494500813/dot_g4pvyu.svg', (texture) => {
                for (let i = 0; i < this.intensity; i += 1) {
                    const star = new THREE.Vector3();
                    star.x = THREE.Math.randFloatSpread(this.xSpread);
                    star.y = THREE.Math.randFloatSpread(this.ySpread);
                    star.z = THREE.Math.randFloatSpread(this.zSpread);

                    geometry.vertices.push(star);

                    colors[i] = new THREE.Color(this.color);
                }
                geometry.colors = colors;

                const material = new THREE.PointsMaterial({
                    size: this.size,
                    map: texture,
                    vertexColors: THREE.VertexColors,
                    alphaTest: 0.5,
                    transparent: true,
                });

                const particles = new THREE.Points(geometry, material);
                this.group.add(particles);
            });
        }
    }


    drawDotSystem();
    */


    /*
    animate();

    function animate() {
        requestAnimationFrame(animate);

        render();
    }

    function render() {

        dotSystem.rotation.x += 0.0007;
        dotSystem.rotation.y -= 0.0005;

        r360.compositor._renderer.render(scene, camera);
    }
    */
}
window.React360 = {init};

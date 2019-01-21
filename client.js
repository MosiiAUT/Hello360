// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

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


// Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};

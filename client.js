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

        deleteTitlescreen() {
            console.log('in delete');
            r360.detatchRoot("titlescreen");
        }

        moveWatchButton(yaw, pitch, roll) {

            watchButtonSurface.setAngle(
                yaw,
                pitch,
                roll
            );
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

    r360.renderToSurface(
        r360.createRoot('titlescreen'),
        r360.getDefaultSurface()
    );

    const watchButtonSurface = new Surface(
        200,
        200,
        Surface.SurfaceShape.Flat,
    );

    r360.renderToSurface(
        r360.createRoot('WatchButton'),
        watchButtonSurface,
    );

    watchButtonSurface.setAngle(
        -Math.PI / 2,
        0,
    );

    const myLocation = new Location([0, 0, 0]);

    // r360.renderToLocation(
    //     r360.createRoot('Models'),
    //     myLocation,
    // );

// // Render your app content to the default cylinder surface
//     r360.renderToSurface(
//         r360.createRoot('UI'),
//         r360.getDefaultSurface()
//     );



// Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};

// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Module} from 'react-360-web';
import SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options = {}) {
    const myLocation = new Location([0, 0, 0]);

    class MyModule extends Module {
        constructor() {
            super('MyModule');
        }

        setWorld(x, y, z) {
            myLocation.setWorldPosition(x, y, z);
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

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('Hello360'),
        r360.getDefaultSurface()
    );

    r360.renderToLocation(
        r360.createRoot('ChairOne'),
        myLocation,
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};

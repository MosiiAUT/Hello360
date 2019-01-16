import React from 'react';
import {AppRegistry,} from 'react-360';
import Models from './Models';
import UIPanel from './UI';
import WatchUI from './WatchUI'

AppRegistry.registerComponent('Models', () => Models);
AppRegistry.registerComponent('UI', () => UIPanel);
AppRegistry.registerComponent('WatchButton', () => WatchUI);
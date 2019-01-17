import React from 'react';
import {AppRegistry,} from 'react-360';
import Models from './Models';
//import UIPanel from './UI';
import Titlescreen from './titlescreen';
import WatchUI from './WatchUI';
import DescriptionUI from './DescriptionUI';

AppRegistry.registerComponent('Models', () => Models);
// AppRegistry.registerComponent('UI', () => UIPanel);
AppRegistry.registerComponent('WatchButton', () => WatchUI);
AppRegistry.registerComponent('DescriptionUI', () => DescriptionUI);
AppRegistry.registerComponent('titlescreen', () => Titlescreen);

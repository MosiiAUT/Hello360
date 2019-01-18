import React from 'react';
import {AppRegistry,} from 'react-360';
import Models from './Models';
import Titlescreen from './titlescreen';
import WatchUI from './WatchUI';
import DescriptionUI from './DescriptionUI';
import TeleportUI from './TeleportUI';

AppRegistry.registerComponent('Models', () => Models);
AppRegistry.registerComponent('WatchButton', () => WatchUI);
AppRegistry.registerComponent('DescriptionUI', () => DescriptionUI);
AppRegistry.registerComponent('TeleportUI', () => TeleportUI);
AppRegistry.registerComponent('titlescreen', () => Titlescreen);

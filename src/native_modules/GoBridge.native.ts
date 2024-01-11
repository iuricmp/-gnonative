import { NativeModules } from 'react-native';

import type { GoBridgeInterface } from './GoBridgeInterface';

export const GoBridge: GoBridgeInterface = NativeModules.GoBridge;

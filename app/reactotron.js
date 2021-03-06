// @flow
import { NativeModules } from 'react-native';
import Tron, { trackGlobalErrors, openInEditor } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const noop = () => undefined;
declare var console: { tron: typeof Tron };

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

if (__DEV__) {
  console.tron = Tron; // attach reactotron to `console.tron`

  Tron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host })
    .useReactNative({
      storybook: true,
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .connect();
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: noop,
    overlay: noop,
    reportError: noop,
    send: noop,
    startTimer: noop,
    storybookSwitcher: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  };
}

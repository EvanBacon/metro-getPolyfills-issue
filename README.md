# Metro `serializer.getPolyfills` issue

- `yarn && yarn start -i`

Simulator should throw:

```log
Unhandled JS Exception: Can't find variable: require

@http://192.168.2.13:19000/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false:1353:10
global code@http://192.168.2.13:19000/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false:1354:3

global code
    AppEntry.bundle?platform=ios&dev=true&hot=false:1354:3
```

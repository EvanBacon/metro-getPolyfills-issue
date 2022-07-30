# Metro `serializer.getPolyfills` issue

I need a system for injecting some modules in a bundle so people who bundle their app with Webpack never encounter the particular modules. I'd assume `serializer.getPolyfills` would work but it doesn't because the modules injected aren't treated the same as all other Metro modules.

- `yarn && yarn start -i`

Simulator should throw:

```log
Unhandled JS Exception: Can't find variable: require

@http://192.168.2.13:19000/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false:1353:10
global code@http://192.168.2.13:19000/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false:1354:3

global code
    AppEntry.bundle?platform=ios&dev=true&hot=false:1354:3
```

The other mechanism `getModulesRunBeforeMainModule` doesn't work as a pure polyfill injector because it requires the module be included somewhere in the application code.

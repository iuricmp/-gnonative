# @gnonative/react-native

Gno Blockchain integration for React Native apps.

## Installation

```sh
npm install @gnonative/react-native
```

## Usage

```js
import { useGno } from '@gnonative/react-native';

gno.render("gno.land/r/demo/boards", "gnonative/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

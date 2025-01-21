# Joystick Component



## Installation

```sh
npm install styled-components
```
## Live Demo
https://codesandbox.io/p/sandbox/mutable-hooks-4xnp7v

## Props

| Prop                | Type     | Default  | Description |
|---------------------|---------|----------|-------------|
| `onJoystickMove`   | Function | `null`   | Callback for joystick movement |
| `setJoystickPosition` | Function | `null` | Updates joystick position |
| `toFixed`          | Number   | `3`      | Precision of position values |
| `scale`            | Number   | `1`      | Scale factor for the joystick |
| `flipY`            | Boolean  | `false`  | Inverts Y-axis values |
| `containerColor`   | String   | `blue`   | Background color of the joystick container |
| `KnobColor`        | String   | `red`    | Color of the joystick knob |
| `containerOpacity` | Number   | `100`    | Opacity of the container |
| `KnobOpacity`      | Number   | `100`    | Opacity of the knob |

## License

MIT


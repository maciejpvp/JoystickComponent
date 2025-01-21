import { useState } from "react";
import { Joystick } from "./Joystick";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligh-items: center;
  text-align: center;
`;

export default function App() {
  const [joystickPosition, setJoystickPosition] = useState({ x: 0, y: 0 });

  const handleJoystickMove = (event) => {
    console.log(event);
  };

  return (
    <StyledApp>
      <h1>Joystick</h1>
      <p>X: {joystickPosition.x}</p>
      <p>Y: {joystickPosition.y}</p>
      <Joystick
        onJoystickMove={handleJoystickMove}
        setJoystickPosition={setJoystickPosition}
        flipY
        containerColor="rgb(0, 0, 0)"
        KnobColor="rgb(255, 255, 255)"
        containerOpacity={80}
        KnobOpacity={100}
        scale={1}
      />
    </StyledApp>
  );
}

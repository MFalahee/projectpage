import * as React from "react";
import imgURL from "/smolsleepypenguin.png";

import { useSpring, animated } from "@react-spring/web";

const IdlePage: React.FC = () => {
  // container dimensions
  // x: 1200
  // y: 800
  //   img dimensions
  // x: 400
  // y: 195

  //   smol
  //   x: 100
  // y: 49

  const [forwardX, setForwardX] = React.useState(true);
  const [forwardY, setForwardY] = React.useState(true);
  const [stateX, setStateX] = React.useState(0);
  const [stateY, setStateY] = React.useState(0);
  let speedX = 10;
  let speedY = 6;
  const springs = useSpring({
    config: {
      mass: 10,
      friction: 120,
      tension: 100,
    },
    from: {
      x: stateX,
      y: stateY,
    },
    to: {
      x: forwardX ? stateX + speedX : stateX - speedX,
      y: forwardY ? stateY + speedY : stateY - speedY,
    },
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (forwardX) {
        if (stateX >= 220 - 100) {
          setForwardX(false);
        }
      } else {
        if (stateX <= 0) {
          setForwardX(true);
        }
      }
      if (forwardY) {
        if (stateY >= 160 - 49) {
          setForwardY(false);
        }
      } else {
        if (stateY <= 0) {
          setForwardY(true);
        }
      }
      setStateX(springs.x.get());
      setStateY(springs.y.get());
    }, 100);
    return () => clearInterval(interval);
  }, [springs]);
  return (
    <div className="idle-page">
      <animated.div
        className="spring-div"
        style={{
          width: 20,
          height: 20,
          ...springs,
        }}
      >
        <img
          className="peng-img"
          src={imgURL}
          alt="sleepy penguin icon bouncing"
        />
      </animated.div>
    </div>
  );
};

export default IdlePage;

import * as React from "react";
import imgURL from "/smolsleepypenguin.png";

import { useSpring, animated } from "@react-spring/web";

const IdlePage: React.FC = () => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [windowX, setWindowX] = React.useState(window.innerWidth);
  const [windowY, setWindowY] = React.useState(window.innerHeight);
  const [forwardX, setForwardX] = React.useState(true);
  const [forwardY, setForwardY] = React.useState(true);
  const [stateX, setStateX] = React.useState(0);
  const [stateY, setStateY] = React.useState(0);

  let speedX = 20;
  let speedY = 12;
  let imgWidth = 0;
  let imgHeight = 0;
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
    if (imgRef.current) {
      imgWidth = imgRef.current.clientWidth;
      imgHeight = imgRef.current.clientHeight;
    }
    const interval = setInterval(() => {
      if (forwardX) {
        if (stateX >= windowX * 0.95 - imgWidth) {
          setForwardX(false);
        }
      } else {
        if (stateX <= 0) {
          setForwardX(true);
        }
      }
      if (forwardY) {
        if (stateY >= windowY * 0.95 - imgHeight) {
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

  React.useEffect(() => {
    setWindowX(window.innerWidth);
    setWindowY(window.innerHeight);
  }, [window.innerHeight, window.innerWidth]);
  return (
    <div className="idle-page">
      <animated.div
        className="spring-div"
        style={{
          ...springs,
        }}
      >
        <img
          ref={imgRef}
          className="peng-img"
          src={imgURL}
          alt="sleepy penguin icon bouncing"
        />
      </animated.div>
    </div>
  );
};

export default IdlePage;

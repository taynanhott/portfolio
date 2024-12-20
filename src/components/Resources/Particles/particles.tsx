'use client'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props: any) => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  interface IMoveDirection {
    direction: "none" | "top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft" | "outside" | "inside";
  }
  interface IOutModes {
    default: "bounce" | "split" | "destroy" | "out";
  }
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "",
        },
        links: {
          color: "#6b7280",
          distance: 250,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as IMoveDirection["direction"],
          enable: true,
          outModes: {
            default: "bounce" as IOutModes['default'],
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;
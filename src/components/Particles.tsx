// import { useCallback } from "react";
// import Particles from "react-particles";
// //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// import {useContext} from 'react'
// import '../App.css'
// import {ThemeContext} from '../utile/SkinContext'

// const Particle = () => {
//     const { theme } = useContext(ThemeContext);
//     const particlesInit = useCallback(async (engine : any) => {
//         console.log(engine);
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         //await loadFull(engine);
//         await loadSlim(engine);
//     }, []);

//     const particlesLoaded = useCallback(async (container :any) => {
//         await console.log(container);
//     }, []);



//     return (
//         <Particles
//             className="z-[2] opacity-40"
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 100,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: theme,
//                     },
//                     links: {
//                         color: theme,

//                         distance: 100,
//                         enable: true,
//                         opacity: 1,
//                         width: 2,
//                     },
//                     move: {
//                         direction: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 0.5,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 50,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 5 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     );
// };


// export default Particle
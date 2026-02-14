import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    // Motion values კოორდინატებისთვის
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring პარამეტრები - stiffness 600 და damping 40 ქმნის "აბრეშუმისებრ" მოძრაობას
    const springConfig = { stiffness: 600, damping: 40, mass: 0.2 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-zinc-900 dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* გარეთა ნაზი შრე (Glow/Halo) */}
            <motion.div
                className="absolute inset-0 w-full h-full bg-zinc-900 dark:bg-white rounded-full blur-[2px] opacity-40"
                animate={{
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;

import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    // კოორდინატები
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // მოძრაობის სინაზე
    const springConfig = { stiffness: 800, damping: 50, mass: 0.1 };
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
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* მთავარი თეთრი წერტილი (Core) */}
            <div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white rounded-full mix-blend-difference" />

            {/* ნაზი Glow ეფექტი წერტილის გარშემო */}
            <motion.div
                className="absolute w-6 h-6 bg-zinc-900 dark:bg-white rounded-full blur-[4px] opacity-20"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;

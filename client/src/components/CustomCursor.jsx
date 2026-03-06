import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { stiffness: 800, damping: 50, mass: 0.1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest("a, button, [role='button'], input, textarea, select, label");
            setIsHovering(!!target);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
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
            {/* Core dot — sage on light, warm cream on dark */}
            <motion.div
                className="rounded-full bg-[#4A7566] dark:bg-[#D1E0DA]"
                animate={{
                    width:  isHovering ? 8  : 5,
                    height: isHovering ? 8  : 5,
                    opacity: isHovering ? 0.7 : 1,
                }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Soft halo ring — appears on hover */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="absolute rounded-full border border-[#7C9E8F]/50 dark:border-[#D1E0DA]/30"
                        initial={{ width: 12, height: 12, opacity: 0 }}
                        animate={{ width: 28, height: 28, opacity: 1 }}
                        exit={{ width: 12, height: 12, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                )}
            </AnimatePresence>

            {/* Ambient glow — always present, very subtle */}
            <motion.div
                className="absolute rounded-full bg-[#7C9E8F] dark:bg-[#7C9E8F] blur-[6px]"
                animate={{
                    width:   isHovering ? 20 : 14,
                    height:  isHovering ? 20 : 14,
                    opacity: isHovering ? 0.18 : 0.10,
                }}
                transition={{
                    width:   { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    height:  { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3 },
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;

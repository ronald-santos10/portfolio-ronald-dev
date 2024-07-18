import { motion } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const Reveal = ({ children, width= "fit-content", delay = 0 }: Props) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
}

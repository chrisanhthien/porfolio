//client-side rendering
"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            {/* client-side rerendering each time path changed */}
            <div key={pathname}>
                <motion.div
                    initial={{opacity:1}}
                    animate={{
                        opacity: 0,
                        transition:{delay: 0.75, duration: 0.4, ease: "easeInOut"},
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"/>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition
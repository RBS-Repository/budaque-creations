import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div 
                className="loader-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="loader"
            >
                <motion.div 
                    className="loader-content"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="loader-circle">
                        <motion.span 
                            className="loader-text"
                            animate={{ 
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            BMMC
                        </motion.span>
                    </div>
                    <motion.p 
                        className="loading-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader; 
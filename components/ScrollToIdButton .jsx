import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { useColorModeValue } from "@chakra-ui/react";

function ScrollToIdButton({ targetId }) {
  return (
    <>
      <Link to={targetId} smooth={true} duration={500} offset={-120}>
        {/*
      
 <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -1, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        >
          <BsMouse
            fontSize={50}
            cursor="pointer"
            color={useColorModeValue("black", "white")}
          />
        </motion.div>

      */}
        <BsMouse
          fontSize={50}
          cursor="pointer"
          color={useColorModeValue("black", "white")}
        />
      </Link>
    </>
  );
}

export default ScrollToIdButton;

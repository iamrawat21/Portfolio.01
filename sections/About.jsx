'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Little Bit About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
       <span className="font-extrabold text-white">A Front-end Developer </span> who focus on writing clean
       ,elegent and efficient code.{' '}<br className="md:block hidden" /> 
        <span className="font-extrabold text-white">
        A UX/UI Designer
        </span>{' '}
        with a passion for designing beautiful and functional user experiences.
        {' '}<br className="md:block hidden" />
         A designer and developer with a curious mind,
         I enjoy to meet new people and understand how they are solving problems, 
         this is one of the reasons why I invest my time on meetups from product management 
         to everything related to design (research, design thinking, design system, etc.) 
        and talking to people in general, as always can be an opportunity to learn something new.{' '}
        <span className="font-extrabold text-white">explore</span> some of my work by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

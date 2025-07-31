'use client';
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectList = [
  {
    id: 1,
    title: 'Acemart',
    description: 'Food Ordering Application',
    image: '/images/acemart-portfolio.png',
    tag: ['All', 'Mobile'],
    gitUrl: '',
    previewUrl: 'https://apps.apple.com/sg/app/skip-the-queue/id1563427334',
  },
  {
    id: 2,
    title: 'Fun Toast',
    description: 'Food Ordering Application',
    image: '/images/funtoast-portfolio.png',
    tag: ['All', 'Mobile'],
    gitUrl: '',
    previewUrl: 'https://apps.apple.com/id/app/fun-toast/id1668513707',
  },
  {
    id: 3,
    title: 'Far East Flora',
    description: 'Garden Ordering Application',
    image: '/images/fef-portfolio.png',
    tag: ['All', 'Mobile'],
    gitUrl: '',
    previewUrl: 'https://apps.apple.com/us/app/fareastflora/id6466249752',
  },
  {
    id: 4,
    title: 'Burger',
    description: 'Burger Ordering Application',
    image: '/images/burger-portfolio.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/martinwijaya97/technical-test',
    previewUrl: 'https://technical-test-martin.vercel.app/home',
  },
];

const ProjectSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [selectedTag, setSelectedTag] = useState('All');

  const handleTagChange = (newTag: string) => {
    setSelectedTag(newTag);
  };

  const projectListFiltered = projectList.filter(
    (project) => selectedTag === 'All' || project.tag.includes(selectedTag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id='#projects' className='pt-28 px-4 xl:px-16'>
      <h2 className='text-center text-white text-4xl font-bold mb-8'>
        My Project
      </h2>
      <div className='text-white flex flex-row justify-center mb-8 gap-2'>
        <ProjectTag selected={handleTagChange} />
      </div>
      <ul ref={sectionRef} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectListFiltered.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={index}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

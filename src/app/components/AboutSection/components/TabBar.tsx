import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

interface TabBarItem {
  id: string;
  title: string;
}

interface TabBarProps {
  selected: (id: string) => void;
  tabs: TabBarItem[];
}
const variants = {
  default: { width: 0 },
  active: { width: '100%' },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonStyle = active ? 'text-white' : 'text-gray-400';

  return (
    <button onClick={selectTab} className='mb-3 mr-3'>
      <p className={` font-semibold hover:text-white ${buttonStyle}`}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        transition={{ duration: 1 }}
        className='h-1 bg-primary-500 mt-1'
      />
    </button>
  );
};

const TabBar: React.FC<TabBarProps> = ({ tabs, selected }) => {
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    selected(activeTab);
  }, [activeTab, selected]);

  return (
    <div className='flex flex-row mt-8'>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          active={tab.id === activeTab}
          selectTab={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </TabButton>
      ))}
    </div>
  );
};

export default TabBar;

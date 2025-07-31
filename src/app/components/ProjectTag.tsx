import React, { useEffect, useState } from 'react';

interface ProjectTagItemProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

interface ProjectTagProps {
  selected: (id: string) => void;
}

const ProjectTagItem: React.FC<ProjectTagItemProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyle = isSelected
    ? `text-primary-500 border-primary-500`
    : 'text-gray-400 border-slate-600 hover:border-white hover:text-white';

  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyle}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const ProjectTag: React.FC<ProjectTagProps> = ({ selected }) => {
  const [selectedTag, setSelectedTag] = useState('All');
  const tags = ['All', 'Web', 'Mobile'];

  useEffect(() => {
    selected(selectedTag);
  }, [selectedTag, selected]);

  return (
    <>
      {tags.map((tag, index) => (
        <ProjectTagItem
          key={index}
          name={tag}
          isSelected={tag === selectedTag}
          onClick={() => {
            setSelectedTag(tag);
          }}
        />
      ))}
    </>
  );
};

export default ProjectTag;

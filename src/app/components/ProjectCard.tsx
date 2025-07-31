import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  previewUrl,
  gitUrl,
}) => {
  const renderGitLink = () => {
    if (gitUrl) {
      return (
        <Link
          href={gitUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='h-14 w-14'
        >
          <CodeBracketIcon className='h-10 w-10 cursor-pointer text-white' />
        </Link>
      );
    }
  };

  const renderPreviewLink = () => {
    if (previewUrl) {
      return (
        <Link
          href={previewUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='h-14 w-14'
        >
          <EyeIcon className='h-10 w-10 cursor-pointer text-white' />
        </Link>
      );
    }
  };

  return (
    <div>
      <div
        className='h-52 md:h-72 w-full rounded-t-xl relative group'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black hidden group-hover:flex group-hover:bg-opacity-80 transition'>
          {renderGitLink()}
          {renderPreviewLink()}
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-gray-900 py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

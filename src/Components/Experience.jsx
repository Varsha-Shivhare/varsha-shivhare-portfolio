import React from 'react';
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import redux from '../Assets/redux.png'
import tailwind from '../Assets/tailwind.png'
import typescript from '../Assets/typescript.png'
import material from '../Assets/material.png'
import github from '../Assets/github.png'
// import markdown from '../Assets/markdown.png'


const Experience = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style:'shadow-blue-400'
        },
        {
            id: 5,
            src: redux,
            title: 'Redux',
            style:'shadow-purple-400'
        },
        {
            id: 7,
            src: typescript,
            title: 'Typescript',
            style:'shadow-blue-500'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind CSS',
            style:'shadow-cyan-500'
        },
        {
            id: 8,
            src: material,
            title: 'Material UI',
            style:'shadow-blue-500'
        },
        {
            id: 9,
            src: github,
            title: 'GitHub',
            style:'shadow-gray-400'
        }
        // {
        //     id: 10,
        //     src: markdown,
        //     title: 'Markdown',
        //     style:'shadow-blue-500'
        // }
    ]

    
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
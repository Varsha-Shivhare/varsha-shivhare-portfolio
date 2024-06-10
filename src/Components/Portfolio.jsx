
import React from 'react';
import Editor from '../Assets/Editor.png';
import Pokemon from '../Assets/Pokemon.png';
// import Recipe from '../Assets/Recipe.png';

function Portfolio() {

  const portfolios = [
      {
        id:1,
        src: Editor
      },
      {
        id:2,
        src: Pokemon
      }
      // {
      //   id:3,
      //   src: Recipe
      // }
  ]

  const codes = [
    {
      id: 1,
      code: 'https://github.com/Varsha-Shivhare/editor.github.io',
      demo: 'https://code-here.netlify.app/'
    },
    {
      id: 2,
      code: 'https://github.com/Varsha-Shivhare/pokemon',
      demo: 'https://search-the-pokemon.netlify.app/'
    }
    // {
    //   id: 3,
    //   code: 'https://github.com/Varsha-Shivhare/Recipe.github.io',
    //   demo: '#'
    // }
  ]

  const handleDemo = (e, {id}) => {
    e.preventDefault();
    const selectedDemo = codes.find(code => code.id === id);
    if (selectedDemo) {
      window.location.href = selectedDemo.demo;
    }   
  }

  const handleCode = (e, { id, code }) => {
    e.preventDefault();
    const selectedCode = codes.find(code => code.id === id);
    if (selectedCode) {
      window.location.href = selectedCode.code;
    } 
    console.log(`Code URL for portfolio ${id}: ${code}`);
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className='flex justify-center items-center'>
                  <button onClick={(e) => handleDemo(e, { id, demo: `https://demo-url-for-${id}.com` })} className='w-1/2 px-6 py-3 m-4 hover:scale-105'>Demo</button>
                  <button onClick={(e) => handleCode(e, { id, code: `https://code-url-for-${id}.com` })} className='w-1/2 px-6 py-3 m-4 hover:scale-105'>Code</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
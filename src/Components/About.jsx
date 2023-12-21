import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-br from-gray-800 to-black text-white">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
             <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
      <p className="text-xl mt-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
        excepturi natus quam necessitatibus explicabo commodi sint est?
        Temporibus consectetur nemo quas quidem nulla quae veniam, velit ab
        ipsam expedita dignissimos!
      </p>

      <br />
      <p className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsam
        veritatis debitis delectus, incidunt necessitatibus quasi, expedita cum
        pariatur suscipit, cumque numquam possimus inventore ut harum
        perferendis iste rem? Laboriosam?
      </p>
      </div>
    </div>
  );
}

export default About;

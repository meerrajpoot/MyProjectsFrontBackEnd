import React from 'react';


const Home = () => {
  return (
    <>
   \
     <div className="flex justify-center items-start ">
      <h1 className="mt-10 text-4xl font-bold bg-slate-500 text-white inline-block px-4 py-2 rounded">
        Welcome to Our Bookstore !
      </h1>
    </div>
      <div className="p-6">
      <ul className="space-y-6 list-disc list-inside text-center">
        <li className="leading-relaxed">
          "That's the thing about books. They let you travel without moving your feet" - Jhumpa Lahiri, <em>The Namesake</em>
        </li>
        <li className="leading-relaxed">
          "Books are a uniquely portable magic" - Stephen King, <em>On Writing</em>
        </li>
        <li className="leading-relaxed">
          "A reader lives a thousand lives before he dies" - George R. R. Martin, <em>A Dance with Dragons</em>
        </li>
        <li className="leading-relaxed">
          "Until I feared I would lose it, I never loved to read. One does not love breathing" - Harper Lee, <em>To Kill a Mockingbird</em>
        </li>
        <li className="leading-relaxed">
          "I lived in books more than I lived anywhere else" - Neil Gaiman, <em>The Ocean at the End of the Lane</em>
        </li>
        <li className="leading-relaxed">
          "Books must be read as deliberately and reservedly as they were written" - Henry David Thoreau, <em>Walden</em>
        </li>
        <li className="leading-relaxed">
          "To read is to voyage through time" - Carl Sagan
        </li>
        <li className="leading-relaxed">
          "Show me a family of readers, and I will show you the people who move the world" - Napoleon Bonaparte
        </li>
        <li className="leading-relaxed">
          "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors" - Charles Baudelaire
        </li>
      </ul>
    </div>
    
    </>
  );
};

export default Home;

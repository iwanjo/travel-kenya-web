import React from "react";

import { TailwindNavbar } from "tailwind-navbar-react";
// import "./styles/tailwind-pre-build.css";

const App = () => {
  const links = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "About",
      link: "#"
    },
    {
      name: "Explore",
      link: "#"
    },
    {
      name: "Services",
      link: "#"
    },
    
  ];

  return (
    <>
    <div  className="bg-hero-image">

   
      <TailwindNavbar 
        brand={
          <img
            src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png"
            width="40"
            height="40"
            alt="Brand logo"
          />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            {links.map(link => {
              // It should be noted that here we would normally use <Link> or
              // whatever other link JSX element your router uses; since all our
              // links are external here we just use <a>
              return (
                <li>
                  <a
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </TailwindNavbar>
      <div
        className="flex p-5 flex-col justify-center text-center"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      >
        <h1 className="text-5xl font-semibold">This is a responsive navbar!</h1>
        <p className="text-2xl">
          Try resizing the window to see how it responds to different screen
          sizes.
        </p>
      </div>
      </div>
    </>
  );
};

export default App;

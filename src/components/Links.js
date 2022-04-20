import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All🔎" },
  { url: "/news", text: "News📰" },
  { url: "/images", text: "Images🏙" },
  { url: "/videos", text: "Videos📹" },
];

function Links() {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(function (link, index) {
        return (
          <NavLink
            key={index}
            to={link.url}
            className="text-blue-700 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0 "
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Links;

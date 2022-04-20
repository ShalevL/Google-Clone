import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

function Results() {
  const searchResults = useSelector(function (state) {
    return state.searchResults;
  });

  const location = useLocation();

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {searchResults?.results.map(function (item, index) {
            return (
              <div key={index} className="md:w-2/5 w-full">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {item.link.length > 30
                      ? item.link.substring(0, 30)
                      : item.link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {item.title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {searchResults?.images?.map(function (image, index) {
            return (
              <a
                className="sm:p-3 p-5"
                href={image.link.href}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image.image.src} alt={image.alt} />
                <p className="w-36 break-words text-sm mt-2">
                  {image.link.title}
                </p>
              </a>
            );
          })}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {searchResults?.news.map(function (item) {
            return (
              <div key={item.id} className="md:w-2/5 w-full">
                <a
                  href={item.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {item.title}
                  </p>
                  <div className="flex gap-4"></div>
                </a>
                <a href={item.source.href} target="_blank" rel="noreferrer">
                  {item.source.href}
                </a>
              </div>
            );
          })}
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap">
          {searchResults.videos.map(function (video, index) {
            return (
              <div key={index} className="p-2">
                {video.additional_links[0].href.includes("watch") && (
                  <ReactPlayer
                    url={video.additional_links[0].href}
                    controls
                    width="355px"
                    height="200px"
                  />
                )}
              </div>
            );
          })}
        </div>
      );
  }
}

export default Results;

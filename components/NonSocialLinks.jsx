"use client";
import { useEffect, useState } from "react";
import { getLinksLinks } from "../utils/data";

const NonSocialLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(getLinksLinks());
  }, []);

  return (
    <div className="mb-20">
      {links.map((link) => {
        return (
          <div key={link.id}>
            <button className="text-center button h2 w-80 mx-auto text-lg">
              {link.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NonSocialLinks;
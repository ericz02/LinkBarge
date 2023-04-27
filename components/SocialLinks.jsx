"use client";
import { useEffect, useState } from "react";
import { getSocialLinks } from "../utils/data";
import twitter from "../images/zip/twitter.svg";
import facebook from "../images/zip/facebook.svg";
import Image from "next/image";

const SocialLinks = () => {
    const [links, setLinks] = useState([]);

    const imgAr = [twitter, facebook];

    useEffect(() => {
        setLinks(getSocialLinks());
    }, []);

    return (
        <div className="flex justify-center items-center my-10">
        {links.map((link) => {
            return (
            <div key={link.id}>
                <a href={link.url}>
                <Image
                src={imgAr[link.id - 1]}
                alt="twitter"
                className="text-center"
            />
            </a>

        </div>
        );
    })}
    </div>
  );
};

export default SocialLinks;

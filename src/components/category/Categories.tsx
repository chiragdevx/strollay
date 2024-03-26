import Link from "next/link";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
  const linkArray = [
    {
      name: "SAREE",
      link: "/",
    },
    {
      name: "SALWAR KAMEEZ",
      link: "/",
    },
    {
      name: "LEHNGAS",
      link: "/",
    },
    {
      name: "KURTIES",
      link: "/",
    },
    {
      name: "KURTIES",
      link: "/",
    },
  ];
  return (
    <div>
      <ul className="hidden sm:flex items-center gap-[48px]">
        {linkArray.map((link) => (
          <li
            key={link.name}
            className="text-[black] text-[16px] font-normal hover:text-primaryPink duration-500"
          >
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

"use client"
// mark this as client as this is gona be interactive component

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<ListItemProps> = ({
  image,
  name,
  href
}) => {

  const router = useRouter();
  // from next/navigation - feature of nextjs 13+

  const onClick = () => {
    // use authentications before push
    router.push(href);
  }

  return ( 
    <button
      onClick={onClick}
      className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
      "
    >
      <div className="
        relative
        min-h-[64px]
        min-w-[64px]
      ">
        <Image 
          className="object-cover"
          fill
          src={image}
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">
        {name}
      </p>
      <div className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        p-4
        drop-shadow-md
        right-5
        group-hover:opacity-100  
        hover:scale-100
      "
      // group property of tailwind works like, group you give to parent element and then use it as a reference to transform
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}

export default ListItem;
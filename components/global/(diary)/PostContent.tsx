import { IDiary } from "@/utils/supabase";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostContent = ({
  diary_id,
  avatar,
  content,
  username,
  email,
}: IDiary): React.ReactElement => {
  return (
    <Link
      href={`/diary/${diary_id}`}
      className="card card-body card-bordered rounded-xl shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-purple-400 hover:scale-105 h-72">
      <div className="flex items-center gap-4">
        <Image
          src={avatar as string}
          alt={avatar as string}
          width={35}
          height={35}
          className="rounded-full bg-base-200"
        />
        <p className="font-semibold overflow-x-auto">{username || email}</p>
      </div>
      <p className="overflow-y-auto mt-5">{content}</p>
    </Link>
  );
};

export default PostContent;

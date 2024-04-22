import React from "react";
import PostContent from "./PostContent";
import { supabase } from "@/utils/supabase";
import Link from "next/link";

const CardDiaries = async (): Promise<React.ReactElement> => {
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false });

  if (error) return <p>Please reload the page...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-5 px-5">
      {data.length === 0 ? (
        <p className="text-center">Belum Ada Diary...</p>
      ) : (
        data?.map((diary) => {
          return (
            <PostContent
              diary_id={diary.id}
              key={diary.id}
              avatar={diary.avatar}
              content={diary.content}
              username={diary.username}
              email={diary.email}
            />
          );
        })
      )}
    </div>
  );
};

export default CardDiaries;

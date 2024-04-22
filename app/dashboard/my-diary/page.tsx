import PostContent from "@/components/global/(diary)/PostContent";
import Wrapper from "@/components/global/Wrapper";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import React from "react";

const page = async (): Promise<React.ReactElement> => {
  const { email } = await getUserData();

  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("email", email);

  if (error) return <p>Please reload the page...</p>;

  return (
    <Wrapper title="My Diary">
      <div className="grid md:grid-cols-3 gap-5 px-5">
        {data.length === 0 ? (
          <p>Belum Ada Diary...</p>
        ) : (
          data?.map((diary) => {
            return (
              <PostContent
                diary_id={diary.id}
                key={diary.id}
                avatar={diary.avatar}
                content={diary.content}
                email={diary.email}
                username={diary.username}
              />
            );
          })
        )}
      </div>
    </Wrapper>
  );
};

export default page;

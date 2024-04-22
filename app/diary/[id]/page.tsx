import PostContent from "@/components/global/(diary)/PostContent";
import Wrapper from "@/components/global/Wrapper";
import { supabase } from "@/utils/supabase";
import React from "react";
import Image from "next/image";
import CreateCommentForm from "@/components/auth/CreateCommentForm";
import CommentList from "@/components/global/(diary)/CommentList";

type paramsProps = {
  params: {
    id: number;
  };
};

export const revalidate = 0;

const page = async ({ params }: paramsProps): Promise<React.ReactElement> => {
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false })
    .eq("id", params.id)
    .single();
  const posted_at = new Date(data.created_at).toLocaleDateString();

  if (error) return <p>Please reload the page...</p>;

  return (
    <Wrapper title={`Detail Diary`}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center mx-auto gap-3">
          <Image alt={data.avatar} src={data.avatar} width={200} height={200} />
          <p>Posted at: {posted_at}</p>
          <h3 className="italic">by: {data.email || data.username}</h3>
        </div>
        <p className="mt-5">{data.content}</p>
        <CommentList diary_id={params.id} />
        <CreateCommentForm diary_id={data.id} />
      </div>
    </Wrapper>
  );
};

export default page;

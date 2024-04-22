"use client";
import { createCommentAction } from "@/actions/createCommentAction";
import React, { RefObject, useRef } from "react";
import { clerkClient } from "@clerk/nextjs/server";

type ParamsProps = {
  diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const resetForm = (): void => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1000);
  };

  return (
    <form
      action={createCommentAction}
      className="flex flex-col gap-2 w-full"
      onSubmit={resetForm}
      ref={formRef}>
      <textarea
        className="textarea textarea-bordered p-4 rounded-lg"
        placeholder="Tuliskan Komentar Disini...."
        name="content"
      />
      <input type="hidden" value={diary_id} name="diary_id" />
      <button className="btn rounded-xl mx-auto mb-12" type="submit">
        Comment Now
      </button>
    </form>
  );
};

export default CreateCommentForm;

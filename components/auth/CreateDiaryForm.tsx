import { createDiaryAction } from "@/actions/createDiaryAction";
import React from "react";

const CreateDiaryForm = (): React.ReactElement => {
  return (
    <form
      action={createDiaryAction}
      className="flex flex-col gap-4 max-w-xl mx-auto">
      <textarea
        className="textarea textarea-bordered h-52 p-4 rounded-lg"
        placeholder="Bikin Diary Disini...."
        name="content"
      />
      <button className="btn rounded-xl" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateDiaryForm;

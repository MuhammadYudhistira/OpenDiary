import CreateDiaryForm from "@/components/auth/CreateDiaryForm";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

const page = (): React.ReactElement => {
  return (
    <Wrapper title="Create Diary">
      <CreateDiaryForm />
    </Wrapper>
  );
};

export default page;

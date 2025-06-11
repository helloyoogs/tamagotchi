"use client";

import { CInput } from "@/app/component/_atoms/cInput";
import CButton from "@/app/component/_atoms/cButton";
import { AlertPopup } from "@/app/component/_molecules/alertPopup";
import { UserApi } from "@/app/@types/api";

export default function LoginPage() {
  const fields: {
    name: keyof UserApi;
    label: string;
    type?: string;
    placeholder: string;
  }[] = [
    {
      name: "email",
      label: "아이디(이메일)",
      placeholder: "이메일",
    },
    {
      name: "password",
      label: "비밀번호",
      type: "password",
      placeholder: "비밀번호",
    },
  ];
  return (
    <div className={"h-full flex  justify-center items-center"}>
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[600px] max-w-full border border-[#DBDBDB] p-[30px]"
      >
        <p className={"mb-[50px] text-center text-[20px] font-semibold"}>
          TAMAGOTCHI
        </p>
        {fields.map(({ name, label, type = "text", placeholder }) => (
          <CInput.Field
            key={name}
            // error={!!errors[name]}
          >
            <CInput.Label>{label}</CInput.Label>
            <CInput
              name={name}
              type={type}
              placeholder={placeholder}
              // value={form[name]}
              // onChange={handleChange}
            />
            {/*<CInput.ValidMessage>*/}
            {/*  {errors[name]}*/}
            {/*</CInput.ValidMessage>*/}
          </CInput.Field>
        ))}
        <CButton type={"submit"} className={"mt-[20px]"}>
          로그인
        </CButton>
      </form>
      {/*<AlertPopup*/}
      {/*  open={!!signupAlertOpen}*/}
      {/*  onOpenChange={(open: boolean) => {*/}
      {/*    if (!open) setSignupAlertOpen("");*/}
      {/*  }}*/}
      {/*  description={signupAlertOpen}*/}
      {/*  onConfirm={() => {*/}
      {/*    setSignupAlertOpen("");*/}
      {/*    if (isSignupSuccess) {*/}
      {/*      router.push("/containers/login");*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
}

"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { CInput } from "@/app/component/_atoms/cInput";
import { UserApi } from "@/app/@types/api";

export default function SignUp() {
  const [form, setForm] = useState<UserApi>({
    email: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("회원가입 요청이 전송되었습니다!");
  };

  const fields: {
    name: keyof UserApi;
    label: string;
    type?: string;
    placeholder: string;
  }[] = [
    { name: "email", label: "아이디(이메일)", placeholder: "이메일" },
    {
      name: "password",
      label: "비밀번호",
      type: "password",
      placeholder: "비밀번호",
    },
    { name: "nickname", label: "닉네임", placeholder: "닉네임" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[600px] m-auto border border-[#DBDBDB] p-[30px] mt-[10%]"
    >
      <p className={"mb-[50px] text-center text-[20px]"}>TAMAGOTCHI</p>
      {fields.map(({ name, label, type = "text", placeholder }) => (
        <CInput.Field key={name} error={true}>
          <CInput.Label>{label}</CInput.Label>
          <CInput
            name={name}
            type={type}
            placeholder={placeholder}
            value={form[name]}
            onChange={handleChange}
          />
          <CInput.ValidMessage>asdasdsadasdsa</CInput.ValidMessage>
        </CInput.Field>
      ))}
      <button type="submit">회원가입</button>
    </form>
  );
}

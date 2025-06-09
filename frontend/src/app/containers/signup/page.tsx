"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { CInput } from "@/app/component/_atoms/cInput";
import { UserApi } from "@/app/@types/api";
import CButton from "@/app/component/_atoms/cButton";
import { API_PATH } from "@/app/constants/api";
import { post } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { validateUser } from "@/lib/validate-user";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState<UserApi>({
    email: "",
    password: "",
    nickname: "",
  });
  const [errors, setErrors] = useState<Partial<UserApi>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateUser(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await post(API_PATH.USER.SIGNUP, form);
      alert("회원가입 요청이 전송되었습니다!");
      router.push("/containers/login");
    } catch (err) {
      alert("회원가입 실패: " + err);
    }
  };

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
    { name: "nickname", label: "닉네임", placeholder: "닉네임" },
  ];

  return (
    <div className={"h-full flex  justify-center items-center"}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[600px] max-w-full border border-[#DBDBDB] p-[30px]"
      >
        <p className={"mb-[50px] text-center text-[20px] font-semibold"}>
          TAMAGOTCHI
        </p>
        {fields.map(({ name, label, type = "text", placeholder }) => (
          <CInput.Field key={name} error={!!errors[name]}>
            <CInput.Label>{label}</CInput.Label>
            <CInput
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
            />
            <CInput.ValidMessage>{errors[name]}</CInput.ValidMessage>
          </CInput.Field>
        ))}
        <CButton type={"submit"} className={"mt-[20px]"}>
          회원가입
        </CButton>
      </form>
    </div>
  );
}

"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { CInput } from "@/app/component/_atoms/cInput";
import { UserApi } from "@/app/@types/api";
import CButton from "@/app/component/_atoms/cButton";
import { API_PATH } from "@/app/constants/api";
import { post } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { validateUser } from "@/lib/validate-user";
import { useAlert } from "@/app/context/AlertContext";

export default function SignUpPage() {
  const router = useRouter();
  const { showAlert } = useAlert();
  const [form, setForm] = useState<UserApi>({
    email: "",
    password: "",
    nickname: "",
  });
  const [errors, setErrors] = useState<Partial<UserApi>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateUser(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await post(API_PATH.USER.SIGNUP, form);

      switch (result.code) {
        case "SIGNUP_SUCCESS":
          showAlert({
            description:
              "TAMAGOTCHI에 가입해 주셔서 감사합니다! 로그인 페이지로 이동합니다.",
            onConfirm: () => router.push("/containers/login"),
          });
          break;
        case "EMAIL_ALREADY_EXISTS":
          showAlert({ description: "이미 사용 중인 이메일입니다." });
          break;
        case "NICKNAME_ALREADY_EXISTS":
          showAlert({ description: "이미 사용 중인 닉네임입니다." });
          break;
        default:
          showAlert({
            description:
              "처리 중 알 수 없는 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
          });
      }
    } catch (error) {
      console.error(error);
      showAlert({ description: "서버 오류가 발생했습니다." });
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
    <div className={"h-full flex justify-center items-center"}>
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

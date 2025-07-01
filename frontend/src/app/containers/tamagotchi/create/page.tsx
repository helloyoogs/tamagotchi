"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { post } from "@/lib/api-client";
import { useAlert } from "@/app/context/AlertContext";
import CButton from "@/app/component/_atoms/cButton";
import { CInput } from "@/app/component/_atoms/cInput";

export default function CreateTamagotchiPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { showAlert } = useAlert();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    try {
      const result = await post("/api/tamagotchi", { name });

      if (result.id) {
        showAlert({
          description: `"${name}" 다마고치가 생성되었습니다!`,
          onConfirm: () => router.push("/containers/main"),
        });
      } else if (result.error) {
        showAlert({ description: result.error });
      } else {
        showAlert({ description: "알 수 없는 오류가 발생했습니다." });
      }
    } catch (err) {
      console.error(err);
      showAlert({ description: "서버 오류가 발생했습니다." });
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[600px] max-w-full border border-[#DBDBDB] p-[30px]"
      >
        <p className="mb-[50px] text-center text-[20px] font-semibold">
          다마고치 생성
        </p>

        <CInput.Field error={!!error}>
          <CInput.Label>다마고치 이름</CInput.Label>
          <CInput
            name="name"
            placeholder="다마고치의 이름을 입력하세요"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
              setError("");
            }}
          />
          <CInput.ValidMessage>{error}</CInput.ValidMessage>
        </CInput.Field>

        <CButton type="submit" className="mt-[20px]">
          생성하기
        </CButton>
      </form>
    </div>
  );
}

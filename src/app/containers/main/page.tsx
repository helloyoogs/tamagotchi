import {TamagotchiData, TamagotchiDisplayDot} from "@/app/component/tamagotchi_display";

const mockData: TamagotchiData = {
  name: "치키",
  status: "happy",
  level: 11,
  hunger: 70,
  sleepiness: 70,
  mood: 70,
  updatedAt: "2025-06-02T12:00:00Z",
  // gift: {
  //   name: "인형",
  //   emoji: "🧸",
  //   receivedAt: "2025-06-02T11:58:00Z"
  // }
};

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <TamagotchiDisplayDot data={mockData} />

      <div className="grid grid-cols-3 gap-2 text-sm">
        <button>🍚 밥 먹이기</button>
        <button>💩 똥 치우기</button>
        <button>🧸 놀아주기</button>
        <button>💤 재우기</button>
        <button>❤️ 쓰다듬기</button>
        <button>🎁 선물 주기</button>
        <button>🧼 샤워하기</button>
        <button>🤒 치료하기</button>
      </div>
    </main>
  );
}

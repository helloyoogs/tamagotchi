export interface TamagotchiData {
  name: string;
  status: 'normal' | 'happy' | 'very-happy' | 'sad' | 'sleepy' | 'hungry' | 'sick' | 'dirty';
  level: number;
  hunger: number;
  sleepiness: number;
  mood: number;
  updatedAt: string;
  gift?: {
    name: string;
    emoji: string;
    receivedAt: string;
  };
  isAlive?: boolean;
}

interface TamagotchiDisplayProps {
  data: TamagotchiData;
}

function getChickEmoji(level: number): string {
  if (level <= 10) return '🥚';
  if (level <= 20) return '🐣';
  if (level <= 30) return '🐥';
  return '🐤';
}


export function TamagotchiDisplay({ data }: TamagotchiDisplayProps) {
  const { status, name, level, hunger, sleepiness, mood, gift } = data;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`chick ${status}`}>
        {getChickEmoji(level)}
        {status === 'happy' && <div className="happy-bubble">😊</div>}
        {status === 'very-happy' && <div className="very-happy-bubble">🥳</div>}
        {status === 'sad' && <div className="sad-bubble">😢</div>}
        {status === 'sleepy' && <div className="sleep-bubble">zzz...</div>}
        {status === 'hungry' && <div className="hunger-bubble">🍗</div>}
        {status === 'sick' && <div className="sick-bubble">🤒</div>}
        {status === 'dirty' && <div className="dirty-bubble">🛁</div>}
        {gift && <div className="gift-bubble">{gift.emoji}</div>}
      </div>

      <div className="text-sm text-center">
        <div className="font-semibold">{name}</div>
        <div>Level: {level}</div>
        <div>Hunger: {hunger} | Sleepiness: {sleepiness} | Mood: {mood}</div>
      </div>
    </div>
  );
}

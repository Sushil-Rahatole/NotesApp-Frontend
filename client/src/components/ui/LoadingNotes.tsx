import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./animation.json"; // your .lottie file converted to .json

interface Props {
  userName: string;
}

export default function LoadingNotes({ userName }: Props) {
  const smartMessages = [
    `📚 Fetching notes, ${userName}... Ready to be the next topper?`,
    `🧠 Your brain’s about to thank you, ${userName}. Big things ahead!`,
    `💪 I see a future engineer in the making, ${userName}!`,
    `🤓 Studying already, ${userName}? You’re way ahead of the crowd!`,
    `🔥 Your dedication is 100%... just like your future marks, ${userName}!`,
    `⏳ Hold on, ${userName}... success doesn’t load in 2 seconds either 😅`,
    `🥇 Trust me, ${userName}, these notes are gold. Just like your ambitions.`,
    `🧾 Calculating your future salary, ${userName}... It's impressive!`,
    `📦 Unboxing brilliance for you, ${userName}... give us a sec!`,
    `🧘 Be patient, ${userName}... good marks come to those who wait!`,
    `🏆 You’re doing what 90% won’t do. That’s champion stuff, ${userName}!`,
    `🧃 Break time? Nah, ${userName} — you’re too focused for that!`,
    `💼 HRs in 2027 will say: 'We saw it coming, ${userName}!'`,
    `📖 One step closer to being a coding wizard, ${userName}!`,
    `👨‍🏫 Notes are loading... and so is your destiny, ${userName}.`,
    `🧩 Your syllabus and your dreams are both coming together, ${userName}.`,
    `📈 Future graph for ${userName}: learning now = earning later 💸`,
    `🎯 These notes are aimed at your success, ${userName} — hold on!`,
    `🥽 Just adjusting your academic telescope, ${userName}...`,
    `🧯 Calm down genius ${userName}, your notes are almost here!`,
    `🔮 I predict: In 2-3 years, ${userName} will say 'this helped me'.`,
    `💻 Studying now = flexing in placements later, ${userName}!`,
    `⚙️ Aligning chapters with your greatness, ${userName}...`,
    `🧬 You’re literally building your future, one unit at a time, ${userName}!`,
    `🧠 Brain boost loading for ${userName}... don’t blink!`,
    `💡 Don’t worry ${userName}, you’re already smarter than you think!`,
    `🚨 Genius detected: ${userName}! Notes are preparing themselves.`,
    `🧭 Just like GPS, we’re routing ${userName} to success.`,
    `😎 Only legends like ${userName} wait patiently for quality notes!`,
    `🌱 Planting knowledge seeds for ${userName}... harvest coming soon!`,
    `📜 ${userName}, you’re writing your own success story... one scroll at a time!`,
  ];

  const [msgIndex, setMsgIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentMessage = smartMessages[msgIndex].replace(/{name}/g, userName);

  // Typing animation effect
  useEffect(() => {
    const typing = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setTyped((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setMsgIndex((prev) => (prev + 1) % smartMessages.length);
          setCharIndex(0);
          setTyped("");
        }, 2500);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [charIndex, msgIndex]);

  // Simulated progress illusion
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 space-y-6 text-center">
      <Lottie animationData={animationData} loop style={{ width: 260, height: 260 }} />

      <div className="text-slate-700 font-medium text-lg min-h-[44px]">
        {typed}
        <span className="animate-ping">|</span>
      </div>

      <div className="w-full max-w-md h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="bg-indigo-500 h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-400">Loading your success journey, {userName}...</p>
    </div>
  );
}

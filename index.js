import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generate = () => {
    setResult(`🌏 根据您的输入「${input}」，AI 规划如下：\n\nDay 1: 抵达目的地...\nDay 2: 游览经典景点...`);
  };

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 28 }}>🧳 旅行器 Travel AI</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例如：我想去日本7天，预算6000元"
        style={{ padding: 10, width: '100%', marginTop: 20 }}
      />
      <button onClick={generate} style={{ padding: 10, marginTop: 20 }}>✨ 生成行程</button>
      {result && <pre style={{ whiteSpace: 'pre-wrap', marginTop: 30 }}>{result}</pre>}
    </main>
  );
}

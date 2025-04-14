import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        {text
          .split(" ")
          .map((word) => word && "🐶")
          .join("")}
      </div>
    </div>
  );
}

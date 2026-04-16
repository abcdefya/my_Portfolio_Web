import { useEffect, useMemo, useState } from "react";

export const PortfolioAssistant = ({ language }) => {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const content = useMemo(() => ({
    en: {
      badge: "Portfolio Assistant",
      title: "Ask about The Anh",
      subtitle: "Try asking about background, skills, or projects.",
      collapse: "Minimize assistant",
      expand: "Open assistant",
      orbLabel: "Portfolio assistant orb",
      orbMessages: [
        "I am your portfolio assistant.",
        "Ask me about The Anh anytime.",
        "I'm always here if you need me."
      ],
      placeholder: "Ask a question...",
      send: "Send",
      empty: "Please enter a question first.",
      response: "I am The Anh's portfolio assistant.",
      welcome: "I can answer basic questions about The Anh and his projects."
    },
    vi: {
      badge: "Trợ Lý Portfolio",
      title: "Hỏi về Thế Anh",
      subtitle: "Bạn có thể hỏi về bản thân, kỹ năng hoặc dự án.",
      collapse: "Thu gọn trợ lý",
      expand: "Mở trợ lý",
      orbLabel: "Biểu tượng trợ lý portfolio",
      orbMessages: [
        "Tôi là trợ lý portfolio đây.",
        "Bạn có thể hỏi về Thế Anh bất cứ lúc nào.",
        "Tôi luôn ở đây nếu bạn cần."
      ],
      placeholder: "Nhập câu hỏi...",
      send: "Gửi",
      empty: "Vui lòng nhập câu hỏi trước.",
      response: "Tôi là trợ lý portfolio của Thế Anh.",
      welcome: "Tôi có thể trả lời các câu hỏi cơ bản về Thế Anh và các dự án của anh ấy."
    }
  }), []);

  const t = content[language];
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: t.welcome }]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [orbMessageIndex, setOrbMessageIndex] = useState(0);
  const orbCycleDurationMs = useMemo(() => {
    const longestMessageLength = t.orbMessages.reduce(
      (maxLength, message) => Math.max(maxLength, message.length),
      0
    );

    return 3900 + longestMessageLength * 18;
  }, [t.orbMessages]);
  const orbBubbleProfile = useMemo(() => (
    Array.from({ length: 6 }, () => {
      const size = 5 + Math.random() * 5;
      const startRight = 14 + Math.random() * 46;
      const startBottom = -30 + Math.random() * 16;
      const driftA = -5 + Math.random() * 10;
      const driftB = -8 + Math.random() * 16;
      const driftC = -12 + Math.random() * 24;
      const rise = 96 + Math.random() * 42;
      const delay = Math.random() * 0.55;
      const speed = 0.6 + Math.random() * 0.26;
      const alpha = 0.18 + Math.random() * 0.28;

      return {
        "--bubble-size": `${size.toFixed(2)}px`,
        "--bubble-right": `${startRight.toFixed(2)}px`,
        "--bubble-bottom": `${startBottom.toFixed(2)}px`,
        "--bubble-drift-a": `${driftA.toFixed(2)}px`,
        "--bubble-drift-b": `${driftB.toFixed(2)}px`,
        "--bubble-drift-c": `${driftC.toFixed(2)}px`,
        "--bubble-rise": `${rise.toFixed(2)}px`,
        "--bubble-delay": `${delay.toFixed(2)}s`,
        "--bubble-speed": speed.toFixed(2),
        "--bubble-alpha": alpha.toFixed(2),
      };
    })
  ), []);
  const orbFrameProfile = useMemo(() => {
    const riseIntensity = 1 + Math.random() * 0.52;
    const startScale = 0.22 + Math.random() * 0.08;
    const finalScale = 1.16 + Math.random() * 0.18;
    const finalBlur = 1.8 + Math.random() * 1.1;
    const squeezeScaleX = 0.9 + Math.random() * 0.05;
    const squeezeScaleY = 1.04 + Math.random() * 0.08;
    const curveAmplitude = 4 + Math.random() * 4.5;
    const curvePhase = Math.random() * Math.PI * 2;
    const curveLift = -2 + Math.random() * 4;
    const xPoints = Array.from({ length: 8 }, (_, index) => {
      const progress = index / 7;
      const sinCurve = Math.sin(curvePhase + progress * Math.PI * 1.45);
      const secondaryCurve = Math.sin(curvePhase * 0.7 + progress * Math.PI * 2.05) * 0.2;
      const tertiaryCurve = Math.cos(curvePhase * 0.45 + progress * Math.PI * 0.92) * 0.12;

      return clamp((sinCurve + secondaryCurve + tertiaryCurve) * curveAmplitude + curveLift * progress, -12, 12);
    });

    return {
      "--msg-y-0": `${(22 + Math.random() * 10).toFixed(2)}px`,
      "--msg-y-1": `${(10 + Math.random() * 12).toFixed(2)}px`,
      "--msg-y-2": `${(1 + Math.random() * 10).toFixed(2)}px`,
      "--msg-y-3": `${(-6 - Math.random() * 8).toFixed(2)}px`,
      "--msg-y-4": `${(-18 - Math.random() * 13).toFixed(2)}px`,
      "--msg-y-5": `${(-34 - Math.random() * 16).toFixed(2)}px`,
      "--msg-y-6": `${(-48 - Math.random() * 18).toFixed(2)}px`,
      "--msg-y-7": `${(-58 - Math.random() * 22).toFixed(2)}px`,
      "--msg-x-0": `${xPoints[0].toFixed(2)}px`,
      "--msg-x-1": `${xPoints[1].toFixed(2)}px`,
      "--msg-x-2": `${xPoints[2].toFixed(2)}px`,
      "--msg-x-3": `${xPoints[3].toFixed(2)}px`,
      "--msg-x-4": `${xPoints[4].toFixed(2)}px`,
      "--msg-x-5": `${xPoints[5].toFixed(2)}px`,
      "--msg-x-6": `${xPoints[6].toFixed(2)}px`,
      "--msg-x-7": `${xPoints[7].toFixed(2)}px`,
      "--msg-rise-intensity": riseIntensity.toFixed(2),
      "--msg-scale-start": startScale.toFixed(2),
      "--msg-scale-end": finalScale.toFixed(2),
      "--msg-blur-end": `${finalBlur.toFixed(2)}px`,
      "--msg-squeeze-x": squeezeScaleX.toFixed(2),
      "--msg-squeeze-y": squeezeScaleY.toFixed(2),
    };
  }, []);

  useEffect(() => {
    setMessages((currentMessages) => {
      if (currentMessages.length === 0) {
        return [{ role: "assistant", text: t.welcome }];
      }

      const updatedMessages = [...currentMessages];
      updatedMessages[0] = { role: "assistant", text: t.welcome };
      return updatedMessages;
    });
  }, [t.welcome]);

  useEffect(() => {
    setOrbMessageIndex(0);
  }, [language]);

  useEffect(() => {
    if (!isCollapsed) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setOrbMessageIndex((currentIndex) => (currentIndex + 1) % t.orbMessages.length);
    }, orbCycleDurationMs);

    return () => clearInterval(intervalId);
  }, [isCollapsed, orbCycleDurationMs, t.orbMessages]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "assistant", text: t.empty },
      ]);
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedInput },
      { role: "assistant", text: t.response },
    ]);
    setInput("");
  };

  if (isCollapsed) {
    const currentMessage = t.orbMessages[orbMessageIndex];
    
    return (
      <aside className="portfolio-assistant-orb-wrap" aria-label={t.orbLabel}>
        <div
          key={`${language}-${orbMessageIndex}`}
          className="assistant-orb-float-shell"
          style={{
            "--assistant-float-duration": `${orbCycleDurationMs}ms`,
            ...orbFrameProfile,
          }}
        >
          <div className="assistant-orb-float-sway">
            <div
              className="assistant-orb-message assistant-orb-message-float"
              role="status"
              aria-live="polite"
            >
              <span className="assistant-orb-message-text">
                {currentMessage.split("").map((char, index) => (
                  <span
                    key={index}
                    className="assistant-char"
                    style={{
                      animationDelay: `${index * 0.03}s`,
                      "--char-wave-delay": `${(index * -0.14).toFixed(2)}s`,
                    }}
                  >
                    <span className="assistant-char-inner">{char === " " ? "\u00A0" : char}</span>
                  </span>
                ))}
              </span>
              {orbBubbleProfile.map((bubbleStyle, bubbleIndex) => (
                <span
                  key={`bubble-${bubbleIndex}`}
                  className="assistant-orb-pop"
                  style={bubbleStyle}
                ></span>
              ))}
              <span className="assistant-orb-ripple"></span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="portfolio-assistant-orb"
          aria-label={t.expand}
          onClick={() => setIsCollapsed(false)}
        >
          <img className="assistant-orb-logo" src={`${process.env.PUBLIC_URL}/assistant-logo.svg`} alt="Portfolio logo" />
        </button>
      </aside>
    );
  }

  return (
    <aside className="portfolio-assistant" aria-label={t.badge}>
      <div className="assistant-header">
        <div>
          <span className="assistant-badge">{t.badge}</span>
          <h3>{t.title}</h3>
          <p>{t.subtitle}</p>
        </div>
        <button
          type="button"
          className="assistant-collapse-btn"
          aria-label={t.collapse}
          onClick={() => setIsCollapsed(true)}
        >
          -
        </button>
      </div>
      <div className="assistant-messages">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={message.role === "assistant" ? "assistant-bubble assistant-bubble-ai" : "assistant-bubble assistant-bubble-user"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="assistant-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
        />
        <button type="submit">{t.send}</button>
      </form>
    </aside>
  );
};
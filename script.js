window.addEventListener("load", () => {
  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.id = "YOUR_CHATBASE_ID";
  script.defer = true;

  document.body.appendChild(script);

  // Auto open chatbot
  const openBot = setInterval(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      clearInterval(openBot);
    }
  }, 500);
});

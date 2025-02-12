// const apiKey="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";

fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
      "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "deepseek/deepseek-r1-distill-llama-70b:free",
      "messages": [
        {
          "role": "user",
          "content": "What is the meaning of life?"
        }
      ]
    })
  });
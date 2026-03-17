
import { GoogleGenAI, Type } from "@google/genai";

export const askAIAboutManual = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `
ユーザーの質問: "${query}"

あなたはプラスチック工場の生産管理システムの操作マニュアルのヘルプAIです。
以下のルールに従って、ユーザーに回答してください。
1. 日本語が不慣れな人でもわかるよう、とても簡単な日本語で答えてください。
2. 専門用語は使いません。
3. 箇条書きなどを使って、短く説明してください。
4. 手順は「1.」「2.」と書いてください。
5. 「〜してください」「〜をします」と丁寧な言葉を使ってください。

質問の内容に対して、操作方法をやさしく解説してください。
    `,
    config: {
      temperature: 0.7,
      topP: 0.95,
      thinkingConfig: { thinkingBudget: 0 }
    }
  });

  return response.text;
};

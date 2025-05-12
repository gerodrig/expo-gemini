import { fetch } from 'expo/fetch';
// import geminiApi from '../gemini.api';

const API_URL = process.env.EXPO_PUBLIC_GEMINI_API_URL;

export const getBasicPromptStream = async (
  prompt: string,
  onChunk: (text: string) => void
) => {
  const response = await fetch(`${API_URL}/basic-prompt-stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'plain/text',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.body) {
    console.error('Theres no body in the response');
    throw new Error('Theres no body in the response');
  }

  const reader = response.body.getReader(); // UINT
  const decoder = new TextDecoder('utf-8');

  let result = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    result += chunk;
    onChunk(result);
  }
};

import geminiApi from '../gemini.api';

export const getBasicPrompt = async (prompt: string) => {
  const response = await geminiApi.post(
    '/basic-prompt',
    {
      prompt,
    },
    {
      responseType: 'text',
    }
  );

  console.log({ data: response.data });

  return response.data;
};

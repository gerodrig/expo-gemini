import uuid from 'react-native-uuid';
import { create } from 'zustand';

import * as GeminiActions from '@/actions/gemini/';
import { Message } from '@/interfaces/chat.interfaces';


interface ChatContextState {
  isGeminiWriting: boolean;
  chatId: string;
  messages: Message[];
  addMessage: (text: string, attachments: any[]) => void;
  clearChat: () => void;
}

const createMessage = (
  text: string,
  sender: 'user' | 'gemini',
  attachments: any[] = []
): Message => {
  if (attachments.length > 0) {
    return {
      id: uuid.v4(),
      text: text,
      createdAt: new Date(),
      sender: sender,
      type: 'image',
      images: attachments.map((attachment) => attachment.uri),
    };
  }

  return {
    id: uuid.v4(),
    text: text,
    createdAt: new Date(),
    sender: sender,
    type: 'text',
  };
};

export const useChatContextStore = create<ChatContextState>()((set, get) => ({
  //State
  isGeminiWriting: false,
  messages: [],
  chatId: uuid.v4(), // Generate a new chat ID for each session

  //Actions
  addMessage: async (prompt: string, attachments: any[]) => {
    const userMessage = createMessage(prompt, 'user', attachments);
    const geminiMessage = createMessage('Generating Response...', 'gemini');
    const chatId = get().chatId;

    set((state) => ({
      // isGeminiWriting: true,
      messages: [geminiMessage, userMessage, ...state.messages],
    }));

    //* Gemini fetch basic without stream
    //const geminiResponseText = await GeminiActions.getBasicPrompt(text);

    //* Gemini fetch with stream
    GeminiActions.getChatStream(prompt, chatId, attachments, (text) => {
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === geminiMessage.id ? { ...msg, text } : msg
        ),
      }));
    });


  },
    clearChat: () => {
      set({ messages: [], chatId: uuid.v4() });
  },
}));

import uuid from 'react-native-uuid';
import { create } from 'zustand';

import * as GeminiActions from '@/actions/gemini';
import { Message } from '@/interfaces/chat.interfaces';

interface BasicPromptState {
  geminiWriting: boolean;
  messages: Message[];
  addMessage: (text: string) => void;
  setGeminiWriting: (isWriting: boolean) => void;
}

const createMessage = (text: string, sender: 'user' | 'gemini'): Message => {
  return {
    id: uuid.v4(),
    text: text,
    createdAt: new Date(),
    sender: sender,
    type: 'text',
  };
};

export const useBasicPromptStore = create<BasicPromptState>()((set) => ({
  // State
  geminiWriting: false,
  messages: [],

  // Actions
  addMessage: async (prompt: string) => {
    const userMessage = createMessage(prompt, 'user');
    const geminiMessage = createMessage('Generando respuesta...', 'gemini');

    set((state) => ({
      messages: [geminiMessage, userMessage, ...state.messages],
    }));

    // Petición a Gemini

    GeminiActions.getBasicPromptStream(prompt, (text) => {
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg.id === geminiMessage.id ? { ...msg, text } : msg
        ),
      }));
    });
    // const geminiMessage = createMessage(geminiResponseText, 'gemini');

    // set((state) => ({
    //   geminiWriting: false,
    //   messages: [geminiMessage, ...state.messages],
    // }));
  },
  setGeminiWriting: (isWriting: boolean) => {
    set({ geminiWriting: isWriting });
  },
}));

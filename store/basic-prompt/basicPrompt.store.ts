import uuid from 'react-native-uuid';
import { create } from 'zustand';

import * as GeminiActions from '@/actions/gemini';
import { Message } from '@/interfaces/chat.interfaces';

interface BasicPromptState {
  geminiWriting: boolean;
  messages: Message[];
  addMessage: (text: string, attachments: any[]) => void;
  setGeminiWriting: (isWriting: boolean) => void;
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

export const useBasicPromptStore = create<BasicPromptState>()((set) => ({
  // State
  geminiWriting: false,
  messages: [],

  // Actions
  addMessage: async (prompt: string, attachments: any[]) => {
    const userMessage = createMessage(prompt, 'user', attachments);
    const geminiMessage = createMessage('Generando respuesta...', 'gemini');

    set((state) => ({
      messages: [geminiMessage, userMessage, ...state.messages],
    }));

    // Petición a Gemini

    GeminiActions.getBasicPromptStream(prompt, attachments, (text) => {
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

import { Layout } from '@ui-kitten/components';

import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useChatContextStore } from '@/store/chat-context/chatContext.store';

// const messages: Message[] = [
//   {
//     id: uuid.v4(),
//     text: 'Hi Gemini! How are you?',
//     createdAt: new Date(),
//     sender: 'user',
//     type: 'text',
//   },
//   {
//     id: uuid.v4(),
//     text: "I'm good, thanks for asking.",
//     createdAt: new Date(),
//     sender: 'gemini',
//     type: 'text',
//   },
//   {
//     id: uuid.v4(),
//     images: ['https://picsum.photos/400/300', 'https://picsum.photos/400/300'],
//     createdAt: new Date(),
//     sender: 'gemini',
//     type: 'image',
//     text: 'What do you achieve with this image?',
//   },
// ];

const ChatHistoryScreen = () => {
  const messages = useChatContextStore((state) => state.messages);
  const isGeminiWriting = useChatContextStore((state) => state.isGeminiWriting);
  const { addMessage } = useChatContextStore();
  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages} isGeminiWriting={isGeminiWriting} />

      <CustomInputBox
        onSendMessage={(message, attachments) => {
          addMessage(message, attachments);
        }}
      />
    </Layout>
  );
};

export default ChatHistoryScreen;

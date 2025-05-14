import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useChatContextStore } from '@/store/chat-context/chatContext.store';
import { Layout } from '@ui-kitten/components';

const ChatHistoryScreen = () => {
  const messages = useChatContextStore((state) => state.messages);
  const isGeminiWriting = useChatContextStore((state) => state.geminiWriting);
  const { addMessage } = useChatContextStore();

  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages} isGeminiWriting={isGeminiWriting} />

      <CustomInputBox onSendMessage={addMessage} />
    </Layout>
  );
};

export default ChatHistoryScreen;

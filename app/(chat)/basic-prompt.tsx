import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useBasicPromptStore } from '@/store/basic-prompt/basicPrompt.store';
// import { Message } from '@/interfaces/chat.interfaces';
import { Layout } from '@ui-kitten/components';
// import uuid from 'react-native-uuid';

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
//   {
//     id: uuid.v4(),
//     text: 'Veniam est commodo sunt esse magna culpa dolor velit reprehenderit id magna. Pariatur sint adipisicing consequat sunt. Consectetur in quis ad ut eiusmod voluptate fugiat amet. Officia consequat ullamco aute fugiat culpa laborum in duis elit consequat aute magna consequat.',
//     createdAt: new Date(),
//     sender: 'user',
//     type: 'text',
//   },
// ];

const BasicPromptScreen = () => {
  const messages = useBasicPromptStore((state) => state.messages);
  const isGeminiWriting = useBasicPromptStore((state) => state.isGeminiWriting);
  const { addMessage } = useBasicPromptStore();

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

export default BasicPromptScreen;

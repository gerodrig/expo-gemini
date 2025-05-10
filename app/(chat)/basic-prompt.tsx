import { Layout } from '@ui-kitten/components';

import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useBasicPromptStore } from '@/store/basic-prompt/basicPrompt.store';

const BasicPromptScreen = () => {
  const messages = useBasicPromptStore((state) => state.messages);
  const { addMessage } = useBasicPromptStore();

  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages} />

      <CustomInputBox
        onSendMessage={(message) => {
          addMessage(message);
        }}
      />
    </Layout>
  );
};

export default BasicPromptScreen;

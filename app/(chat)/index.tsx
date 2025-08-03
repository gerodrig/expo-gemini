import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Divider, Layout, List, ListItem } from '@ui-kitten/components';
interface ListItemProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  link: Href;
}

const routes: ListItemProps[] = [
  {
    title: 'Basic Prompt',
    description: 'Single-response queries',
    icon: 'chatbubble-outline',
    link: '/basic-prompt',
  },
  {
    title: 'Conversation History',
    description: 'Maintain a history of conversations',
    icon: 'book-outline',
    link: '/chat-history',
  },
  {
    title: 'Generate Images',
    description: 'AI-powered image generation and editing',
    icon: 'image-outline',
    link: '/image-generation',
  },
];

const MenuItem = (props: ListItemProps) => {
  const { title, description, icon, link } = props;
  const iconColor = useThemeColor({}, 'icon');

  return (
    <ListItem
      title={title}
      description={description}
      accessoryLeft={<Ionicons name={icon} size={24} color={iconColor} />}
      accessoryRight={
        <Ionicons name="chevron-forward-outline" size={24} color={iconColor} />
      }
      onPress={() => router.push(link)}
    />
  );
};

const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <List
        data={routes}
        renderItem={({ item }) => <MenuItem {...item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Layout>
  );
};

export default HomeScreen;

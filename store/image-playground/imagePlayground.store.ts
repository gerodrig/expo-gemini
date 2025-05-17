import { FileType } from '@/actions/helpers/prompt-with-images';
import { ImagePickerAsset } from 'expo-image-picker';

interface ImagePlaygroundState {
  // State
  isGenerating: boolean;
  images: string[];
  history: string[];

  previousPrompt: string;
  previousImages: (FileType | ImagePickerAsset)[];

  selectedStyle: string;

  // Actions
  generateImage: (
    prompt: string,
    images: (FileType | ImagePickerAsset)[]
  ) => Promise<void>;

  generateNextImage: () => Promise<void>;
  setSelectedStyle: (style: string) => void;
}

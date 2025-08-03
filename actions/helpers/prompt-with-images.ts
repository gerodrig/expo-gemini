import { ImagePickerAsset } from 'expo-image-picker';
import geminiApi from '../gemini.api';

export interface FileType {
  uri: string;
  fileName?: string;
  type?: string;
}

export interface JsonBody {
  [key: string]: any;
}

export const promptWithFiles = async<T> (
  endpoint: string,
  body: JsonBody,
  files: (FileType | ImagePickerAsset)[]
): Promise<T> => {
  try {
    const formData = new FormData();

    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // formData.append('prompt', prompt);

    files.forEach((file) => {
      formData.append('files', {
        uri: file.uri,
        name: file.fileName ?? 'image.jpg',
        type: file.type ?? 'image/jpeg',
      } as unknown as Blob);
    });

    const response = await geminiApi.post<T>(endpoint, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

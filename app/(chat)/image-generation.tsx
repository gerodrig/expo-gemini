import CustomInputBox from '@/components/chat/CustomInputBox';
import PreviousGenerationsGrid from '@/components/image-generation/PreviousGenerationsGrid';
import Slideshow from '@/components/image-generation/Slideshow';
import StyleSelector from '@/components/image-generation/StyleSelector';
import { Layout } from '@ui-kitten/components';
const placeHolderImages: string[] = [];

const ImageGenerationScreen = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <Slideshow
        images={placeHolderImages}
        isGenerating
        onLastImage={() => {
          console.log('Última imagen generada');
        }}
      />
      {/* Selector de estilos */}
      <StyleSelector onSelectStyle={() => {}} />

      <PreviousGenerationsGrid images={placeHolderImages} />

      <CustomInputBox onSendMessage={() => {}} />
    </Layout>
  );
};

export default ImageGenerationScreen;

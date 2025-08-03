import CustomInputBox from '@/components/chat/CustomInputBox';
import NoImages from '@/components/image-generation/NoImages';
import PreviousGenerationsGrid from '@/components/image-generation/PreviousGenerationsGrid';
import Slideshow from '@/components/image-generation/Slideshow';
import StyleSelector from '@/components/image-generation/StyleSelector';
import { usePlaygroundStore } from '@/store/image-playground/imagePlaygroundStore';
import { Layout, Spinner } from '@ui-kitten/components';
// const placeHolderImages = [
//   'https://picsum.photos/id/10/200/300',
//   'https://picsum.photos/id/20/200/300',
//   'https://picsum.photos/id/30/200/300',
//   'https://picsum.photos/id/40/200/300',
//   'https://picsum.photos/id/50/200/300',
//   'https://picsum.photos/id/60/200/300',
//   'https://picsum.photos/id/70/200/300',
//   'https://picsum.photos/id/80/200/300',
//   'https://picsum.photos/id/90/200/300',
//   'https://picsum.photos/id/100/200/300',
//   'https://picsum.photos/id/110/200/300',
//   'https://picsum.photos/id/120/200/300',
//   'https://picsum.photos/id/130/200/300',
//   'https://picsum.photos/id/140/200/300',
//   'https://picsum.photos/id/150/200/300',
// ];

const ImageGenerationScreen = () => {
  const generatedImages = usePlaygroundStore((state) => state.images);
  const imageHistory = usePlaygroundStore((state) => state.history);
  const selectedStyle = usePlaygroundStore((state) => state.selectedStyle);
  const isGenerating = usePlaygroundStore((state) => state.isGenerating);

  const selectedImage = usePlaygroundStore((state) => state.selectedImage);

  //? Actions
  const {
    setSelectedStyle,
    generateImage,
    generateNextImage,
    setSelectedImage,
  } = usePlaygroundStore();

  return (
    <Layout style={{ flex: 1 }}>
      {generatedImages.length === 0 && !isGenerating && <NoImages />}

      {generatedImages.length === 9 && isGenerating && (
        <Layout
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
          }}
        >
          <Spinner size="large" />
        </Layout>
      )}
      {generatedImages.length > 0 && (
        <Slideshow
          images={generatedImages}
          isGenerating={isGenerating}
          onLastImage={generateNextImage}
        />
      )}
      {/* Style selector */}
      <StyleSelector
        selectedStyle={selectedStyle}
        onSelectStyle={setSelectedStyle}
      />

      <PreviousGenerationsGrid
        selectedImage={selectedImage}
        onSelectedImage={setSelectedImage}
        images={imageHistory}
      />

      <CustomInputBox onSendMessage={generateImage} />
    </Layout>
  );
};

export default ImageGenerationScreen;

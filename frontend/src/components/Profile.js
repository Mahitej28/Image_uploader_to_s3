import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Posts from './Posts';
import imageuploader from '../assets/imagesupload.png'

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6}>
        <Image
          borderRadius="full"
          boxSize="80px"
          src={imageuploader}
          alt="Profile"
        />
        <Text>Image Uploader</Text>
        <Text fontSize="lg" color="gray.400">
          Upload your Images here!!
        </Text>
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;

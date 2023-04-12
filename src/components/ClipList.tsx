import { Flex , Heading, Image, Text, Hide, HStack} from "@chakra-ui/react";

export const ClipList = () => {
    return (
        <>
            <Flex w={'80%'} flexDirection={'column'} ml={5} mt={12} justify={'flex-end'} backgroundColor={'gray.900'} p={2}>
            <HStack>
                <Image boxSize={'50px'} src={'https://static-cdn.jtvnw.net/jtv_user_pictures/95d95224-92b8-4b46-bb9f-dad79bba1f71-profile_image-50x50.png'}></Image>
                <Text>VALORANT_ph</Text>
            </HStack>
            <Flex w='full' flexDirection={['column', 'column' , 'row' , 'row' , 'row']}  >
                <Image src={'https://clips-media-assets2.twitch.tv/AfR1v3qWNJSjkidwKZGOJg/AT-cm%7CAfR1v3qWNJSjkidwKZGOJg-preview-260x147.jpg'} w={'150px'} h={'80px'}></Image>
                <Flex w="inherit" flexDirection={'column'} justifyContent={'center'} m={['0', '0' , '0' , '3', '3']} >
                    <Heading fontSize={'2xl'}>invy insane sheriff 4k</Heading>
                    <Text>2023-04-05 12:17:01</Text>
                </Flex>
                <Hide below='md'>
                    <Image boxSize={'80px'} src={'https://static-cdn.jtvnw.net/ttv-boxart/516575-52x72.jpg'}></Image>
                </Hide>
            </Flex>
            </Flex>
        </>
    );
}
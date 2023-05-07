import { Flex, HStack, IconButton, Image, Link } from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <HStack spacing={"6"} position='absolute' bottom='5'>
            <Link href='https://github.com/jaydeepdey03' target='_blank' >
                <IconButton
                    aria-label="Github"
                    icon={<FaGithub />}
                    rounded={"full"}
                    size='md'
                    m='1'
                />
            </Link>
            <Link href='https://www.linkedin.com/in/jaydeep-dey03/' target='_blank'>
                <IconButton
                    aria-label="Linkedin"
                    icon={<Image height={"6"} width={"6"} src="/linkedin.svg" alt="linkedin" />}
                    rounded={"full"}
                    size='md'
                    m='1'
                />
            </Link>
            <Link href='https://instagram.com/jaydeep_dey03' target='_blank'>
                <IconButton
                    aria-label="Instagram"
                    icon={<Image height={"6"} width={"6"} src="/instagram.svg" alt="instagram" />}
                    rounded={"full"}
                    size='md'
                    m='1'
                />
            </Link>
            <Link href='https://twitter.com/jaydeep_dey03' target='_blank'>
                <IconButton
                    aria-label="Twitter"
                    icon={<Image height={"6"} width={"6"} src="/twitter.svg" alt="twitter" />}
                    rounded={"full"}
                    size='md'
                    m='1'
                />
            </Link>
        </HStack>
    )
}

export default Footer

import { Avatar, Badge, Box } from '@chakra-ui/react';
import { Text, Flex } from '@chakra-ui/layout';
import React from 'react';
import { Donation } from "../../types";
import { formatDate}  from "../../utils/formatDate";

interface Props {
    donation: Donation;
    colorMode: string;
}

export const LeaderboardItem = ({ donation, colorMode }: Props) => {
    const regExpDigits = /\B(?=(\d{3})+(?!\d))/g;

    return (
        <Flex
            boxShadow="md" p={3}
            bg={ colorMode === "light" ? "white" : "dark" }
            borderRadius="lg"
            maxWidth="xl"
            w="100%"
            border={ colorMode === "light" ? "" : "1px" }
        >
            <Avatar size="lg"/>
            <Box flex="1" ml={4}>
                <Flex justifyContent="space-between" h="100%">
                    <Flex flexDirection="column" justifyContent="center" textAlign="left">
                        <Text fontWeight="bold" color="blue.500" fontSize="sm"
                              textTransform="uppercase">{donation.team}</Text>
                        <Text fontWeight="bold">{donation.displayName}</Text>
                        <Text fontSize="sm">{donation.message}</Text>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="space-around" textAlign="right">
                        <div>
                            <Badge
                                colorScheme="blue"
                                borderRadius="full"
                                textTransform="lowercase"
                                py={1}
                                px={5}
                                as="div">
                                {donation.count.toString().replace(regExpDigits, ",")} $
                            </Badge>
                        </div>
                        <Text fontSize="xs">{formatDate(donation.createdAt)}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
};
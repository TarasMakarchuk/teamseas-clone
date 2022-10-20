import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { LeaderboardItem } from "./LeaderboardItem";

interface Props {}

export const Leaderboard = (props: Props) => {
    return (
        <Box w="100%">
            <VStack spacing={4}>
                <LeaderboardItem donation={{
                    displayName: 'Mr Beast',
                    count: 10000,
                    createdAt: '2022-10-20T16:21:45.954Z',
                    team: 'team',
                    message: 'some message',
                }}/>
                <LeaderboardItem donation={{
                    displayName: 'Mr Beast',
                    count: 10000,
                    createdAt: '2022-10-20T16:21:45.954Z',
                    // team: 'team',
                    // message: 'some message',
                }}/>
            </VStack>
        </Box>
    )
};
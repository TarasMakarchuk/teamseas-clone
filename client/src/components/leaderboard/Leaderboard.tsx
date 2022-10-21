import { Box, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LeaderboardItem } from "./LeaderboardItem";
import {Donation} from "../../types";
import {useQuery} from "urql";

const DonationsQuery = `
  query Query($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      count
      id
      displayName
      createdAt
      message
      team
    }  
  }
`;

type DonationsQueryRes = {
    donations: Donation[];
};

interface Props {}

export const Leaderboard = (props: Props) => {
    const [field, setOrderByField] = useState('createdAt');

    const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
        query: DonationsQuery,
        variables: {
            orderBy: {
                field,
                direction: 'desc',
            },
        },
    });

    if (error) return <p>Oh no... { error.message }</p>;
    if (fetching || !data) return <p>Loading...</p>;

    return (
        <Box w="100%">
            <VStack spacing={4}>
                {data.donations.map(donation =>
                    <LeaderboardItem donation={donation}/>)}
            </VStack>
        </Box>
    )
};
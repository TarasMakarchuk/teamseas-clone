import {Button, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
    next: (values: any) => void;
    previous: () => void;
}

export const DonationDetails = ({ next, previous }: Props) => {
    return (
        <div>
            <VStack>
                <Button
                    width="full"
                    colorScheme="orange"
                    size="lg"
                    borderRadius="full"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    width="full"
                    size="lg"
                    borderRadius="full"
                    variant="ghost"
                    fontSize="sm"
                    color="gray.700"
                    onClick={previous}
                >
                    Previous
                </Button>
            </VStack>
        </div>
    );
};

export default DonationDetails;
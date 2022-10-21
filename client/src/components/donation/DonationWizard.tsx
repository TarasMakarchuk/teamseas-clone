import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CountSelection } from "./CountSelection";

interface Props {}

export const DonationWizard = (props: Props) => {
    const [step, setStep] = useState(0);
    const next = (values: any = {}) => setStep(step + 1);
    const previous = () => setStep(step - 1);
    const pages = [
        <CountSelection next={next}/>,
        <div>Page 2</div>
    ];

    return <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm" >
        { pages[step] }

        <VStack spacing={2}>
            <Button
                width="full"
                colorScheme="orange"
                size="lg"
                borderRadius="full"
                onClick={next}
            >
                Next
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
    </Box>
};

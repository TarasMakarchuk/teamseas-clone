import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {}

export const DonationWizard = (props: Props) => {
    const [step, setStep] = useState(1);
    const next = () => setStep(step + 1);
    const previous = () => setStep(step - 1);
    const pages = [
        <div>Page 1</div>,
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

import { Button, NumberInput, NumberInputField, SimpleGrid, useRadioGroup, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RadioCard } from './RadioCard';

interface Props {
    next: (values: any) => void;
}

const options = [5, 20, 50, 100];

export const CountSelection = ({ next }: Props) => {
    const [pounds, setPounds] = useState(20);
    const [customAmount, setCustomAmount] = useState(
        '' + (options.includes(pounds) ? '' : pounds)
    );

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'pounds',
        value: pounds,
        onChange: (nextValue) => {
            setCustomAmount('');
            setPounds(parseInt(nextValue));
        }
    });

    const group = getRootProps();

    const nextStep = () => {
        next({ count: pounds });
    };

    return (
        <VStack spacing={4} align="stretch">
            <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
                { options.map(value => {
                    const radio = getRadioProps({ value, enterKeyHint: '' });
                    return (
                        <RadioCard key={value} {...radio}>
                            { value } pounds
                        </RadioCard>
                    );
                }) }
            </SimpleGrid>
            <NumberInput onFocus={() => setPounds(0)} onChange={value => {
                setPounds(parseInt(value));
                setCustomAmount(value);
            }} value={customAmount}>
                <NumberInputField placeholder="Other amount" />
            </NumberInput>
            <hr />
            <Button
                width="full"
                colorScheme="orange"
                size="lg"
                borderRadius="full"
                onClick={nextStep}
            >
                Next
            </Button>
        </VStack>
    );
};

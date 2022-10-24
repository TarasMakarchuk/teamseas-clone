import { Box, Button, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CountSelection } from "../CounterSelection/CountSelection";
import { DonationDetails } from "./donationDetails";
import { useMutation } from "urql";

const CreateDonation = `
    mutation Mutation($createDonationInput: CreateDonationInput!) {
      createDonation(createDonationInput: $createDonationInput) {
        id
        displayName
        count
        createdAt
      }
    }
`;

interface Props {}

export const DonationWizard = (props: Props) => {
    const { colorMode } = useColorMode();
    const [step, setStep] = useState(0);
    const [donationDetails, setDonationDetails] = useState({
        count: 20,
    });
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [donationResult, createDonation] = useMutation(CreateDonation);

    const first = () => {
        setShowConfirmation(false);
        setStep(0)
    };

    const next = async (values: any = {}) => {
        const mergedDetails = { ...donationDetails, ...values };

        if (step === pages.length - 1) {
            await submitDonation(mergedDetails);
        } else {
            setStep(step + 1);
            setDonationDetails(mergedDetails);
        }
    };

    const previous = () => setStep(step - 1);

    const submitDonation = async (values: any) => {
        await createDonation({ createDonationInput: values });
        setShowConfirmation(true);
    };

    const pages = [
        <CountSelection next={next} initialCount={donationDetails.count} />,
        <DonationDetails next={next} previous={previous} colorMode={colorMode}/>
    ];

    return <Box
        boxShadow="xl"
        p={8}
        bg={ colorMode === "light" ? "white" : "dark" }
        border={ colorMode === "light" ? "" : "1px" }
        borderRadius="xl"
        minW="sm"
    >

        { showConfirmation ? (
            <div>
                Thank you { donationResult?.data.createDonation?.displayName }
                <br />
                for your donation of $ { donationResult?.data.createDonation?.count }!!
                <Box my="25px">
                    <Button
                        width="full"
                        colorScheme="orange"
                        size="lg"
                        borderRadius="full"
                        onClick={first}
                    >
                        Submit a new donation
                    </Button>
                </Box>
            </div>
            ) : (
            pages[step]
        )}
    </Box>
};

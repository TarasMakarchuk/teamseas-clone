import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CountSelection } from "./CountSelection";
import { DonationDetails } from "./DonationDetails";
import { useMutation } from "urql";

const CreateDonation = `
    mutation Mutation($createDonationInput: CreateDonationInput!) {
      createDonation(createDonationInput: $createDonationInput) {
        id
        count
        createdAt
      }
    }
`;

interface Props {}

export const DonationWizard = (props: Props) => {
    const [step, setStep] = useState(0);
    const [donationDetails, setDonationDetails] = useState({
        count: 20,
    });
    const [donationResult, createDonation] = useMutation(CreateDonation);

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
    };

    const pages = [
        <CountSelection next={next} initialCount={donationDetails.count} />,
        <DonationDetails next={next} previous={previous}/>
    ];

    return <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm" >
        { pages[step] }
    </Box>
};

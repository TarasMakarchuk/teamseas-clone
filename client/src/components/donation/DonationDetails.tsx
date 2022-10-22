import { Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Form, Formik} from "formik";
import { InputField } from '../form/InputField';
import { TextareaField } from '../form/TextAreaField';
import * as yup from 'yup';

const detailsSchema = yup.object().shape({
    displayName: yup.string().required('Please enter a display name'),
    email: yup.string().email('Please enter a valid email').required('Please enter an email'),
    mobile: yup.string().nullable(),
    team: yup.string().nullable(),
    message: yup.string().nullable(),
});

interface Props {
    next: (values: any) => void;
    previous: () => void;
    colorMode: string;
}

export const DonationDetails = ({ next, previous, colorMode }: Props) => {
    const submit = (values: any) => {
        next(values);
    };

    return (
        <Formik initialValues={{
            displayName: '',
            email: '',
            mobile: '',
            team: '',
            message: '',
        }}
            onSubmit={submit}
            validationSchema={detailsSchema}
        >{(formikProps) => (
            <Form>
                <VStack spacing={4} align="stretch">
                    <Heading as="h3" size="md">
                        Details
                    </Heading>
                    <InputField
                        label="Display Name"
                        name="displayName"
                        placeholder="Display name"
                    />
                    <InputField
                        label="Email Address"
                        name="email"
                        placeholder="Email"
                    />
                    <InputField
                        label="Mobile Phone"
                        name="mobile"
                        placeholder="Mobile Phone"
                    />
                    <InputField
                        label="Team"
                        name="team"
                        placeholder="Team"
                    />
                    <TextareaField
                        label="Message"
                        name="message"
                        placeholder="My #TeamSeas is..."
                    />
                    <hr/>
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
                            color= { colorMode === "light" ? "gray.700" : "white.700" }
                            onClick={previous}
                        >
                            Previous
                        </Button>
                    </VStack>
                </VStack>
            </Form>
        )}
        </Formik>
    );
};

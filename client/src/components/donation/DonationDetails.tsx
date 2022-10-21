import { Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Form, Formik} from "formik";
import { InputField } from '../form/InputField';
import { TextareaField } from '../form/TextAreaField';

interface Props {
    next: (values: any) => void;
    previous: () => void;
}

export const DonationDetails = ({ next, previous }: Props) => {
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
                            color="gray.700"
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

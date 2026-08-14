import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  company_name: string;
  contact_person: string;
  email: string;
  phone?: string;
  course: string;
  training_mode?: string;
  participants?: string;
  message?: string;
}

export default function InquiryNotification({
  company_name,
  contact_person,
  email,
  phone,
  course,
  training_mode,
  participants,
  message,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>
        New Training Inquiry Received
      </Preview>

      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f6f6f6",
          padding: "30px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
          <Heading>
            New Training Inquiry
          </Heading>

          <Section>

            <Text>
              <strong>Company:</strong> {company_name}
            </Text>

            <Text>
              <strong>Contact Person:</strong> {contact_person}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone || "-"}
            </Text>

            <Text>
              <strong>Course:</strong> {course}
            </Text>

            <Text>
              <strong>Training Mode:</strong> {training_mode || "-"}
            </Text>

            <Text>
              <strong>Participants:</strong> {participants || "-"}
            </Text>

            <Text>
              <strong>Requirement:</strong>
            </Text>

            <Text>
              {message || "-"}
            </Text>

          </Section>

        </Container>
      </Body>
    </Html>
  );
}
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
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  company,
  subject,
  message,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>
        New Contact Message Received
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
            New Contact Message
          </Heading>

          <Section>

            <Text>
              <strong>Name:</strong> {name}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone || "-"}
            </Text>

            <Text>
              <strong>Company:</strong> {company || "-"}
            </Text>

            <Text>
              <strong>Subject:</strong> {subject}
            </Text>

            <Text>
              <strong>Message:</strong>
            </Text>

            <Text>
              {message}
            </Text>

          </Section>

        </Container>
      </Body>
    </Html>
  );
}

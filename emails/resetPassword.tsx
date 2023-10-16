import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const StripeWelcomeEmail = ({ to, url }: { to: string, url: string }) => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>

          <Text style={paragraph}>
            Ha realizado una solicitud para restablecer su contraseña.
            Puede restablecer su contraseña a través del siguiente enlace
          </Text>

          <Button
            pX={10}
            pY={0}
            style={button}
            href={url}
          >
            <Text style={text}>Crear una contraseña ahora</Text>
          </Button>
          <Text style={paragraph}>
            Si no se le redirige, copie la siguiente URL y péguela en la barra de direcciones de su navegador web:
          </Text>
          <Text style={paragraph}>

            <Link
              style={anchor}
              href={url}
            >
              {url}
            </Link>

          </Text>
          <Text style={paragraph}>
            Tenga en cuenta que este enlace solo es válido durante 5 minutos por razones de seguridad.
            Después de eso, deberá solicitar un enlace para restablecer su contraseña nuevamente.
          </Text>
          <Text style={paragraph}>
            Si no realizó la solicitud, simplemente ignore este correo electrónico. Su contraseña será conservada.

          </Text>
          <Container style={footerContainer}>
            <Text style={footer}>
              Tu equipo MediaMarkt
            </Text>
            <Link href="" style={link}>
              www.mediamarkt.es
            </Link>{' '}
          </Container>
        </Section>
      </Container>
    </Body>
  </Html >
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const text = {
  marginLeft: "20px"
};

const anchor = {
  color: 'blue',
};

const button = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#a51716',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  textAlign: 'left' as const,
  width: '100%',
  height: '100%',
};




const footerContainer = {
  display: "inline-block",
}

const link = {
  color: 'blue',
  textDecoration: 'underline',
};

const footer = {
  color: '#000',
  fontSize: '12px',
  letterSpacing: '0',
  lineHeight: '23px',
  marginBottom: '0',
  marginTop: '20px',
  textAlign: 'left' as const,
};
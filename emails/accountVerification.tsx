import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Row,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface AccountVerificationProps {
    otpCode: string;
}


export const AccountVerification: React.FC<AccountVerificationProps> = ({
    otpCode = "123456"
}) => (
    <Html>
        <Head />
        <Body style={main}>
            <Container style={container}>
                <Text style={tertiary}>Verifica tu cuenta de MediaMarkt</Text>
                <Heading style={secondary}>
                    Añade el siguiente código:
                </Heading>
                <Container style={alignAll}>

                    {Array.from(otpCode).map((val, i) => (
                        <Row key={i} style={codeContainer}>
                            <Text style={code}>{val.trim()}</Text>
                        </Row>
                    ))}
                </Container>
                <Text style={paragraph}>Por razones de seguridad no compartas este código.</Text>
                <Text style={paragraph}>Cuando añadas tu código ya habrás completado tu registro.</Text>
                <Text>
                    Si no has sido tu, ignora este correo.
                </Text>
                <Container style={footerContainer}>
                    <Text style={footer}>
                        Tu equipo MediaMarkt
                    </Text>
                    <Link href="" style={link}>
                        www.mediamarkt.es
                    </Link>{' '}
                </Container>
            </Container>

        </Body>
    </Html>
);

export default AccountVerification


const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial,SourceSansPro-Regular',
};

const container = {
    // backgroundColor: '#ffffff',
    // border: '1px solid #eee',
    // borderRadius: '5px',
    // boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    // marginTop: '20px',
    // width: '360px',
    // margin: '0 auto',
    // padding: '68px 0 130px',
};

const alignAll = {
    display: "inline-block",
    marginBottom: "25px",
    zIndex: 0
}

const tertiary = {
    color: "#000",
    fontSize: '28px',
    fontWeight: 700,
    height: '16px',
    letterSpacing: '0',
    textAlign: 'left' as const,
};

const secondary = {
    color: '#000',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: "normal",
    // lineHeight: '16px',
    // marginBottom: '0',
    // marginTop: '0',
    textAlign: 'left' as const,
};

const codeContainer = {
    display: 'inline-block',
    background: 'rgba(0,0,0,.05)',
    borderRadius: '4px',
    marginRight: "15px",
    horizontalAlign: 'middle',
    width: '48px',
    textAlign: 'center' as const,
};

const code = {
    zIndex: 9000,
    display: 'inline-block',
    color: '#000',
    fontSize: '32px',
    fontWeight: 700,
    paddingRigth: '14px',
    paddingLeft: '14px',
    paddingtop: '0',
    paddingBottom: '0',
};

const paragraph = {
    color: '#444',
    fontSize: '15px',
    letterSpacing: '0',
    lineHeight: '23px',
    // padding: '0 40px',
    margin: '0',
    textAlign: 'left' as const,
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




import { LatestInvoice } from '@/lib/definitions';
import {
    ArrowPathIcon,
    Container,
    FlexContainer,
    InvoiceDetails,
    InvoiceEmail,
    InvoiceItem,
    InvoiceList,
    InvoiceName,
    InvoicesContainer,
    InvoiceTextContainer,
    InvoiceUserPhoto,
    Title,
    UpdatedText
} from './styles';

export default function LatestInvoices({ latestInvoices }: { latestInvoices: LatestInvoice[] }) {
    return (
        <Container>
            <Title>Latest Invoices</Title>
            <InvoicesContainer>
                <InvoiceList>
                    {latestInvoices.map((invoice, i) => (
                        <InvoiceItem key={invoice.id} $isFirst={i === 0}>
                            <InvoiceDetails>
                                <InvoiceUserPhoto
                                    src={invoice.image_url}
                                    alt={`${invoice.name}'s profile picture`}
                                    className="mr-4 rounded-full"
                                    width={32}
                                    height={32}
                                />
                                <InvoiceTextContainer>
                                    <InvoiceName>{invoice.name}</InvoiceName>
                                    <InvoiceEmail>{invoice.email}</InvoiceEmail>
                                </InvoiceTextContainer>
                            </InvoiceDetails>
                        </InvoiceItem>
                    ))}
                </InvoiceList>

                <FlexContainer>
                    <ArrowPathIcon />
                    <UpdatedText>Updated just now</UpdatedText>
                </FlexContainer>
            </InvoicesContainer>
        </Container>
    );
}

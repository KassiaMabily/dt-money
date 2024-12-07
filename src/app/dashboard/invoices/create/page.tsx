import Form from '@/components/dashboard/invoices/create-form';
import {fetchCustomers} from '@/lib/data';
import Breadcrumbs from "@/components/dashboard/invoices/breadcumbs";

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <section>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {
                        label: 'Create Invoice',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <Form customers={customers}/>
        </section>
    );
}
import * as React from "react";
import { AutocompleteInput, Create, Datagrid, DateField, DateTimeInput, Edit, EditButton, FunctionField, List, NumberInput, ReferenceField, ReferenceInput, SimpleForm, TextField, TextInput, useNotify, useRedirect, useRefresh } from 'react-admin';
import { BulkActionButtons, DefaultToolbarWithoutDeleteButton } from "./utilComponents";



const checkoutFilters = [
    <ReferenceInput source="book.id" label="Book" reference="books" alwaysOn allowEmpty filterToQuery={searchText => ({ name: searchText })}>
        <AutocompleteInput source="name" resettable />
    </ReferenceInput>,
    <ReferenceInput source="visitor.id" label="Visitors" reference="visitors" alwaysOn allowEmpty filterToQuery={searchText => ({ name: searchText })}>
        <AutocompleteInput optionText={(visitor) => `${visitor.firstName || ''} ${visitor.lastName || ''}`} resettable />
    </ReferenceInput>,
];

export const CheckoutList = props => (
    <List {...props} filters={checkoutFilters} bulkActionButtons={<BulkActionButtons />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField link="show" label="Book Title" source="book.id" reference="books">
                <TextField source="name" />
            </ReferenceField>

            <ReferenceField 
                label="Visitor" 
                link={(record, reference) => `/checkouts?filter=` + encodeURI(JSON.stringify({ visitor: { id: record.visitor.id}} ))} 
                source="visitor.id" reference="visitors">
                <FunctionField
                    label="Visitor Name"
                    render={visitor => `${visitor.firstName} ${visitor.lastName}`}
                />
            </ReferenceField>

            <DateField source="checkoutDate" label="Checkout Date" showTime />
            <DateField source="dueDate" label="Due Date" showTime />
            <DateField source="returnDate" label="Return Date" showTime />
            <EditButton />
        </Datagrid>
    </List>
);

export const CheckoutEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Updated successfully`)
        redirect('/checkouts');
        refresh();
    };
    return (
    <Edit onSuccess={onSuccess} {...props}>
        <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
            <TextInput disabled source="id" />

            <ReferenceInput label="Visitor Name" source="visitor.id" reference="visitors" fullWidth filterToQuery={searchText => ({ name: searchText })}>
                <AutocompleteInput optionText={(visitor) => `${visitor.firstName || ''} ${visitor.lastName || ''}`} resettable />
            </ReferenceInput>
            <NumberInput disabled source="visitor.id" label="Visitor Id" />

            <ReferenceInput label="Book Title" source="book.id" reference="books" fullWidth filterToQuery={searchText => ({ name: searchText })}>
                <AutocompleteInput source="name" resettable />
            </ReferenceInput>
            <NumberInput disabled source="book.id" label="Book Id" />

            <DateField showTime source="checkoutDate" />
            <DateField showTime source="dueDate" />
            <DateTimeInput source="returnDate" initialValue={new Date()} />
        </SimpleForm>
    </Edit>
)};

export const CheckoutCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Checkout successfully`)
        redirect('/checkouts');
        refresh();
    };

    return (
        <Create onSuccess={onSuccess} {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">

                <ReferenceInput label="Visitor Name" source="visitor.id" reference="visitors" fullWidth filterToQuery={searchText => ({ name: searchText })}>
                    <AutocompleteInput optionText={(visitor) => `${visitor.firstName || ''} ${visitor.lastName || ''}`} resettable />
                </ReferenceInput>
                <NumberInput disabled source="visitor.id" label="Visitor Id" />

                <ReferenceInput label="Book Title" source="book.id" reference="books" fullWidth filterToQuery={searchText => ({ name: searchText })}>
                    <AutocompleteInput source="name" resettable />
                </ReferenceInput>
                <NumberInput disabled source="book.id" label="Book Id" />

                <DateTimeInput showTime source="checkoutDate" label="Checkout Date" initialValue={new Date()} />
                <DateTimeInput showTime source="dueDate" label="Due Date" initialValue={assignDueDate(new Date(), 30)} />
            </SimpleForm>
        </Create>
    )
};

const assignDueDate = function (date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}
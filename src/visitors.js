import * as React from "react";
import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, useNotify, useRedirect, useRefresh } from 'react-admin';
import { BulkActionButtons, DefaultToolbarWithoutDeleteButton } from "./utilComponents";




export const VisitorList = props => (
    <List {...props} bulkActionButtons={<BulkActionButtons />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EditButton />
        </Datagrid>
    </List>
);

export const VisitorEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Updated successfully`)
        redirect('/visitors');
        refresh();
    };
    return (
    <Edit onSuccess={onSuccess} {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
        </SimpleForm>
    </Edit>
)};

export const VisitorCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Created successfully`)
        redirect('/visitors');
        refresh();
    };
    return (
    <Create onSuccess={onSuccess} {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
            <TextInput source="firstName" />
            <TextInput source="lastName" />
        </SimpleForm>
    </Create>
)};
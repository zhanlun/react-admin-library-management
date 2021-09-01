import * as React from "react";
import {
    Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, useNotify, useRedirect, useRefresh,
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices,
} from 'react-admin';
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

const validateName = [
    required(),
    minLength(1),
    maxLength(50),
    (value, allValues) => {
        if (!(value + '').trim()) {
            return 'Required';
        }
        return undefined;
    }];

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
        <Edit onSuccess={onSuccess} mutationMode="pessimistic" {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
                <TextInput disabled source="id" />
                <TextInput source="firstName" validate={validateName} />
                <TextInput source="lastName" validate={validateName} />
            </SimpleForm>
        </Edit>
    )
};

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
                <TextInput source="firstName" validate={validateName} />
                <TextInput source="lastName" validate={validateName} />
            </SimpleForm>
        </Create>
    )
};
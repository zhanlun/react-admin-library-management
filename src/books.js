import * as React from "react";
import { ChipField, Create, Datagrid, Edit, EditButton, ImageField, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';
import { BulkActionButtons, DefaultToolbarWithoutDeleteButton } from "./utilComponents";


const bookFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <ReferenceInput source="subject.id" label="Subject" reference="subjects" alwaysOn allowEmpty>
        <SelectInput optionText="name" resettable />
    </ReferenceInput>,
];

export const BookList = props => {
    return (
        <List {...props} filters={bookFilters} bulkActionButtons={<BulkActionButtons />} perPage={5}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <ReferenceField
                    label="Subject"
                    link={(record, reference) => `/books?filter=` + encodeURI(JSON.stringify({ subject: { id: record.subject.id } }))}
                    source="subject.id" reference="subjects">
                    <ChipField source="name" />
                </ReferenceField>
                <TextField source="publisher" />
                <TextField source="publishedYear" />
                <TextField source="contributors" />
                <ImageField source="coverImagePath" />
                <NumberField source="numberOfCopy" />
                <EditButton />
            </Datagrid>
        </List>
    )
};

export const BookShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" label="Title" />
            <ImageField source="coverImagePath" label="Cover Image" />
            <ReferenceField label="Subject" source="subject.id"
                link={(record, reference) => `/books?filter=` + encodeURI(JSON.stringify({ subject: { id: record.subject.id } }))}
                reference="subjects">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="publisher" />
            <NumberField source="publishedYear" label="Published Year" />
            <TextField source="contributors" />
            <TextField source="summary" />
            <NumberField source="numberOfCopy" label="Number of Copies" />
        </SimpleShowLayout>
    </Show>
);

export const BookEdit = props => {
    return (
        <Edit {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
                <TextInput disabled source="id" />
                <TextInput source="name" label="Title" fullWidth />
                <ReferenceInput label="Subject" source="subject.id" reference="subjects" >
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="publisher" />
                <NumberInput source="publishedYear" min={0} max={9999} />
                <TextInput source="contributors" fullWidth />
                <TextInput multiline source="summary" fullWidth />
                <TextInput source="coverImagePath" label="Cover Image Link" fullWidth />
                <NumberInput source="numberOfCopy" min={0} />
            </SimpleForm>
        </Edit>
    )
};

export const BookCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
                <TextInput source="name" label="Title" fullWidth />
                <ReferenceInput label="Subject" source="subject.id" reference="subjects" >
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="publisher" />
                <NumberInput source="publishedYear" min={0} max={9999} />
                <TextInput source="contributors" fullWidth />
                <TextInput multiline source="summary" fullWidth />
                <TextInput source="coverImagePath" label="Cover Image Link" fullWidth />
                <NumberInput source="numberOfCopy" min={0} />
            </SimpleForm>
        </Create>
    )
};
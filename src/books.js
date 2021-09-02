import * as React from "react";
import {
    ChipField, Create, Datagrid, Edit, EditButton, FunctionField, ImageField, List, maxLength, maxValue, minLength, minValue, number, NumberField, NumberInput, ReferenceField, ReferenceInput, required, SelectInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput
} from 'react-admin';
import { DefaultToolbarWithoutDeleteButton } from "./utilComponents";


const bookFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <ReferenceInput source="subject.id" label="Subject" reference="subjects" alwaysOn allowEmpty>
        <SelectInput optionText="name" resettable />
    </ReferenceInput>,
];

export const BookList = props => {
    return (
        <List {...props} filters={bookFilters} bulkActionButtons={false} perPage={5}>
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
                <FunctionField  label="Number of Copies"
                    render={book=> `${book.availableCopy} / ${book.numberOfCopy}`}
                    />
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

const notEmptyStringValidator = (value, allValues) => {
    if (!(value + '').trim()) {
        return 'Required';
    }
    return undefined;
};

const validateTitle = [required(), minLength(1), maxLength(255), notEmptyStringValidator];
const validateString = [required(), minLength(1), maxLength(1000), notEmptyStringValidator];
const validateSummary = [required(), minLength(1), maxLength(100000), notEmptyStringValidator];
const validateId = [required(), notEmptyStringValidator()]
const validateNumber = [required(), number(), minValue(0), maxValue(9999)];

export const BookEdit = props => {
    return (
        <Edit {...props} mutationMode="pessimistic" >
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
                <TextInput disabled source="id" />
                <TextInput source="name" label="Title" fullWidth validate={validateTitle} />
                <ReferenceInput label="Subject" source="subject.id" reference="subjects" validate={validateId}>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="publisher" validate={validateString} />
                <NumberInput source="publishedYear" min={0} max={9999} validate={validateNumber} />
                <TextInput source="contributors" fullWidth validate={validateString} />
                <TextInput multiline source="summary" fullWidth validate={validateSummary} />
                <TextInput source="coverImagePath" label="Cover Image Link" fullWidth validate={validateString} />
                <NumberInput source="numberOfCopy" min={0} max={9999} validate={validateNumber} />
            </SimpleForm>
        </Edit>
    )
};

export const BookCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
                <TextInput source="name" label="Title" fullWidth validate={validateTitle} />
                <ReferenceInput label="Subject" source="subject.id" reference="subjects" validate={validateId}>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="publisher" validate={validateString} />
                <NumberInput source="publishedYear" min={0} max={9999} validate={validateNumber} />
                <TextInput source="contributors" fullWidth validate={validateString} />
                <TextInput multiline source="summary" fullWidth validate={validateSummary} />
                <TextInput source="coverImagePath" label="Cover Image Link" fullWidth validate={validateString} />
                <NumberInput source="numberOfCopy" min={0} max={9999} validate={validateNumber} />
            </SimpleForm>
        </Create>
    )
};
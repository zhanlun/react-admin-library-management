import Link from '@material-ui/core/Link';
import * as React from "react";
import { Create, Datagrid, List, SimpleForm, TextField, TextInput, useRecordContext,
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

const CustomLink = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    return <Link href={`/#/books?filter=` + encodeURI(JSON.stringify({ subject: { id: record.id}} ))}>{record[source]}</Link>;
}

export const SubjectList = props => (
    <List {...props} bulkActionButtons={BulkActionButtons}>
        <Datagrid>
            <TextField source="id" />
            <CustomLink source="name" />
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

export const SubjectCreate = props => (
    <Create {...props}>
        <SimpleForm toolbar={<DefaultToolbarWithoutDeleteButton />} warnWhenUnsavedChanges margin="normal" variant="standard">
            <TextInput source="name" label="Subject name" validate={validateName} />
        </SimpleForm>
    </Create>
);
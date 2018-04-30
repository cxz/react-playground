import React from 'react';

import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  ChipField,
  Chip,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  ReferenceArrayField,
  ReferenceManyField,
  AutocompleteInput,
  SingleFieldList,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  Filter,
} from 'react-admin';

import {PeopleIcon} from '@material-ui/icons/People';
export const UserIcon = PeopleIcon;

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="login" />
      <TextField source="nome" />
      <TextField source="status" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.login}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="login" />
      <TextInput source="nome" />
      <TextInput source="email" />
      <TextInput source="numeroDocumento" />
      <TextInput source="telefone" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="login" />
      <TextInput source="nome" />
      <TextInput source="email" />
      <TextInput source="numeroDocumento" />
      <TextInput source="telefone" />
    </SimpleForm>
  </Create>
);

export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="login" />
      <TextField source="nome" />
      <TextField source="email" />
      <TextField source="numeroDocumento" />
    </SimpleShowLayout>
  </Show>
);

import React from 'react';
import { CreateBase, useQueryWithStore, Loading, useTranslate } from 'react-admin';
import SkillForm from './SkillForm';
import Alert from '@material-ui/lab/Alert';
import CreatePage from '../../layout/CreatePage';

const SkillCreate = (props) => {
  const { loading, data: locations } = useQueryWithStore({ type: 'getList', resource: 'Location' });
  const translate = useTranslate();
  return loading ? (
    <Loading />
  ) : locations.length === 0 ? (
    <Alert severity="error">{translate('app.helper.no_address')}</Alert>
  ) : (
    <CreateBase {...props}>
      <CreatePage title={translate('app.action.create_event')}>
        <SkillForm />
      </CreatePage>
    </CreateBase>
  );
};

export default SkillCreate;

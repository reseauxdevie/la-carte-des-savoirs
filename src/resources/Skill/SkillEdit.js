import React from 'react';
import { EditBase, linkToRecord, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import SkillForm from './SkillForm';
import EditPage from '../../layout/EditPage';
import EditTitle from './EventTitle';

const SkillEdit = (props) => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  if (!identity?.id) return null;
  return (
    <EditBase redirect="show" {...props}>
      <EditPage
        title={<EditTitle />}
        actions={{ [linkToRecord('/Skill', props.id, 'show')]: translate('ra.action.show')}}
      >
        <EventForm />
      </EditPage>
    </EditBase>
  );
};

export default SkillEdit;

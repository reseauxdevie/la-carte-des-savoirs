import React, { useCallback } from 'react';
import { Typography, Card } from '@material-ui/core';
import { ShowBase, useRecordContext, useTranslate } from 'react-admin';
import { ImageField, ReferenceField } from '@semapps/field-components';
import { AvatarWithLabelField } from '@semapps/field-components';
import { GridList } from '@semapps/list-components';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { ReferenceCollectionField } from '@semapps/activitypub-components';
import EventAlert from './EventAlert';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../layout/HeaderShow';
import EventJoinCard from '../../commons/cards/EventJoinCard';
import BodyList from '../../commons/lists/BodyList/BodyList';
import EventDetails from './EventDetails';
import SkillList from '../Skill/SkillList';
import EventConditionsField from '../../commons/fields/EventConditionsField';
import EditButton from '../../commons/buttons/EditButton';
import ShareButton from '../../commons/buttons/ShareButton';
import HostLocationField from '../../commons/fields/HostLocationField';
import ContactField from '../../commons/fields/ContactField';
import useOpenExternalApp from "../../hooks/useOpenExternalApp";

const LinkToExternalApp = ({ type, linkType = 'show', children }) => {
  const record = useRecordContext();
  const openExternalApp = useOpenExternalApp();
  return (
    <a href={openExternalApp(type, record.id, linkType)}>
      {children}
    </a>
  )
}

const EventShow = (props) => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  const contactFieldLabel = useCallback(record => {
    return translate('app.action.contact')
  }, [identity, translate]);
  if (!identity?.id) return null;
  return (
    <ShowBase {...props}>
      <>
        <EventDetails />
        <SkillList />
      </>
    </ShowBase>
  );
};

export default EventShow;

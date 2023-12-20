import React, { useState } from 'react';
import { ListBase, useRecordContext, useTranslate, ShowButton } from 'react-admin';
import { Container, Grid, Hidden, useMediaQuery, AppBar, Tabs, Tab, makeStyles, Box } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { List } from 'react-admin';
import { MapList } from '@semapps/geo-components';
import { MapField } from '@semapps/geo-components';
import { ReferenceField } from '@semapps/field-components';
import CardsList from '../../commons/lists/CardsList';
import EventCard from '../Event/EventCard';
import HeaderTitle from '../../layout/HeaderTitle';
import ProfileCard from '../../commons/cards/ProfileCard';
import Alert from "@material-ui/lab/Alert";
import AppIcon from '../../config/AppIcon';

import { Show, SimpleShowLayout, ReferenceArrayField } from 'react-admin';
import { ChipList } from '@semapps/list-components';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey['300'],
    boxShadow: 'none',
    zIndex: 900,
  },
  mission: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('xs')]: {
      marginTop: 5,
    }
  }
}));

const SkillMap = (props) => {
  useCheckAuthenticated();

  
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const translate = useTranslate();
  return (
    <>
      
            <ListBase
              perPage={1000}
              {...props}
            >
              <MapList
                address={(record) => (
                  <>
                    {record?.['vcard:given-name'] + ', ' + record?.['vcard:hasAddress']?.['vcard:given-name']}
                    {record?.['vcard:note'] && (
                      <Box mb={2} mt={2}>
                        <Alert severity="info">
                          <strong>{translate('resources.Location.fields.vcard:note')}</strong>: {record?.['vcard:note']}
                        </Alert>
                      </Box>
                    )}
                  </>
                )}
                latitude={(record) => record?.['vcard:hasGeo']?.['vcard:latitude']}
                longitude={(record) => record?.['vcard:hasGeo']?.['vcard:longitude']}
                label={record => record?.['vcard:given-name']}
                description={record => record?.['vcard:note']}
                height="calc(100vh - 64px)"
                popupContent={({ record, basePath }) => (
                  <>
                    <img src={record?.['vcard:photo']} height={80}></img>
                    <h1>{record?.['vcard:given-name']}</h1>
                    <p>{record?.['vcard:note']}</p>
                    <ShowButton basePath={basePath} record={record} />
                  </>
                )}
              />
            </ListBase>
    </>
  );
};

export default SkillMap;

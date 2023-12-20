import React, { useCallback } from 'react';
import { Typography, Card } from '@material-ui/core';
import { ShowBase, useRecordContext, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';

const SkillList = (props) => {
    const { identity } = useCheckAuthenticated();
    const translate = useTranslate();
    const contactFieldLabel = useCallback(record => {
      return translate('app.action.contact')
    }, [identity, translate]);
    if (!identity?.id) return null;
    return (
        <>
            <Typography variant="h4">
                Compétences
            </Typography>

            <Card>
                <Typography variant="h5">
                    Cuisine
                </Typography>
            </Card>
        </>

);
};

export default SkillList;
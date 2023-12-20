import SkillEdit from '../Event/EventEdit';
import SkillMap from './SkillMap';
import SkillShow from './SkillShow';
import { BuildIcon as SkillIcon } from '@material-ui/icons/Build';
import SkillCreate from './SkillCreate';

export default {
  config: {
    list: SkillMap,
    show: SkillShow,
    create: SkillCreate,
    edit: SkillEdit,
    icon: SkillIcon,
    options: {
      label: 'Événements',
    },
  },
  dataModel: {
    types: ['vcard:Individual', 'as:Profile'],
    list: {
      blankNodes:['vcard:hasGeo']
    }
  },
  translations: {
    en: {
      name: 'Event |||| Events',
      fields: {
        name: 'Title',
        image: 'Image',
        startTime: 'Start time',
        endTime: 'End time',
        content: 'About',
        location: 'Location',
        'dc:creator': 'Organizer',
        'apods:hasFormat': "Event type",
        'apods:hasStatus': 'Status',
        'apods:attendees': 'Attendees',
        'apods:maxAttendees': 'Max attendees',
        'apods:closingTime': 'Closing time',
        'apods:otherConditions': 'Other conditions',
      },
    },
    fr: {
      name: 'Evénement |||| Evénements',
      fields: {
        name: 'Titre',
        image: 'Image',
        startTime: 'Date de début',
        endTime: 'Date de fin',
        content: 'Présentation',
        location: 'Adresse',
        'dc:creator': 'Organisateur',
        'apods:hasFormat': "Type d'événement",
        'apods:hasStatus': 'Statut',
        'apods:attendees': 'Participants',
        'apods:maxAttendees': 'Participants maximum',
        'apods:closingTime': 'Fin des inscriptions',
        'apods:otherConditions': 'Autres conditions',
      },
    },
  },
};

import { createContext } from 'react';
import { datastore } from './services/datastore';

export const StorageContext = createContext(datastore);
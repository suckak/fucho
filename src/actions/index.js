import axios from 'axios';

import {actions} from '../utils/constans';

const API_KEY = '65cb60e720d14a089c719e65798f4269';
const URL = 'http://api.football-data.org/v1/';

let api = axios.create({
    headers: {'X-Auth-Token': API_KEY}
});

const createURL = (endPoint) => URL + endPoint;

export const getCompetitions = () => {
    return {
            type : actions.GET_COMPETITIONS,
            payload : axios.get(createURL('competitions'))
        }
};

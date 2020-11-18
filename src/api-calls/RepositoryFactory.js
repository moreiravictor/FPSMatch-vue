import KillsRepository from './KillsRepository';
import MatchRepository from './MatchRepository';
import TeamsRepository from './TeamsRepository';
import WeaponsRepository from './WeaponsRepository';

const repositories = {
    teams: TeamsRepository,
    weapons: WeaponsRepository,
    match: MatchRepository,
    kills: KillsRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
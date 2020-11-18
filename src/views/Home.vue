<template>
    <div class="home-outter">
        Athon Tech
    </div>
  
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
const weaponsCaller = RepositoryFactory.get('weapons');
const teamsCaller = RepositoryFactory.get('teams');
const matchCaller = RepositoryFactory.get('match');
const killCaller = RepositoryFactory.get('kills');

export default {
    data() {
        return {
            players: {}
            }
    },
    mounted() {
        weaponsCaller.getWeapons();

        teamsCaller.getTeamsDomains();

        matchCaller.getMatchWinner(1);
        matchCaller.getHeadshots(1);
        matchCaller.getMatchBestPlayer(1);
        matchCaller.getMatchTeamsBestPlayers(1);
        matchCaller.getMatchTeams(1);
        matchCaller.getRank(1);

        killCaller.getKillsDomains();

    }

}

</script>

<style>

</style>
<template>
    <v-card>
        <v-card-text>
            <div class="headline">{{ board.name }}</div>
            <v-btn :to="{ name: 'board', params: { id: board._id } }" x-small color="primary">View Board</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'boardCard',
    props: ['board']
}
</script>
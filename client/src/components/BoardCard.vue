<template>
    <v-card>
        <v-card-text>
            <div>{{ board.name }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'boardCard',
    props: ['board']
}
</script>
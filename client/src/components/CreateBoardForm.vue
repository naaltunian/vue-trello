<template>
  <v-flex sm3 pa-2>
    <v-card>
      <v-card-title primary-title style="flex-direction: column;">
        <div class="headline">Create Board</div>
        <div>
          <v-form
            @submit.prevent="createBoard"
            >
            <v-text-field
              v-model="name"
              label="Title"
              required
            ></v-text-field>
            <v-btn type="submit">Create</v-btn>
          </v-form>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'createBoardForm',
    data: () => ({
        name: ''
    }),
    methods: {
        ...mapActions(['createBoardAction']),
        async createBoard() {
            await this.createBoardAction(this.name);
        }
    }
}
</script>
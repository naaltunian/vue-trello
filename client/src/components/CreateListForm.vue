<template>
  <v-card max-width="300" class="mx-auto">
    <v-card-title primary-title style="flex-direction: column;">
      <div class="headline">Create List</div>
      <div>
        <v-form
          @submit.prevent="createList"
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'createListForm',
    data: () => ({
        name: ''
    }),
    methods: {
        ...mapActions(['createListAction']),
        async createList() {
            await this.createListAction(this.name);
            this.name = '';
        }
    }
}
</script>
<template>
  <v-card max-width="300" class="mx-auto">
    <v-card-title primary-title style="flex-direction: column;">
      <div class="headline">Create List</div>
      <div>
        <v-form
          @submit.prevent="createList"
        >
          <v-text-field
            v-model="list.name"
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
import api from '../api/api';

export default {
    name: 'createListForm',
    data() {
        return {
            list: {
                name: '',
                boardId: this.$route.params.id
            }
        }
    },
    props: ['lists'],
    methods: {
        async createList() {
          if (this.list.name === '') return;
          console.log(this.list);
          const list = await api.createList(this.list);
          this.list.name = '';
          this.lists.push(list);
        }
    }
}
</script>
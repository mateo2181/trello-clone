<template>
  <div class="task-view">
    <div class="flex flex-col">
      <input
        type="text"
        class="p-2 w-full flex-grow text-xl bg-gray-200"
        :value="task.name"
        @change="updateTaskProperty($event,'name')"
      />
      <textarea
        class="w-full bg-gray-200 rounded-sm leading-normal py-2 px-2 border-none mt-2 h-64"
        :value="task.description"
        @change="updateTaskProperty($event,'description')"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskProperty(event, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: event.target.value
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.task-view {
  @apply bg-white p-4 mx-auto overflow-y-auto rounded shadow;
  max-width: 600px;
  height: auto;
}
</style>
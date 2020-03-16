<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="task"
      :transferData="{ 
        type: 'task', 
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
        }"
    >
      <div @click="goToTask(task)">
        <div>{{ task.name }}</div>
        <div v-if="task.description" class="block font-light text-sm">{{ task.description }}</div>
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin';
import AppDrag from '@/components/AppDrag';
import AppDrop from '@/components/AppDrop';
export default {
  mixins: [movingTasksAndColumnsMixin],
  components: {
    AppDrag,
    AppDrop
  },
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: 'task', params: { id: task.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.task {
  @apply bg-white p-1 rounded cursor-pointer my-2 mx-2;
}
</style>
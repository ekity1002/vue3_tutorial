<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale',mymodal: theme === 'mymodal' }">
      <slot>defalt content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
        this.$emit('close');
    }
  }
}
</script>


<style scoped>
  .backdrop {
      top: 0;
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
  }
  .modal {
      width: 400px;
      padding: 20px;
      margin: 100px auto;
      background: white;
      border-radius: 10px;
  }
  h1 {
      color:rgb(3, 230, 177);
  }
  .sale {
      background: rgb(201, 82, 106);
      color: white;
  }
  .mymodal {
      background: rgb(190, 179, 179);
      color: white;
  }
  .actions {
    text-align: center;
    margin: 30px 0 10px 0;    
  }
  .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

</style>
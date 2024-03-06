<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        class="pagination-button"
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        class="pagination-button"
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        class="pagination-button"
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
        class="pagination-button"
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button
        class="pagination-button"
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PaginationItem',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      const pages = []
      const startPage = this.currentPage - 2
      const endPage = this.currentPage + 2

      for (let i = startPage; i <= endPage; i++) {
        if (i >= 1 && i <= this.totalPages) {
          pages.push({
            name: i,
            isDisabled: this.isPageActive(i)
          })
        }
      }
      console.log('This.totalpages', this.totalPages)

      return pages
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('page-changed', 1)
    },
    onClickPreviousPage() {
      this.$emit('page-changed', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('page-changed', page)
    },
    onClickNextPage() {
      this.$emit('page-changed', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('page-changed', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    }
  }
})
</script>

<style>
.pagination {
  list-style-type: none;
  margin: 0.4vw;
  padding: 0.625vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 0.85vw;
}

.pagination-item {
  display: inline-block;
}

.pagination-button {
  margin-top: 1rem;
  background: #ff8e3c;
  padding: 10px;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.pagination-button:hover {
  background-color: #abd1c6;
  color: white;
}
/* TODO: Look why does not work */
.pagination-button:focus{
  background-color: #abd1c6;
}

</style>

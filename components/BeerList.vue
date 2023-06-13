<template>
  <div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
      <tr>
        <th class="py-2 px-4 border-b">Name</th>
        <th class="py-2 px-4 border-b">Tagline</th>
        <th class="py-2 px-4 border-b">Description</th>
        <th class="py-2 px-4 border-b">Image</th>
        <th class="py-2 px-4 border-b">ABV</th>
        <th class="py-2 px-4 border-b">IBU</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="beer in filteredBeers" :key="beer.id">
        <td class="py-2 px-4 border-b">{{ beer.name }}</td>
        <td class="py-2 px-4 border-b">{{ beer.tagline }}</td>
        <td class="py-2 px-4 border-b">{{ beer.description }}</td>
        <td class="py-2 px-4 border-b">
          <img :src="beer.image_url" :alt="beer.name" class="h-12 w-12 object-contain">
        </td>
        <td class="py-2 px-4 border-b">{{ beer.abv }}</td>
        <td class="py-2 px-4 border-b">{{ beer.ibu }}</td>
      </tr>
      </tbody>


    </table>

    <!-- Pagination -->
    <div class="flex justify-center mt-4">
      <nav class="flex items-center space-x-2">
        <button
            class="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
        >
          Previous
        </button>
        <template v-for="pageNumber in totalPages" :key="pageNumber" >
          <button
              class="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
              :class="{ 'bg-gray-300': currentPage === pageNumber }"
              @click="goToPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
        </template>
        <button
            class="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
      </nav>
  </div>

  </div>
</template>

<script lang="ts" setup>
import {Beer} from "~/types";

interface Props {
  beers: Beer[],
  itemsPerPage: number
}

const props = defineProps<Props>()

const currentPage = ref(1)

const filteredBeers = computed(() => {
  const startIndex = (currentPage.value - 1) * props.itemsPerPage;
  const endIndex = startIndex + props.itemsPerPage;

  return props.beers
      .filter(beer => !beer.description.toLowerCase().includes('centennial hops'))
      .sort((a, b) => a.abv - b.abv)
      .slice(startIndex, endIndex);
})

const totalPages = computed(()=>  {
  return Math.ceil(props.beers.length / props.itemsPerPage);
})

const  goToPage  = (pageNumber: number) => {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
}
</script>

<style>


table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 0.75rem;
}

th {
  background-color: #edf2f7;
}

tr:nth-child(even) {
  background-color: #f7fafc;
}

.border-b {
  border-bottom: 1px solid #cbd5e0;
}
</style>

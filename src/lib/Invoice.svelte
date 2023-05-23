<script>
  import Item from "./Item.svelte";
</script>

<div class="px-4 bg-secondary h-100% text-white py-6">
  <div class="flex flex-row justify-between md:mx-24 mx-4 mb-8">
    <div class="flex flex-col">
      <h2 class="text-4xl font-bold tracking-widest">Invoices</h2>
      <p class="text-sm text-gray-200">This are 7 total invoices</p>
    </div>
    <div class="flex flex-row items-center">
      <p class="text-xl font-bold">Filter By status</p>
      <iconify-icon
        class="text-violet-600 text-2xl mr-5 ml-3"
        icon="material-symbols:keyboard-arrow-down-rounded"
      />
      <button
        class=" h-18 flex flex-row items-center px-3 py-4 bg-gradient-to-r from-violet-800 via-violet-700 to-violet-500 rounded-3xl"
      >
        <iconify-icon
          icon="material-symbols:add"
          class="h-full rounded-full mr-2 bg-white text-violet-700 flex justify-center items-center text-2xl p-2 font-bold"
        />
        <span class="text-lg font-bold tracking-wide">New Invoice</span>
      </button>
    </div>
  </div>
  <div class="flex flex-col md:mx-24 mx-4">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
</div>

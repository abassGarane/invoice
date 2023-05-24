<script>
  import { Link } from "svelte-routing";
  import Item from "./Item.svelte";
</script>

<div class="px-4 bg-secondary h-100% text-white py-6">
  <div class="flex flex-row justify-between md:mx-24 mx-4 mb-8">
    <div class="flex flex-col">
      <h2 class="text-4xl font-bold tracking-widest">Invoices</h2>
      <p class="text-sm text-gray-200">There are 7 total invoices</p>
    </div>
    <div class="flex flex-row items-center">
      <p class="text-xl font-bold">Filter By status</p>
      <iconify-icon
        class="text-purple-600 text-2xl mr-5 ml-3"
        icon="material-symbols:keyboard-arrow-down-rounded"
      />
      <Link
        to="/invoices/new"
        class=" h-16 flex flex-row items-center px-3 py-4 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-500 rounded-full"
      >
        <iconify-icon
          icon="material-symbols:add"
          class="h-12 w-12 rounded-full mr-2 bg-white text-purple-700 flex justify-center items-center text-4xl p-2 font-bold"
        />
        <span class="text-lg font-bold tracking-wide">New Invoice</span>
      </Link>
    </div>
  </div>
  <div class="flex flex-col md:mx-24 mx-4">
    <Item status="Paid" />
    <Item status="Pending" />
    <Item status="Paid" />
    <Item status="Draft" />
    <Item status="Pending" />
    <Item status="Pending" />
  </div>
</div>

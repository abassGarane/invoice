<script>
  import Status from "./Status.svelte";
</script>

<div
  class="flex items-center justify-between bg-primary my-3 rounded-xl px-6 py-2 shadow-sm flex-wrap"
>
  <p class="font-bold">#RT3939</p>
  <p class="text-gray-400">Due on 19 Aug 2023</p>
  <p class="text-gray-300">Abass Garane</p>
  <p class="font-bold">$1700.00</p>
  <Status />
  <iconify-icon
    class="text-violet-900 text-2xl font-bold hidden md:block"
    icon="material-symbols:chevron-right"
  />
</div>

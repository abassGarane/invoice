<script>
  import { Route, Router } from "svelte-routing";
  import Header from "./lib/Header.svelte";
  import Home from "./pages/Home.svelte";
  import CreateInvoice from "./pages/CreateInvoice.svelte";
  import ViewInvoice from "./pages/ViewInvoice.svelte";
  export let url = "/";
</script>

<main>
  <div />
  <Router {url}>
    <Header />
    <Route path="/invoices/:id" let:params>
      <ViewInvoice {params} />
    </Route>
    <Route path="/invoices/new" component={CreateInvoice} />
    <Route path="/" component={Home} />
  </Router>
</main>

<template>
    <div id="NavBar">
         <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">The<em>Loop</em></b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav id="routes" class="ml-auto">
           <b-nav-item  to="/"> Home</b-nav-item>
           <b-nav-item to="news">News</b-nav-item>
           <b-nav-item to="products">Products</b-nav-item>
           <b-nav-item to="movies">Movies</b-nav-item>
           <b-nav-item to="music">Music</b-nav-item>
           <b-nav-item to="about"> About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="outline-light">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">PT</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>

              <!-- Using button-content slot -->
              <template slot="button-content">Contato</template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>

            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    components: {},
    data() {
        return {

        }
    },
    props: [],
    methods: {}
}
</script>

<style lang="scss" >

#routes {
  // text-shadow: 1px 1px 1px rgb(24, 24, 24);

}

</style>

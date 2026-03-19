<template>
    <nav>
        <RouterLink to="/Overview" class="navlink">Overzicht</RouterLink>
        <RouterLink to="/Create" class="navlink">Artikel toevoegen</RouterLink>
        <RouterLink to="/Order" class="navlink">Artikelen bestellen</RouterLink>
    </nav>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
nav {
    margin: 20px;
}
</style>

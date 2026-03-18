<template>
    <nav>
        <RouterLink to="/Overview" class="routerlink">Overzicht</RouterLink>
        <RouterLink to="/Create" class="routerlink">Artikel toevoegen</RouterLink>
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

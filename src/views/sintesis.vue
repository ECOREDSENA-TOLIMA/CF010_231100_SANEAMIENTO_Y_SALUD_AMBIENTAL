<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Contaminación atmosférica y cambio climático que son desafíos urgentes para la humanidad. La emisión de gases y partículas tóxicas por actividades industriales, transporte y deforestación deteriora la calidad del aire y provoca problemas respiratorios y cardiovasculares en la población. Además, estos contaminantes contribuyen al efecto invernadero, intensificando el cambio climático global. El calentamiento del planeta conlleva eventos climáticos extremos, como sequías, inundaciones y tormentas más intensas. Para combatir estos problemas, se requieren acciones a nivel mundial, como transiciones hacia energías limpias, conservación de bosques y adopción de prácticas sostenibles para asegurar un futuro más saludable y sostenible.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

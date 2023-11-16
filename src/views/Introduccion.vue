<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-right")
        p Es innegable que el rápido deterioro de la calidad ambiental de nuestro planeta ha generado una creciente preocupación en la comunidad global. Científicos, líderes políticos y la sociedad en su conjunto se han visto movilizados por la necesidad de tomar medidas urgentes y efectivas para abordar los riesgos asociados al cambio climático.
  
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/AXEO6d-BgXg" title="Contaminación atmosférica y cambio climático" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
